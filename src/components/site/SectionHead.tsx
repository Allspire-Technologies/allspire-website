import { ReactNode } from "react";

interface Props {
  kicker: string;
  title: string;
  sub?: string;
  action?: ReactNode;
  className?: string;
  light?: boolean;
}

const SectionHead = ({ kicker, title, sub, action, className = "", light = false }: Props) => (
  <div className={`flex flex-col gap-4 md:flex-row md:items-end md:justify-between ${className}`}>
    <div className="max-w-2xl">
      <span className={`kicker ${light ? "text-[#8b93ff]" : ""}`}>{kicker}</span>
      <h2 className="mt-2 text-3xl md:text-4xl">{title}</h2>
      {sub && <p className={`mt-3 text-base md:text-lg ${light ? "text-navy-foreground" : "text-body"}`}>{sub}</p>}
    </div>
    {action && <div className="shrink-0">{action}</div>}
  </div>
);

export default SectionHead;
