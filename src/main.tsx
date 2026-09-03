import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// A stale index.html after a deploy points at chunks that no longer exist; reload once.
window.addEventListener("vite:preloadError", (event) => {
  event.preventDefault();
  if (!sessionStorage.getItem("chunk-reload")) {
    sessionStorage.setItem("chunk-reload", "1");
    window.location.reload();
  }
});

createRoot(document.getElementById("root")!).render(<App />);
