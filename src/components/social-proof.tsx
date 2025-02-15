import { SocialProofLogo } from "@/components/social-proof-logo";

export function SocialProof() {
  return (
    <section className="container flex flex-col items-center gap-10 py-24">
      <h2 className="text-center text-lg font-semibold leading-8">Built with the best</h2>
      <div className="grid w-full grid-cols-4 gap-10 sm:grid-cols-4 sm:gap-12 lg:grid-cols-4">
        <SocialProofLogo image="/images/4.png" />
        <SocialProofLogo image="/images/5.png" />
        <SocialProofLogo image="/images/6.png" />
        <SocialProofLogo image="/images/moe.png" className="sm:col-start-2" />
      </div>
    </section>
  );
}
