"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import RotaryLogo from "@/components/RotaryLogo";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-3"
          : "bg-white/80 backdrop-blur-sm border-b border-gray-100 py-4"
      )}
    >
      <div className="container-custom flex items-center justify-between">

        {/* ── Logo ── */}
        <Link
          href="/"
          className="group"
          aria-label="Rotary Club of Sirumugai Home"
        >
          <div className="group-hover:opacity-80 transition-opacity duration-200">
            <RotaryLogo size={56} variant="full" />
          </div>
        </Link>

        {/* ── Desktop Navigation ── */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-brand transition-colors duration-200 relative group py-1"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-brand rounded-full group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="#donate"
            className={cn(
              buttonVariants({ variant: "default" }),
              "bg-brand hover:bg-brand-600 text-white font-semibold px-5 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 no-underline rounded-xl"
            )}
          >
            Donate Now
          </a>
        </div>

        {/* ── Mobile Hamburger ── */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger
            className="lg:hidden inline-flex items-center justify-center rounded-xl p-2 text-ngo-black hover:bg-gray-100 hover:text-brand transition-all duration-200"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72 p-0">
            <SheetHeader className="px-6 py-5 border-b border-gray-100">
              <SheetTitle>
                <RotaryLogo size={52} variant="full" />
              </SheetTitle>
            </SheetHeader>

            <div className="flex flex-col py-4">
              {NAV_LINKS.map((link) => (
                <SheetClose
                  key={link.href}
                  render={
                    <a
                      href={link.href}
                      className="px-6 py-3.5 text-base font-medium text-gray-700 hover:bg-brand-50 hover:text-brand transition-colors duration-200 border-l-4 border-transparent hover:border-brand block"
                    />
                  }
                >
                  {link.label}
                </SheetClose>
              ))}

              <div className="mt-4 px-6">
                <SheetClose
                  render={
                    <a
                      href="#donate"
                      className={cn(
                        buttonVariants({ variant: "default" }),
                        "w-full bg-brand hover:bg-brand-600 text-white font-semibold justify-center no-underline block text-center shadow-md rounded-xl"
                      )}
                    />
                  }
                >
                  Donate Now
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
