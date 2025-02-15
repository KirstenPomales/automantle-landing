import {
  Brain,
  Server,
  BookOpen,
  LayoutDashboard,
  Bot,
  Link,
  Database,
  Cpu,
  Code,
} from "lucide-react";

import { FeatureCard } from "@/components/feature-card";

export function Features() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="text-center font-bold uppercase text-primary">Features</span>
        <h2 className="text-balance text-center font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          How does Automantle work?
        </h2>
      </div>
      <p className="max-w-xl text-balance text-center text-lg text-muted-foreground">
        Reweb brings the best of two worlds together: the speed of development of no-code tools, and
        the flexibility of code.
      </p>
      <div className="mt-6 grid auto-rows-fr grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          title="A Brain Behind the Trades"
          description="Real-time market awareness + historic memory. Automantle continuously processes market data, from Dexscanner, TopWallets, and Cookie3 combining real-time insights with historical memory to identify high-potential opportunities in decentralized trading."
          icon={Brain}
        />
        <FeatureCard
          title="Autonomous Trading"
          description="No manual intervention needed. Automantle executes trades 100% autonomously on major Mantle and Solana DEXs like Merchant Mo and Jupiter, making decisions and EXECUTING TRADES in real time without requiring human commands."
          icon={Bot}
        />
        <FeatureCard
          title="Agent Memory"
          description="Learning from every trade. Automantle doesn't just execute trades—it learns from past performance, improving its decision-making and optimizing strategies over time."
          icon={BookOpen}
        />
      </div>
    </section>
  );
}
