import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export function Revolution() {
  return (
    <section className="container flex flex-col items-center gap-10 pb-28 pt-20 sm:gap-14 lg:flex-row">
      <div className="flex flex-1 flex-col items-center gap-8 lg:items-start lg:gap-10">
        <div className="flex cursor-pointer items-center gap-1 rounded-full border bg-secondary px-3 py-0.5 hover:bg-secondary/60">
          <span className="text-sm text-secondary-foreground">Live on Mainnet</span>
          <ArrowRight size={16} />
        </div>
        <h2 className="max-w-2xl text-center font-heading text-4xl font-semibold tracking-tight sm:text-5xl lg:text-left">
          Bringing the AUTONAMY back to autonamous agents!
        </h2>
        <p className="max-w-md text-center text-lg text-muted-foreground lg:text-left">
          {" "}
          <a className="font-bold text-primary">
            Every other TRADING AGENT project that we have seen is not AUTONOMOUS! They require
            humans
          </a>
        </p>
        <p className="max-w-md text-center text-lg text-muted-foreground lg:text-left">
          That is not nearly as cool as the agent trading on its own, so we said f*$k it.
        </p>
        <p className="max-w-md text-center text-lg text-muted-foreground lg:text-left">
          Let&apos;s give him a wallet, give him some money on Mantle and lets see what he does with
          it!
        </p>
        <div className="grid grid-cols-2 gap-3">
          <Button size="lg" variant="outline" asChild className="cursor-pointer border-border">
            <Link href="#">See Live Trades</Link>
          </Button>
        </div>
      </div>
      <div className="relative flex-1">
        <Image
          src="/images/money.png"
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
