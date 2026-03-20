import { Users, CheckCircle, Globe, DollarSign, Quote } from "lucide-react";
import { IMPACT_STATS } from "@/lib/constants";

// Map string names to Lucide components
const ICONS = { Users, CheckCircle, Globe, DollarSign } as const;

const TESTIMONIALS = [
  {
    quote:
      "Rotary Club changed our village. We now have clean water and our children go to school every day.",
    author: "Amara Diallo",
    location: "Senegal",
  },
  {
    quote:
      "The microfinance program helped me start my own tailoring business. Today I employ 5 women.",
    author: "Priya Sharma",
    location: "India",
  },
];

export default function ImpactSection() {
  return (
    <section
      id="impact"
      className="section-padding bg-ngo-black text-white overflow-hidden relative"
      aria-label="Our Impact"
    >
      {/* ── Decorative Elements ── */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand/5 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="container-custom mx-auto relative z-10">
        {/* ── Section Header ── */}
        <div className="text-center mb-14">
          <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-2">
            Our Impact
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Numbers That Tell Our Story
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Every statistic represents a life changed, a community strengthened,
            and a future made brighter.
          </p>
        </div>

        {/* ── Stats Grid ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {IMPACT_STATS.map((stat) => {
            const Icon = ICONS[stat.icon as keyof typeof ICONS];
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand/40 transition-all duration-300 group"
              >
                <div className="mb-4 p-3 rounded-full bg-brand/20 group-hover:bg-brand/30 transition-colors duration-300">
                  <Icon className="h-8 w-8 text-brand" />
                </div>
                <span className="text-4xl md:text-5xl font-bold text-white mb-1">
                  {stat.value}
                </span>
                <span className="text-white/60 text-sm leading-tight">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* ── Testimonials ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.author}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 relative"
            >
              <Quote className="h-8 w-8 text-brand/40 mb-4" />
              <p className="text-white/80 leading-relaxed italic mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center text-white font-bold text-sm">
                  {t.author[0]}
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
