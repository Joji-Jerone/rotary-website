import Image from "next/image";
import LinkButton from "@/components/LinkButton";
import RotaryLogo from "@/components/RotaryLogo";
import { ArrowRight, HeartHandshake, Users, CheckCircle, Globe } from "lucide-react";

const STATS = [
  { value: "10K+", label: "Lives Impacted",    Icon: Users },
  { value: "50+",  label: "Projects Done",     Icon: CheckCircle },
  { value: "20+",  label: "Countries Reached", Icon: Globe },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-white overflow-hidden"
      aria-label="Hero"
    >
      {/* ── Subtle decorative shapes ── */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-50 rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-50 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container-custom mx-auto relative z-10 pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Text Content ── */}
          <div>
            {/* Rotary badge */}
            <div
              className="inline-flex items-center gap-2.5 bg-brand-50 border border-brand-100 text-brand text-sm font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
              style={{ animation: "var(--animate-fade-in)", animationDelay: "0ms" }}
            >
              <RotaryLogo size={20} />
              Service Above Self
            </div>

            {/* Heading */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5 text-ngo-black"
              style={{
                fontFamily: "var(--font-heading)",
                animation: "var(--animate-fade-in-up)",
                animationDelay: "150ms",
              }}
            >
              Together We Build
              <br />
              <span className="text-brand">A Better World</span>
            </h1>

            {/* Subtext */}
            <p
              className="text-lg text-gray-500 max-w-lg mb-8 leading-relaxed"
              style={{
                animation: "var(--animate-fade-in-up)",
                animationDelay: "300ms",
              }}
            >
              Join thousands of volunteers and donors helping us deliver
              education, healthcare, and clean water to communities that
              need it most.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              style={{
                animation: "var(--animate-fade-in-up)",
                animationDelay: "450ms",
              }}
            >
              <LinkButton
                href="#donate"
                size="lg"
                className="bg-brand hover:bg-brand-600 text-white font-semibold px-8 py-6 text-base shadow-lg shadow-brand/30 rounded-full inline-flex items-center gap-2"
              >
                Donate Now <ArrowRight className="h-5 w-5" />
              </LinkButton>
              <a
                href="#projects"
                className="inline-flex items-center justify-center border-2 border-brand text-brand hover:bg-brand hover:text-white font-semibold px-8 py-4 text-base rounded-full transition-all duration-200 no-underline"
              >
                Get Involved
              </a>
            </div>

            {/* Stats strip */}
            <div
              className="grid grid-cols-3 gap-4"
              style={{
                animation: "var(--animate-fade-in)",
                animationDelay: "600ms",
              }}
            >
              {STATS.map(({ value, label, Icon }) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center p-4 rounded-xl bg-ngo-gray border border-gray-100"
                >
                  <Icon className="h-5 w-5 text-brand mb-1.5" />
                  <p className="text-xl font-bold text-ngo-black">{value}</p>
                  <p className="text-xs text-gray-500 leading-tight mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Hero Image ── */}
          <div
            className="relative"
            style={{
              animation: "var(--animate-slide-in-left)",
              animationDelay: "200ms",
            }}
          >
            {/* Main image */}
            <div className="relative h-[520px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://picsum.photos/seed/rotary-community/800/900"
                alt="Rotary Club volunteers serving the community"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Floating "Service Above Self" card */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-5 py-4 shadow-xl border border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center">
                <HeartHandshake className="h-5 w-5 text-brand" />
              </div>
              <div>
                <p className="text-sm font-bold text-ngo-black">Rotary International</p>
                <p className="text-xs text-gray-400">Est. 1905 &bull; Service Above Self</p>
              </div>
            </div>

            {/* Floating years badge */}
            <div className="absolute -top-4 -right-4 bg-brand text-white rounded-2xl px-4 py-3 shadow-lg shadow-brand/30 text-center">
              <p className="text-3xl font-bold leading-none">20+</p>
              <p className="text-xs opacity-90 mt-1">Years of<br />Service</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-brand/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-brand/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
