"use client";

import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Heart, ShieldCheck, ArrowRight } from "lucide-react";
import { DONATION_AMOUNTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function DonateSection() {
  const [selected, setSelected] = useState<string>("$25");

  return (
    <section
      id="donate"
      className="section-padding bg-brand text-white relative overflow-hidden"
      aria-label="Donate"
    >
      {/* ── Decorative background ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand to-brand-700" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="container-custom mx-auto text-center relative z-10">

        {/* Icon */}
        <div className="w-20 h-20 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-6">
          <Heart className="h-10 w-10 text-white" fill="white" />
        </div>

        {/* Heading */}
        <p className="text-brand-100 text-sm font-semibold uppercase tracking-widest mb-2">
          Support Our Work
        </p>
        <h2
          className="text-3xl md:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Your Gift Changes Lives
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
          Every dollar you donate goes directly toward programs that feed families,
          educate children, and rebuild communities. Join{" "}
          <strong className="text-white">15,000+</strong> donors making a difference today.
        </p>

        {/* ── Donation Amount Selector ── */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {DONATION_AMOUNTS.map((amt) => (
            <button
              key={amt}
              onClick={() => setSelected(amt)}
              className={`px-7 py-2.5 rounded-full border-2 font-semibold text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                selected === amt
                  ? "bg-white text-brand border-white shadow-lg scale-105"
                  : "border-white/50 text-white hover:bg-white hover:text-brand hover:border-white"
              }`}
              aria-pressed={selected === amt}
              aria-label={`Donate ${amt}`}
            >
              {amt}
            </button>
          ))}
        </div>

        {/* ── CTA Button ── */}
        <a
          href="#contact"
          className={cn(
            buttonVariants({ size: "lg" }),
            "bg-white text-brand hover:bg-white/90 font-bold px-10 py-6 text-lg shadow-2xl rounded-full transition-all duration-200 hover:scale-105 no-underline inline-flex items-center gap-2"
          )}
          aria-label={`Donate ${selected} now`}
        >
          Donate {selected} Now <ArrowRight className="h-5 w-5" />
        </a>

        {/* Trust line */}
        <div className="flex items-center justify-center gap-2 mt-5 text-white/60 text-sm">
          <ShieldCheck className="h-4 w-4 text-white/50" />
          <span>Secure payment &bull; 100% tax-deductible &bull; Cancel anytime</span>
        </div>
      </div>
    </section>
  );
}
