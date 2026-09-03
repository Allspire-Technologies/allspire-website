interface Props {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  eager?: boolean;
}

/** A screenshot in light browser chrome. Stays light in dark mode on purpose: it is a framed product shot. */
const Shot = ({ src, alt, label, className = "", eager = false }: Props) => (
  <div className={`shot ${className}`}>
    <div className="shot-bar">
      <i /><i /><i />
      {label && <span className="ml-2 font-mono text-[11px] text-muted-foreground">{label}</span>}
    </div>
    <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} decoding="async" />
  </div>
);

export default Shot;
