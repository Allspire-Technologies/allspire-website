import { useContent } from "@/hooks/useContent";
import {
  CASE_STUDIES_FALLBACK,
  COPY_FALLBACK,
  LOGOS_FALLBACK,
  STATS_FALLBACK,
  TEAM_FALLBACK,
  TESTIMONIALS_FALLBACK,
  WEBINAR_FALLBACK,
  mapCopy,
  mapWebinar,
  type CaseStudy,
  type Logo,
  type SiteCopy,
  type Stat,
  type TeamMember,
  type Testimonial,
  type Webinar,
} from "@/data/allspire";

export const useLogos = () => useContent<Logo[]>("logos", LOGOS_FALLBACK).data;
export const useStats = () => useContent<Stat[]>("stats", STATS_FALLBACK).data;
export const useTestimonials = () => useContent<Testimonial[]>("testimonials", TESTIMONIALS_FALLBACK).data;
export const useTeam = () => useContent<TeamMember[]>("team", TEAM_FALLBACK).data;
export const useCopy = () => useContent<SiteCopy>("copy", COPY_FALLBACK, mapCopy).data;

export function useCaseStudies(): { items: CaseStudy[]; loaded: boolean } {
  const { data, loaded } = useContent<CaseStudy[]>("case-studies", CASE_STUDIES_FALLBACK);
  return { items: data, loaded };
}

/** The single webinar record. Null once the CMS answers and the record is unpublished. */
export function useWebinar(): Webinar | null {
  const { data } = useContent<Webinar[]>("webinar", [WEBINAR_FALLBACK], mapWebinar);
  return data[0] ?? null;
}
