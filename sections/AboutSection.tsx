import Image from "next/image";
import { CheckCircle2, Award, Target, Eye } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

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
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Image Column ── */}
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src="https://picsum.photos/seed/about-ngo/800/600"
                alt="Our team working in the field"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ngo-black/50 to-transparent" />
            </div>

            {/* Floating years badge */}
            <div className="absolute -bottom-6 -right-4 bg-brand text-white rounded-2xl px-6 py-4 shadow-xl shadow-brand/30">
              <p className="text-4xl font-bold leading-none">20+</p>
              <p className="text-sm opacity-90 mt-1">Years of Service</p>
            </div>

            {/* Floating award badge */}
            <div className="absolute top-4 -left-4 bg-white rounded-2xl px-4 py-3 shadow-xl border border-gray-200 flex items-center gap-2">
              <Award className="h-5 w-5 text-brand" />
              <span className="text-sm font-semibold text-ngo-black">GuideStar Platinum</span>
            </div>
          </div>

          {/* ── Text Column ── */}
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title={"Driven by Purpose,\nGuided by Values"}
              centered={false}
            />

            <div className="space-y-5">
              {/* Mission card */}
              <div className="group p-5 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white">
                <h3 className="font-semibold text-ngo-black text-base mb-2 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center">
                    <Target className="h-4 w-4 text-brand" />
                  </div>
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  To empower marginalized communities through sustainable programs in
                  education, healthcare, environmental conservation, and economic
                  development — fostering self-reliance and dignity for all people.
                </p>
              </div>

              {/* Vision card */}
              <div className="group p-5 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white">
                <h3 className="font-semibold text-ngo-black text-base mb-2 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center">
                    <Eye className="h-4 w-4 text-brand" />
                  </div>
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  A world where every person has the resources, opportunity, and support
                  to live a full and flourishing life — regardless of circumstance,
                  geography, or background.
                </p>
              </div>

              {/* Values list */}
              <ul className="space-y-3 pt-1">
                {VALUES.map((v) => (
                  <li
                    key={v}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-5 h-5 rounded-full bg-brand-50 flex items-center justify-center mt-0.5 shrink-0 group-hover:bg-brand transition-colors duration-200">
                      <CheckCircle2 className="h-3.5 w-3.5 text-brand group-hover:text-white transition-colors duration-200" />
                    </div>
                    <span className="text-gray-700 text-sm">{v}</span>
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
