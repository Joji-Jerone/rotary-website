import Image from "next/image";
import LinkButton from "@/components/LinkButton";
import { ArrowRight, HeartHandshake } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* ── Background Image ── */}
      <Image
        src="https://picsum.photos/seed/ngo-hero/1920/1080"
        alt="Volunteers working together in a community"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* ── Gradient Overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900/80 via-ngo-black/70 to-ngo-black/60" />

      {/* ── Decorative Circles ── */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-brand/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-brand/15 rounded-full blur-2xl pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 container-custom mx-auto text-center text-white px-4">

        {/* Tag line */}
        <div
          className="inline-flex items-center gap-2 bg-brand/20 border border-brand/30 text-brand-200 text-sm font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
          style={{ animation: "var(--animate-fade-in)", animationDelay: "0ms" }}
        >
          <HeartHandshake className="h-4 w-4" />
          Making a Difference Since 2005
        </div>

        {/* Heading */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white"
          style={{
            fontFamily: "var(--font-heading)",
            animation: "var(--animate-fade-in-up)",
            animationDelay: "150ms",
          }}
        >
          Together We Build
          <br />
          <span className="text-brand-300">A Better World</span>
        </h1>

        {/* Sub-text */}
        <p
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{
            animation: "var(--animate-fade-in-up)",
            animationDelay: "300ms",
          }}
        >
          Join thousands of volunteers and donors helping us deliver education,
          healthcare, and clean water to communities that need it most.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{
            animation: "var(--animate-fade-in-up)",
            animationDelay: "450ms",
          }}
        >
          <LinkButton
            href="#donate"
            size="lg"
            className="bg-brand hover:bg-brand-600 text-white font-semibold px-8 py-6 text-base shadow-xl shadow-brand/30 rounded-full inline-flex items-center gap-2"
          >
            Donate Now <ArrowRight className="h-5 w-5" />
          </LinkButton>
          <a
            href="#projects"
            className="inline-flex items-center justify-center border-2 border-white/70 text-white bg-transparent hover:bg-white hover:text-ngo-black font-semibold px-8 py-4 text-base rounded-full transition-all duration-200 backdrop-blur-sm no-underline"
          >
            Get Involved
          </a>
        </div>

        {/* Stats strip */}
        <div
          className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto"
          style={{
            animation: "var(--animate-fade-in)",
            animationDelay: "600ms",
          }}
        >
          {[
            { value: "10K+", label: "Lives" },
            { value: "50+",  label: "Projects" },
            { value: "20+",  label: "Countries" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-bold text-brand-300">{s.value}</p>
              <p className="text-xs text-white/60 uppercase tracking-wide mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
}
