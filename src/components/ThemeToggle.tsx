import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

// OS preference first, remembered choice after. The pre-paint script in index.html applies
// the same rule before React mounts, so there is no flash.
const readStored = (): boolean | null => {
  try {
    const s = localStorage.getItem("theme");
    return s === "dark" ? true : s === "light" ? false : null;
  } catch {
    return null;
  }
};

const ThemeToggle = () => {
  const [dark, setDark] = useState<boolean>(() => {
    const stored = readStored();
    if (stored !== null) return stored;
    return typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [explicit, setExplicit] = useState<boolean>(() => readStored() !== null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    // Keep the browser chrome colour in step with the explicit choice, not just the OS.
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", dark ? "#0b1220" : "#2f3cf0");
  }, [dark]);

  useEffect(() => {
    if (explicit) return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const follow = (e: MediaQueryListEvent) => {
      setDark(e.matches);
    };
    mq.addEventListener("change", follow);
    return () => {
      mq.removeEventListener("change", follow);
    };
  }, [explicit]);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    setExplicit(true);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* private mode: the choice lasts for this page only */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary/40 hover:text-primary"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light mode" : "Dark mode"}
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
};

export default ThemeToggle;
