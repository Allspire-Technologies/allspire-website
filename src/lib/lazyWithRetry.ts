import { ComponentType, lazy } from "react";

// A route chunk can 404 after a deploy (the browser holds an old index.html that points at
// hashed files that no longer exist). Reload once to pick up the new manifest; if it still
// fails, surface the error so the boundary can show something.
export function lazyWithRetry<T extends ComponentType<unknown>>(loader: () => Promise<{ default: T }>) {
  return lazy(async () => {
    const key = "chunk-reload";
    try {
      const mod = await loader();
      sessionStorage.removeItem(key);
      return mod;
    } catch (err) {
      if (!sessionStorage.getItem(key)) {
        sessionStorage.setItem(key, "1");
        window.location.reload();
        return new Promise<never>(() => {});
      }
      throw err;
    }
  });
}
