import Image from "next/image";
import { CheckCircle2, Award, Target, Eye } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const VALUES = [
  "Promote peace",
  "Fight disease",
  "Clean water & sanitation",
  "Maternal & child health",
  "Support education",
  "Grow local economies",
  "Protect the environment",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding bg-white"
      aria-label="About Us"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* ── Left Column: Image + What We Do ── */}
          <div className="flex flex-col gap-8">
            {/* Image */}
            <div className="relative">
              <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <Image
                  src="/images/AboutRotary.jpeg"
                  alt="Our team working in the field"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ngo-black/50 to-transparent" />
              </div>

              {/* Floating years badge */}
              <div className="absolute -bottom-5 -right-4 bg-brand text-white rounded-2xl px-6 py-4 shadow-xl shadow-brand/30">
                <p className="text-4xl font-bold leading-none">4+</p>
                <p className="text-sm opacity-90 mt-1">Years of Service</p>
              </div>

              {/* Floating award badge */}
              <div className="absolute top-4 -left-4 bg-white rounded-2xl px-4 py-3 shadow-xl border border-gray-200 flex items-center gap-2">
                <Award className="h-5 w-5 text-brand" />
                <span className="text-sm font-semibold text-ngo-black">
                  Rotary Dist 3203
                </span>
              </div>
            </div>

            {/* What We Do — below image */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-4">
                What We Do
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {VALUES.map((v) => (
                  <div
                    key={v}
                    className="flex items-center gap-2.5 bg-brand-50 border border-brand-100 rounded-xl px-3.5 py-2.5 group hover:bg-brand transition-colors duration-200"
                  >
                    <CheckCircle2 className="h-4 w-4 text-brand group-hover:text-white shrink-0 transition-colors duration-200" />
                    <span className="text-gray-700 text-xs font-medium group-hover:text-white transition-colors duration-200 leading-snug">
                      {v}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right Column: Text + Cards ── */}
          <div className="flex flex-col gap-3">
            <SectionHeading
              eyebrow="About Rotary"
              title={"A Global Network,\nDriven by Purpose"}
              centered={false}
              className="mb-0"
            />

            <div className="space-y-3 -mt-3">
              <p className="text-gray-600 leading-relaxed text-sm">
                Rotary is a global network of more than{" "}
                <strong className="text-ngo-black">1.2 million</strong>{" "}
                neighbours, friends, leaders, and problem-solvers who see a
                world where people unite and take action to create lasting
                change — across the globe, in our communities, and in ourselves.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                For more than{" "}
                <strong className="text-ngo-black">110 years</strong>,
                Rotary&apos;s people of action have used their passion, energy,
                and intelligence to advance sustainable projects — from literacy
                and peace to water and health.
              </p>
            </div>

            {/* Mission + Vision side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="group p-5 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white">
                <h3 className="font-semibold text-ngo-black text-base mb-2 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
                    <Target className="h-4 w-4 text-brand" />
                  </div>
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  We provide service to others, promote integrity, and advance
                  world understanding, goodwill, and peace through our
                  fellowship of business, professional, and community leaders.
                </p>
              </div>

              <div className="group p-5 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white">
                <h3 className="font-semibold text-ngo-black text-base mb-2 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
                    <Eye className="h-4 w-4 text-brand" />
                  </div>
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Together, we see a world where people unite and take action to
                  create lasting change — across the globe, in our communities,
                  and in ourselves.
                </p>
              </div>
            </div>

            {/* About Sirumugai Rotary — full width */}
            <div className="group p-5 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white">
              <h3 className="font-semibold text-ngo-black text-base mb-2 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
                  <Award className="h-4 w-4 text-brand" />
                </div>
                About Sirumugai Rotary
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Sirumugai Rotary Club was chartered on{" "}
                <strong className="text-ngo-black">27.09.2021</strong> as a team
                of 25 members, and our current member count is{" "}
                <strong className="text-ngo-black">35</strong>. Over the past 5
                years, we have followed Rotary&apos;s principles and engaged in
                more than{" "}
                <strong className="text-ngo-black">200 activities</strong> to
                promote peace, fight disease, improve sanitation, support
                education, empower local economies, and protect the environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
