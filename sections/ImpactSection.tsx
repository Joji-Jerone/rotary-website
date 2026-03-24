"use client";

import { Users, CheckCircle, Globe, Heart, Quote } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import SectionHeading from "@/components/SectionHeading";

const STATS = [
  {
    Icon: Users,
    target: 35,
    suffix: "",
    label: "Active Members",
    description: "Dedicated Rotarians serving Sirumugai",
  },
  {
    Icon: CheckCircle,
    target: 200,
    suffix: "+",
    label: "Activities Completed",
    description: "Community-driven initiatives since 2021",
  },
  {
    Icon: Globe,
    target: 4,
    suffix: "+",
    label: "Years of Service",
    description: "Chartered 27 September 2021",
  },
  {
    Icon: Heart,
    target: 50,
    suffix: "+",
    label: "Women Supported",
    description: "Pregnant women through Valar Pirai Kaappom",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "The Valar Pirai Kaappom program provided us with nutritious food during our pregnancy. We are deeply grateful to Rotary Sirumugai for their care and support.",
    author: "Community Member",
    location: "Sirumugai, Tamil Nadu",
    avatar: "C",
  },
  {
    quote:
      "The wheelchair provided by Rotary Sirumugai has given me independence I never thought possible. Their kindness has truly changed my life.",
    author: "Beneficiary",
    location: "Sirumugai, Coimbatore District",
    avatar: "B",
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
          title="4+ Years of Service in Numbers"
          subtitle="Every statistic represents a life changed, a community strengthened, and a future made brighter — right here in Sirumugai."
          light
        />

        {/* ── Stat Cards ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-4 xl:gap-5 mb-12 lg:mb-12 xl:mb-16">
          {STATS.map(({ Icon, target, suffix, label, description }) => (
            <div
              key={label}
              className="group flex flex-col items-center text-center p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-brand/50 hover:-translate-y-2 transition-all duration-300 ease-in-out"
            >
              <div className="mb-4 p-3 rounded-full bg-brand/20 group-hover:bg-brand/40 transition-colors duration-300">
                <Icon className="h-7 w-7 text-brand" />
              </div>
              <span className="text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-1 tabular-nums">
                <AnimatedCounter
                  target={target}
                  suffix={suffix ?? ""}
                  prefix=""
                  duration={1800}
                />
              </span>
              <span className="text-brand-300 font-semibold text-sm mb-1">
                {label}
              </span>
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
