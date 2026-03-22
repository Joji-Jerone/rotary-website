import Image from "next/image";
import { CheckCircle2, Award, Target, Eye } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const VALUES = [
  "Promote peace",
  "Fight disease",
  "Provide clean water, sanitation, and hygiene",
  "Improve maternal and child health",
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
              <p className="text-4xl font-bold leading-none">5+</p>
              <p className="text-sm opacity-90 mt-1">Years of Service</p>
            </div>

            {/* Floating award badge */}
            <div className="absolute top-4 -left-4 bg-white rounded-2xl px-4 py-3 shadow-xl border border-gray-200 flex items-center gap-2">
              <Award className="h-5 w-5 text-brand" />
              <span className="text-sm font-semibold text-ngo-black">
                Rotary District 3201
              </span>
            </div>
          </div>

          {/* ── Text Column ── */}
          <div>
            <SectionHeading
              eyebrow="About Rotary"
              title={"A Global Network,\nDriven by Purpose"}
              centered={false}
            />

            {/* About Rotary description */}
            <div className="space-y-3 mb-5">
              <p className="text-gray-600 leading-relaxed text-sm">
                Rotary is a global network of more than{" "}
                <strong className="text-ngo-black">1.2 million</strong>{" "}
                neighbours, friends, leaders, and problem-solvers who see a
                world where people unite and take action to create lasting
                change — across the globe, in our communities, and in
                ourselves.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                For more than{" "}
                <strong className="text-ngo-black">110 years</strong>, Rotary's
                people of action have used their passion, energy, and
                intelligence to advance sustainable projects — from literacy
                and peace to water and health.
              </p>
            </div>

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
                  We provide service to others, promote integrity, and advance
                  world understanding, goodwill, and peace through our
                  fellowship of business, professional, and community leaders.
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
                  Together, we see a world where people unite and take action to
                  create lasting change — across the globe, in our communities,
                  and in ourselves.
                </p>
              </div>

              {/* About Sirumugai Rotary card */}
              <div className="group p-5 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white">
                <h3 className="font-semibold text-ngo-black text-base mb-2 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center">
                    <Award className="h-4 w-4 text-brand" />
                  </div>
                  About Sirumugai Rotary
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Sirumugai Rotary Club was chartered on{" "}
                  <strong className="text-ngo-black">27.09.2021</strong> as a
                  team of 25 members, and our current member count is{" "}
                  <strong className="text-ngo-black">35</strong>. Over the past
                  5 years, we have followed Rotary&apos;s principles and engaged
                  in more than{" "}
                  <strong className="text-ngo-black">200 activities</strong> to
                  promote peace, fight disease, improve sanitation, support
                  education, empower local economies, and protect the
                  environment.
                </p>
              </div>

              {/* What We Do list */}
              <p className="text-xs font-semibold text-brand uppercase tracking-widest pt-1">
                What We Do
              </p>
              <ul className="space-y-3 pt-1">
                {VALUES.map((v) => (
                  <li key={v} className="flex items-start gap-3 group">
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
