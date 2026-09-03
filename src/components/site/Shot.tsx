interface Props {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  eager?: boolean;
  /** Intrinsic size so the frame reserves space before the image arrives (no layout shift). */
  width?: number;
  height?: number;
}

/** A screenshot in light browser chrome. Stays light in dark mode on purpose: it is a framed product shot. */
const Shot = ({ src, alt, label, className = "", eager = false, width = 1400, height = 875 }: Props) => (
  <div className={`shot ${className}`}>
    <div className="shot-bar">
      <i /><i /><i />
      {label && <span className="ml-2 font-mono text-[11px] text-muted-foreground">{label}</span>}
    </div>
    <img src={src} alt={alt} width={width} height={height} loading={eager ? "eager" : "lazy"} decoding="async" fetchPriority={eager ? "high" : undefined} />
  </div>
);

export default Shot;
