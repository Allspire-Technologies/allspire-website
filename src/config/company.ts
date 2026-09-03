// Company facts used across the site. One place to change.
export const COMPANY = {
  name: "Allspire",
  legalName: "Allspire Technologies Limited",
  rc: "9702176",
  email: "hello@allspire.tech",
  address: "No 15, Oladayo Alokan Street, Ewu Elepe, Ikorodu, Lagos State, Nigeria",
  linkedin: "https://www.linkedin.com/company/allspiretech/",
  linktree: "https://linktr.ee/allspirehq",
  github: "https://github.com/Allspire-Technologies",
  siteUrl: "https://allspire.tech",
};

export const WHATSAPP_NUMBER = "2348137000305";
export const WHATSAPP_DISPLAY = "+234 813 700 0305";

export function whatsappLink(text = "Hello Allspire, I would like to talk about a project.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
