import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { SocialProof } from "@/components/social-proof";
import { Features } from "@/components/features-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { Revolution } from "@/components/revolution";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <SocialProof />
      <Features />
      <Revolution />
      <CtaSection />
      <Footer />
    </>
  );
}
