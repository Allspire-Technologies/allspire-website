// Cloudflare Pages Function — receives the "Become an affiliate" form POST and inserts it into the
// iTrova CRM's applications queue (public.cs_referrer_application) via Supabase's REST API using the
// ANON key. RLS on that table grants anon INSERT only (no read/update), so the public key is safe to
// use here. Admins review + approve applications in the CRM.
//
// Required environment variables (Cloudflare Pages → Settings → Environment variables):
//   SUPABASE_URL       — the iTrova/shared project URL (https://<ref>.supabase.co)
//   SUPABASE_ANON_KEY  — that project's anon/public key (insert-only by RLS; mark as encrypted)

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

const looksLikeEmail = (s) => typeof s === "string" && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s.trim());

export async function onRequestPost({ request, env }) {
  let data;
  try {
    data = await request.json();
  } catch {
    return json({ ok: false, error: "Invalid request." }, 400);
  }

  // Honeypot — bots fill hidden fields. Pretend success so they don't retry, but store nothing.
  if (data && typeof data.company === "string" && data.company.trim() !== "") {
    return json({ ok: true });
  }

  const name = (data?.name ?? "").toString().trim();
  const phone = (data?.phone ?? "").toString().trim();
  const email = (data?.email ?? "").toString().trim();
  const howPromote = (data?.how_promote ?? "").toString().trim();

  if (!name || !phone) return json({ ok: false, error: "Please provide your name and phone number." }, 400);
  if (email && !looksLikeEmail(email)) return json({ ok: false, error: "Please enter a valid email." }, 400);
  if (name.length > 200 || phone.length > 40 || email.length > 200 || howPromote.length > 2000) {
    return json({ ok: false, error: "One of the fields is too long." }, 400);
  }

  const url = env.SUPABASE_URL;
  const key = env.SUPABASE_ANON_KEY;
  if (!url || !key) {
    return json({ ok: false, error: "The affiliate form isn't configured yet. Please email hello@allspire.tech." }, 500);
  }

  let res;
  try {
    res = await fetch(`${url}/rest/v1/cs_referrer_application`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ name, phone, email: email || null, how_promote: howPromote || null }),
    });
  } catch {
    return json({ ok: false, error: "Couldn't reach our servers. Please try again." }, 502);
  }

  if (!res.ok) {
    return json({ ok: false, error: "We couldn't submit your application. Please email us directly." }, 502);
  }
  return json({ ok: true });
}
