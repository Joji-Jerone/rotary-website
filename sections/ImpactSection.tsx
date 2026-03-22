"use client";

import { Users, CheckCircle, Globe, DollarSign, Quote } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import SectionHeading from "@/components/SectionHeading";

const STATS = [
  {
    Icon: Users,
    target: 10,
    suffix: "K+",
    label: "Lives Impacted",
    description: "Individuals reached across our programs",
  },
  {
    Icon: CheckCircle,
    target: 50,
    suffix: "+",
    label: "Projects Completed",
    description: "Successful initiatives delivered on time",
  },
  {
    Icon: Globe,
    target: 20,
    suffix: "+",
    label: "Countries Reached",
    description: "Global presence across 5 continents",
  },
  {
    Icon: DollarSign,
    prefix: "$",
    target: 2,
    suffix: "M+",
    label: "Funds Raised",
    description: "Transparent, donor-audited finances",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Rotary Club changed our village. We now have clean water and our children go to school every day.",
    author: "Amara Diallo",
    location: "Senegal",
    avatar: "A",
  },
  {
    quote:
      "The microfinance program helped me start my own tailoring business. Today I employ 5 women.",
    author: "Priya Sharma",
    location: "India",
    avatar: "P",
  },
];

export default function ImpactSection() {
  return (
    <section
      id="impact"
      className="section-padding bg-ngo-black text-white overflow-hidden relative"
      aria-label="Our Impact"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-brand/5 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand/5 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionHeading
          eyebrow="Our Impact"
          title="Numbers That Tell Our Story"
          subtitle="Every statistic represents a life changed, a community strengthened, and a future made brighter."
          light
        />

        {/* ── Stat Cards ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {STATS.map(({ Icon, target, suffix, prefix, label, description }) => (
            <div
              key={label}
              className="group flex flex-col items-center text-center p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-brand/50 hover:-translate-y-2 transition-all duration-300 ease-in-out"
            >
              <div className="mb-4 p-3 rounded-full bg-brand/20 group-hover:bg-brand/40 transition-colors duration-300">
                <Icon className="h-7 w-7 text-brand" />
              </div>
              <span className="text-4xl md:text-5xl font-bold text-white mb-1 tabular-nums">
                <AnimatedCounter
                  target={target}
                  suffix={suffix ?? ""}
                  prefix={prefix ?? ""}
                  duration={1800}
                />
              </span>
              <span className="text-brand-300 font-semibold text-sm mb-1">{label}</span>
              <span className="text-white/40 text-xs leading-snug hidden sm:block">
                {description}
              </span>
            </div>
          ))}
        </div>

        {/* ── Testimonials ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.author}
              className="group p-7 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              {/* Large decorative quote */}
              <Quote className="absolute top-4 right-4 h-10 w-10 text-brand/10" />

              <Quote className="h-7 w-7 text-brand/50 mb-4" />
              <p className="text-white/80 leading-relaxed italic mb-6 text-base">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand to-brand-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.author}</p>
                  <p className="text-white/50 text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
