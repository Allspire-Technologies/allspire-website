// Cloudflare Pages Function: receives the Contact form POST and relays it to hello@allspire.tech
// via Resend's HTTP API (the same provider as the iTrova app and CRM since the Sender.net
// retirement). Runs server-side so the API key never reaches the browser.
//
// Required environment variable (Cloudflare Pages → Settings → Environment variables, encrypted):
//   RESEND_API_KEY    : a Resend API key for the Allspire account
// Optional overrides (plain vars, sensible defaults below):
//   CONTACT_TO        : inbox that receives submissions        (default hello@allspire.tech)
//   CONTACT_FROM_EMAIL: sender on the Resend-verified domain   (default no-reply@mail.allspire.tech)
//   CONTACT_FROM_NAME : display name for the sender            (default "Allspire Website")

const RESEND_ENDPOINT = "https://api.resend.com/emails";

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const looksLikeEmail = (s) => typeof s === "string" && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s.trim());

export async function onRequestPost({ request, env }) {
  let data;
  try {
    data = await request.json();
  } catch {
    return json({ ok: false, error: "Invalid request." }, 400);
  }

  // Honeypot: bots fill hidden fields. Pretend success so they don't retry, but send nothing.
  if (data && typeof data.company === "string" && data.company.trim() !== "") {
    return json({ ok: true });
  }

  const name = (data?.name ?? "").toString().trim();
  const email = (data?.email ?? "").toString().trim();
  const message = (data?.message ?? "").toString().trim();

  if (!name || !message || !looksLikeEmail(email)) {
    return json({ ok: false, error: "Please provide your name, a valid email and a message." }, 400);
  }
  if (name.length > 200 || email.length > 200 || message.length > 5000) {
    return json({ ok: false, error: "One of the fields is too long." }, 400);
  }

  const key = env.RESEND_API_KEY;
  if (!key) {
    return json({ ok: false, error: "The contact form isn't configured yet. Please email us directly." }, 500);
  }

  const to = env.CONTACT_TO || "hello@allspire.tech";
  const fromEmail = env.CONTACT_FROM_EMAIL || "no-reply@mail.allspire.tech";
  const fromName = env.CONTACT_FROM_NAME || "Allspire Website";

  const html =
    `<p><strong>New message from the website contact form</strong></p>` +
    `<p><strong>Name:</strong> ${esc(name)}<br>` +
    `<strong>Email:</strong> <a href="mailto:${esc(email)}">${esc(email)}</a></p>` +
    `<p><strong>Message:</strong><br>${esc(message).replace(/\n/g, "<br>")}</p>`;

  let res;
  try {
    res = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
      body: JSON.stringify({
        from: `${fromName} <${fromEmail}>`,
        to: [to],
        // Replying in the inbox goes straight to the person who wrote in.
        reply_to: email,
        subject: `New contact message from ${name}`,
        html,
      }),
      // A stalled provider connection must not hold the request until the platform kills it.
      signal: AbortSignal.timeout(15000),
    });
  } catch {
    return json({ ok: false, error: "Couldn't reach the mail service. Please try again." }, 502);
  }

  const payload = await res.json().catch(() => ({}));
  // A 2xx without a message id is not a confirmed send.
  if (!res.ok || typeof payload?.id !== "string" || payload.id === "") {
    return json({ ok: false, error: "We couldn't send your message. Please email us directly." }, 502);
  }
  return json({ ok: true });
}
