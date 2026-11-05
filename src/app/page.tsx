import { AgencyStrip } from "@/components/agency/AgencyStrip";
import { Brief } from "@/components/brief/Brief";
import { Comparison } from "@/components/comparison/Comparison";
import { Contact } from "@/components/contact/Contact";
import { Creators } from "@/components/creators/Creators";
import { Faq } from "@/components/faq/Faq";
import { Hero } from "@/components/hero/Hero";
import { HowItWorks } from "@/components/how-it-works/HowItWorks";
import { Packages } from "@/components/packages/Packages";
import { JsonLd } from "@/components/seo/JsonLd";
import { HOME_JSON_LD } from "@/components/seo/structured-data";
import { SiteFooter } from "@/components/site-footer/SiteFooter";
import { SiteHeader } from "@/components/site-header/SiteHeader";
import { SongBand } from "@/components/song-band/SongBand";
import { StyleRails } from "@/components/style-rails/StyleRails";

export default function Home() {
  return (
    <>
      <JsonLd data={HOME_JSON_LD} />
      <SiteHeader />
      <main id="top">
        <Hero />
        <StyleRails />
        <SongBand />
        <Creators />
        <HowItWorks />
        <Comparison />
        <Brief />
        <Packages />
        <AgencyStrip />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
