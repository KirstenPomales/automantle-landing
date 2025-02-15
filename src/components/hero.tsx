import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="container flex flex-col items-center gap-10 pb-28 pt-20 sm:gap-14 lg:flex-row">
      <div className="flex flex-1 flex-col items-center gap-8 lg:items-start lg:gap-10">
        <div className="flex cursor-pointer items-center gap-1 rounded-full border bg-secondary px-3 py-0.5 hover:bg-secondary/60">
          <span className="text-sm text-secondary-foreground">Live on Mainnet</span>
          <ArrowRight size={16} />
        </div>
        <h1 className="max-w-2xl text-center font-heading text-4xl font-semibold tracking-tight sm:text-5xl lg:text-left">
          The 1st fully autonamous trading agent on Mantle
        </h1>
        <p className="max-w-md text-center text-lg text-muted-foreground lg:text-left">
          {" "}
          He accesses real-time data feeds, makes up his mind on what to ape into, and trades in and
          out of tokens, making REAL profits and losses on mainnet.
        </p>
        <div className="grid grid-cols-2 gap-3">
          <Button size="lg" variant="outline" asChild className="cursor-pointer border-border">
            <Link href="#">See Trades</Link>
          </Button>
          <Button size="lg" asChild className="cursor-pointer">
            <Link href="https://github.com/Automantle">View Github</Link>
          </Button>
        </div>
      </div>
      <div className="relative flex-1">
        <Image
          src="/images/auto-mantle-image.png"
          alt="trading agent"
          width={1000}
          height={698}
          priority
          className="rounded-xl "
        />
        <div className="absolute inset-0 -z-10 bg-primary/20 [filter:blur(180px)]" />
      </div>
    </section>
  );
}
