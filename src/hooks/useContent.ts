import { useEffect, useState } from "react";

// Snapshot-then-swap: render the bundled fallback immediately, then replace it with the
// published rows from /api/content/<collection> (a Pages Function in front of Supabase).
// A failed or missing API keeps the fallback, so the page never blanks. Results are memoised
// for the session so navigating between pages does not refetch.

type Source = "snapshot" | "live";

const cache = new Map<string, unknown[]>();
const inflight = new Map<string, Promise<unknown[] | null>>();

async function fetchCollection(collection: string): Promise<unknown[] | null> {
  if (cache.has(collection)) return cache.get(collection) ?? null;
  const pending = inflight.get(collection);
  if (pending) return pending;
  const p = (async () => {
    try {
      const res = await fetch(`/api/content/${collection}`, { headers: { Accept: "application/json" } });
      if (!res.ok) return null;
      const body = await res.json();
      if (!Array.isArray(body)) return null;
      cache.set(collection, body);
      return body;
    } catch {
      return null;
    } finally {
      inflight.delete(collection);
    }
  })();
  inflight.set(collection, p);
  return p;
}

const identity = <T,>(rows: unknown[]) => rows as unknown as T;

export function useContent<T>(collection: string, fallback: T, map: (rows: unknown[]) => T = identity): { data: T; source: Source; loaded: boolean } {
  const cached = cache.get(collection);
  const [state, setState] = useState<{ data: T; source: Source; loaded: boolean }>(() =>
    cached ? { data: map(cached), source: "live", loaded: true } : { data: fallback, source: "snapshot", loaded: false },
  );

  useEffect(() => {
    let alive = true;
    if (cache.has(collection)) return;
    fetchCollection(collection).then((rows) => {
      if (!alive) return;
      if (rows) setState({ data: map(rows), source: "live", loaded: true });
      else setState((s) => ({ ...s, loaded: true }));
    });
    return () => {
      alive = false;
    };
    // map/fallback are stable module-level values at every call site.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collection]);

  return state;
}
