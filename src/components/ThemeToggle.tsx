import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <motion.button
      onClick={() => setDark(!dark)}
      className="relative w-14 h-7 rounded-full p-0.5 transition-colors duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      style={{
        background: dark
          ? "linear-gradient(135deg, hsl(234 89% 30%), hsl(270 70% 25%))"
          : "linear-gradient(135deg, hsl(40 95% 65%), hsl(30 95% 55%))",
        boxShadow: dark
          ? "0 0 12px hsl(234 89% 54% / 0.3), inset 0 1px 2px hsl(0 0% 0% / 0.3)"
          : "0 0 12px hsl(40 95% 65% / 0.3), inset 0 1px 2px hsl(0 0% 100% / 0.3)",
      }}
      whileTap={{ scale: 0.95 }}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Stars in dark mode */}
      {dark && (
        <>
          <motion.div
            className="absolute w-1 h-1 rounded-full bg-white/70"
            style={{ top: 6, left: 8 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute w-0.5 h-0.5 rounded-full bg-white/50"
            style={{ top: 16, left: 14 }}
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          />
        </>
      )}

      {/* Thumb */}
      <motion.div
        className="w-6 h-6 rounded-full flex items-center justify-center shadow-md"
        style={{
          background: dark
            ? "linear-gradient(135deg, hsl(220 20% 20%), hsl(220 15% 30%))"
            : "linear-gradient(135deg, hsl(45 100% 95%), hsl(0 0% 100%))",
          boxShadow: dark
            ? "0 2px 8px hsl(0 0% 0% / 0.4)"
            : "0 2px 8px hsl(0 0% 0% / 0.15)",
        }}
        animate={{ x: dark ? 26 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <motion.div
          key={dark ? "moon" : "sun"}
          initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
        >
          {dark ? (
            <Moon className="w-3.5 h-3.5 text-blue-300" />
          ) : (
            <Sun className="w-3.5 h-3.5 text-amber-500" />
          )}
        </motion.div>
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
