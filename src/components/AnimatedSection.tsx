import { ReactNode, useEffect, useRef, useState } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
}

// Reveal-on-scroll with a CSS transition and one IntersectionObserver per section. Replaces the
// framer-motion version: same look, no animation library in the bundle. Reduced-motion users
// get the content without the slide (see .reveal in index.css).
const AnimatedSection = ({ children, className = "", delay = 0 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => {
      io.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className={`reveal ${shown ? "reveal-in" : ""} ${className}`} style={delay ? { transitionDelay: `${delay}s` } : undefined}>
      {children}
    </div>
  );
};

export default AnimatedSection;
