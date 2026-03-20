import Image from "next/image";
import { CheckCircle2, Award } from "lucide-react";

const VALUES = [
  "Transparency in all financial operations",
  "Community-first, sustainable approach",
  "Accountability to every donor",
  "Long-term impact over short-term fixes",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding bg-white"
      aria-label="About Us"
    >
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Image Column ── */}
          <div className="relative">
            {/* Main image */}
            <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://picsum.photos/seed/about-ngo/800/600"
                alt="Our team working in the field"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gradient overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-ngo-black/40 to-transparent" />
            </div>

            {/* Floating stat badge */}
            <div className="absolute -bottom-6 -right-4 bg-brand text-white rounded-xl px-6 py-4 shadow-xl shadow-brand/30">
              <p className="text-4xl font-bold leading-none">20+</p>
              <p className="text-sm opacity-90 mt-1">Years of Service</p>
            </div>

            {/* Floating award badge */}
            <div className="absolute top-4 -left-4 bg-white rounded-xl px-4 py-3 shadow-xl flex items-center gap-2">
              <Award className="h-5 w-5 text-brand" />
              <span className="text-sm font-semibold text-ngo-black">GuideStar Platinum</span>
            </div>
          </div>

          {/* ── Text Column ── */}
          <div>
            <p className="section-subtitle">Who We Are</p>
            <h2 className="section-title">
              Driven by Purpose,
              <br />
              Guided by Values
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <div>
                <h3 className="font-semibold text-ngo-black text-lg mb-2 flex items-center gap-2">
                  <span className="w-1 h-5 bg-brand rounded-full inline-block" />
                  Our Mission
                </h3>
                <p>
                  To empower marginalized communities through sustainable programs in
                  education, healthcare, environmental conservation, and economic
                  development — fostering self-reliance and dignity for all people.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-ngo-black text-lg mb-2 flex items-center gap-2">
                  <span className="w-1 h-5 bg-brand rounded-full inline-block" />
                  Our Vision
                </h3>
                <p>
                  A world where every person has the resources, opportunity, and support
                  to live a full and flourishing life — regardless of circumstance,
                  geography, or background.
                </p>
              </div>

              <ul className="space-y-3 pt-2">
                {VALUES.map((v) => (
                  <li key={v} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
