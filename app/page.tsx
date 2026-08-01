import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { MarqueeBands } from "@/components/marquee-bands";
import { OfferSection } from "@/components/offer-section";
import { SiteHeader } from "@/components/site-header";
import { TransformationsSection } from "@/components/transformations-section";
import { TrustSection } from "@/components/trust-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <MarqueeBands />
        <OfferSection />
        <TrustSection />
        <TransformationsSection />
        <ContactSection />
      </main>
    </>
  );
}
