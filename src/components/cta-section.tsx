import Link from "next/link";

import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-10">
      <h2 className="max-w-xl text-balance text-center font-heading text-3xl font-semibold tracking-tight sm:text-4xl sm:leading-tight">
        Automantle trades in public!
      </h2>
      <p className="max-w-lg text-balance text-center text-lg text-muted-foreground">
        He tweets when he is making trades. Check out his X account.
      </p>
      <Button size="lg" asChild variant="default" className="cursor-pointer border-border">
        <Link href="https://x.com/automantleai">Follow Automantle</Link>
      </Button>
    </section>
  );
}
