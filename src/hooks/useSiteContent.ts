import { useContent } from "@/hooks/useContent";
import {
  CASE_STUDIES_FALLBACK,
  COPY_FALLBACK,
  LOGOS_FALLBACK,
  STATS_FALLBACK,
  TEAM_FALLBACK,
  TESTIMONIALS_FALLBACK,
  WEBINAR_FALLBACK,
  mapCaseStudies,
  mapCopy,
  mapLogos,
  mapStats,
  mapTeam,
  mapTestimonials,
  mapWebinar,
  type CaseStudy,
  type Logo,
  type SiteCopy,
  type Stat,
  type TeamMember,
  type Testimonial,
  type Webinar,
} from "@/data/allspire";

export const useLogos = () => useContent<Logo[]>("logos", LOGOS_FALLBACK, mapLogos).data;
export const useStats = () => useContent<Stat[]>("stats", STATS_FALLBACK, mapStats).data;
export const useTestimonials = () => useContent<Testimonial[]>("testimonials", TESTIMONIALS_FALLBACK, mapTestimonials).data;
export const useTeam = () => useContent<TeamMember[]>("team", TEAM_FALLBACK, mapTeam).data;
export const useCopy = () => useContent<SiteCopy>("copy", COPY_FALLBACK, mapCopy).data;

export function useCaseStudies(): { items: CaseStudy[]; loaded: boolean } {
  const { data, loaded } = useContent<CaseStudy[]>("case-studies", CASE_STUDIES_FALLBACK, mapCaseStudies);
  return { items: data, loaded };
}

/**
 * The current webinar: the proxy returns at most one published row (newest updated_at).
 * Null once the CMS answers and nothing is published.
 */
export function useWebinar(): Webinar | null {
  const { data } = useContent<Webinar[]>("webinar", [WEBINAR_FALLBACK], mapWebinar);
  return data[0] ?? null;
}
