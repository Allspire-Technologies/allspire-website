import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { useSeo } from "@/hooks/useSeo";

const NotFound = () => {
  const location = useLocation();
  useSeo("Page not found", "That page does not exist.", { noindex: true });

  useEffect(() => {
    console.error("404: no route for", location.pathname);
  }, [location.pathname]);

  return (
    <PageLayout>
      <section className="container-tight section-padding text-center">
        <span className="eyebrow">404</span>
        <h1 className="mt-4 text-3xl md:text-4xl">That page does not exist</h1>
        <p className="mx-auto mt-3 max-w-md text-body">The link may be old, or the page may have moved. The home page has everything.</p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/" className="btn-brand">Back to home</Link>
          <Link to="/contact" className="btn-line">Talk to us</Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default NotFound;
