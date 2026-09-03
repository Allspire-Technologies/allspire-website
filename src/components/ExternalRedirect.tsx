import { useEffect } from "react";

// In-app fallback for paths that now live on another site. The real 301s are in public/_redirects
// (served by Cloudflare Pages before the SPA); this covers a cached index.html taking the route.
const ExternalRedirect = ({ to }: { to: string }) => {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);
  return (
    <p className="section-padding text-center text-muted-foreground">
      Taking you to <a href={to} className="underline">{to}</a>…
    </p>
  );
};
export default ExternalRedirect;
