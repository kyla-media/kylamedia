import { FAQ } from "@/content/faq";
import { SITE } from "@/content/site";
import { FUNNEL } from "@/content/styles";

const org = {
  "@type": "Organization",
  "@id": `${SITE.url}/#org`,
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  logo: `${SITE.url}/icon.svg`,
};

const service = {
  "@type": "Service",
  "@id": `${SITE.url}/#service`,
  name: "AI UGC video ads",
  serviceType: "AI UGC ad production",
  provider: { "@id": org["@id"] },
  areaServed: "Worldwide",
  description: SITE.description,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Ad styles",
    itemListElement: FUNNEL.flatMap((stage) =>
      stage.styles.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `${s.name} (${stage.name})`,
          description: s.line,
        },
      })),
    ),
  },
};

/** FAQ answers without the "to confirm" placeholders, so nothing unfinished is published. */
const faq = {
  "@type": "FAQPage",
  mainEntity: FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export const HOME_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    org,
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#site`,
      url: SITE.url,
      name: SITE.name,
      publisher: { "@id": org["@id"] },
    },
    service,
    faq,
  ],
};
