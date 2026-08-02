import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { MarqueeBands } from "@/components/marquee-bands";
import { PlansSection } from "@/components/plans-section";
import { SiteHeader } from "@/components/site-header";
import { TrustSection } from "@/components/trust-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <MarqueeBands />
        <PlansSection />
        <TrustSection />
        <ContactSection />
      </main>
    </>
  );
}
