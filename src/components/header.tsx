import Link from "next/link";
import Image from "next/image";

import { NavItem } from "@/components/nav-item";
import { Button } from "@/components/ui/button";
import { MobileNavbar } from "@/components/mobile-navbar";
import { MobileNavItem } from "@/components/mobile-nav-item";

export function Header() {
  return (
    <header className="container flex items-center justify-between gap-10 py-4">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/images/automantle-logo.png"
          alt="Automan Logo"
          width={100}
          height={100}
          className="h-20 w-auto"
        />
      </Link>
      <div className="flex items-center gap-10">
        <nav className="hidden items-center justify-end gap-10 md:flex">
          <NavItem href="https://x.com/automantleai" label="x profile" />
          <NavItem href="#" label="trades" />
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button asChild>
            <Link href="https://github.com/Automantle" className="cursor-pointer">
              Github
            </Link>
          </Button>
        </div>
      </div>
      <MobileNavbar>
        <div className="container rounded-b-lg bg-background py-4 text-foreground shadow-xl">
          <nav className="flex flex-col gap-1 pt-2">
            <MobileNavItem href="/about" label="About" />
            <MobileNavItem href="/docs" label="Docs" />
            <MobileNavItem href="/blog" label="Blog" />
            <MobileNavItem href="/pricing" label="Pricing" />
            <Button size="lg" asChild className="mt-2 w-full">
              <Link href="#" className="cursor-pointer">
                Get Started
              </Link>
            </Button>
          </nav>
        </div>
      </MobileNavbar>
    </header>
  );
}
