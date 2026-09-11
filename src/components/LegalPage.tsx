import { type ReactNode, useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import PageLayout from "@/components/PageLayout";
import { Markdown } from "@/lib/markdown";
import { useContent } from "@/hooks/useContent";
import { useSeo } from "@/hooks/useSeo";
import { mapLegalRows, formatEffective, pickLegalVersion, todayIso, type LegalDoc, type LegalSlug } from "@/lib/legalDoc";

// One frame for every legal page: the CMS version in force renders as markdown; until the CMS
// answers (or if it has nothing for this slug) the bundled JSX snapshot shows instead. A
// future-dated version is announced under the date line and can be read ahead of time.

const NONE: LegalDoc[] = [];

export default function LegalPage({
  slug,
  title,
  seoTitle,
  seoDescription,
  snapshotEffective,
  children,
}: {
  slug: LegalSlug;
  title: string;
  /** The document title stays put whatever the CMS row is called, so the search listing is stable. */
  seoTitle: string;
  seoDescription: string;
  snapshotEffective: string;
  children: ReactNode;
}) {
  useSeo(seoTitle, seoDescription);
  const { data } = useContent<LegalDoc[]>("legal", NONE, mapLegalRows);
  const { current, upcoming } = pickLegalVersion(data, slug, todayIso());
  const [readingUpcoming, setReadingUpcoming] = useState(false);
  const shown = readingUpcoming && upcoming ? upcoming : current;

  return (
    <PageLayout>
      <section className="section-padding">
        <div className="container-tight">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{shown?.title ?? title}</h1>
            <p className="text-muted-foreground mb-8">Effective {formatEffective(shown?.effectiveAt ?? snapshotEffective)}</p>

            {upcoming && (
              <div role="status" className="mb-8 rounded-xl border border-primary/30 bg-primary/5 px-4 py-3 text-sm">
                {readingUpcoming ? (
                  <>
                    You are reading the version that takes effect on {formatEffective(upcoming.effectiveAt)}.{" "}
                    <button type="button" onClick={() => setReadingUpcoming(false)} className="font-semibold underline underline-offset-2">
                      Back to the current version
                    </button>
                  </>
                ) : (
                  <>
                    An updated version takes effect on {formatEffective(upcoming.effectiveAt)}.{" "}
                    <button type="button" onClick={() => setReadingUpcoming(true)} className="font-semibold underline underline-offset-2">
                      Read it
                    </button>
                  </>
                )}
              </div>
            )}

            {shown ? (
              <Markdown source={shown.bodyMd} className="prose prose-neutral dark:prose-invert max-w-none" />
            ) : (
              children
            )}
          </AnimatedSection>
        </div>
      </section>
    </PageLayout>
  );
}
