import Image from "next/image";
import {
  ShieldCheck,
  Eye,
  Target,
  Heart,
  Lightbulb,
  Users,
  Handshake,
  BadgeCheck,
  BookOpen,
  Stethoscope,
  Sprout,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ExecutivePortraitCard from "@/components/ExecutivePortraitCard";
import CardWrapper from "@/components/CardWrapper";

const CORE_VALUES = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "We operate with transparency, honesty, and accountability in all that we do.",
  },
  {
    icon: Heart,
    title: "Empathy",
    desc: "We listen to the needs of the communities we serve and approach our work with compassion.",
  },
  {
    icon: Sprout,
    title: "Sustainability",
    desc: "We create solutions that offer long-term benefits and are environmentally and socially responsible.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    desc: "We believe in the power of partnerships and teamwork to maximise our impact.",
  },
];

const MISSION_POINTS = [
  {
    icon: BookOpen,
    text: "Provide educational scholarships and resources to students from disadvantaged backgrounds.",
  },
  {
    icon: Stethoscope,
    text: "Improve healthcare facilities and services in and around Sirumugai.",
  },
  {
    icon: Lightbulb,
    text: "Support sustainable livelihood initiatives to empower local communities.",
  },
];

const BOARD = [
  {
    name: "Ezhilvannan R.",
    title: "Chairman",
    bio: "Proprietor of Medvann Construction with 26 years of civil engineering experience, including six years as a Planning Engineer in the Gulf. Charter Chairman of Sirumugai Rotary Trust and President of Rotary Club of Sirumugai 2023–24.",
    image: "https://picsum.photos/seed/board-chairman/400/500",
    initial: "E",
  },
  {
    name: "Venu Shankar V.",
    title: "Secretary & Charter President, Rotary Sirumugai",
    bio: "Engineering plastics expert (CIPET), Promoter & Proprietor of Pearl Industrials, Coimbatore — 30+ years designing plastic & metal components for electrical and poultry industries in India and beyond.",
    image: "https://picsum.photos/seed/board-secretary/400/500",
    initial: "V",
  },
  {
    name: "Dhinesh Kumar M.",
    title: "Treasurer",
    bio: "Co-Founder of 5Lobes Technologies, an IT company with 50 % of its resources based in Sirumugai. Partnerships across inland logistics and management consultancy firms in India and the USA.",
    image: "https://picsum.photos/seed/board-treasurer/400/500",
    initial: "D",
  },
];

const INVOLVE = [
  {
    icon: Heart,
    label: "Donate",
    desc: "Your contributions directly fund our programmes and initiatives.",
    cta: "#donate",
  },
  {
    icon: Users,
    label: "Volunteer",
    desc: "Join our network of volunteers working to make a difference.",
    cta: "#contact",
  },
  {
    icon: Handshake,
    label: "Partner With Us",
    desc: "We collaborate with businesses, governments, and non-profits to maximise reach and impact.",
    cta: "#contact",
  },
];

export default function TrustSection() {
  return (
    <section
      id="trust"
      className="section-padding bg-white"
      aria-label="Sirumugai Rotary Trust"
    >
      <div className="container-custom space-y-12">

        {/* ── Section heading ── */}
        <SectionHeading
          eyebrow="About the Trust"
          title="Sirumugai Rotary Trust"
          subtitle="PAN: ABHTS4005K — Dedicated to creating meaningful, lasting change in our communities."
        />

        {/* ── Banner image ── */}
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <Image
            src="https://picsum.photos/seed/trust-community/1200/500"
            alt="Sirumugai Rotary Trust community activities"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/80 to-transparent" />
          <div className="absolute inset-0 flex items-center px-10">
            <div className="max-w-sm">
              <p className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-2">
                Founded 2022
              </p>
              <h3
                className="text-white text-2xl md:text-3xl font-bold leading-snug"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Every Rupee Counts,<br />Every Action Matters
              </h3>
            </div>
          </div>
        </div>

        {/* ── About paragraph ── */}
        <CardWrapper className="p-7">
          <h3 className="font-bold text-ngo-black text-lg mb-3 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
              <BadgeCheck className="h-4 w-4 text-brand" />
            </div>
            Welcome to Sirumugai Rotary Trust
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm">
            At Sirumugai Rotary Trust, we are dedicated to making a meaningful difference in
            the lives of individuals and communities. Founded in{" "}
            <strong className="text-ngo-black">2022</strong>, our mission is to provide
            scholarships and financial aid to deserving poor students, promote healthcare
            access in rural areas, provide financial assistance to deserving patients who need
            medical treatments, operations, equipment or artificial limbs, and provide food for
            the starving and needy. Guided by a commitment to integrity, compassion, and
            sustainable impact, we strive to address our time&rsquo;s most pressing social
            challenges.
          </p>
        </CardWrapper>

        {/* ── Vision + Mission ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Vision */}
          <CardWrapper className="p-6">
            <h3 className="font-bold text-ngo-black text-lg mb-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
                <Eye className="h-4 w-4 text-brand" />
              </div>
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              We envision a world where everyone has access to the resources and opportunities
              needed to thrive. Our long-term goal is to create a society where disparities are
              reduced, allowing everyone to live with dignity and hope, regardless of their
              background.
            </p>
          </CardWrapper>

          {/* Mission */}
          <CardWrapper className="p-6">
            <h3 className="font-bold text-ngo-black text-lg mb-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
                <Target className="h-4 w-4 text-brand" />
              </div>
              Our Mission
            </h3>
            <ul className="space-y-3">
              {MISSION_POINTS.map((pt) => (
                <li key={pt.text} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-brand-50 flex items-center justify-center shrink-0 mt-0.5">
                    <pt.icon className="h-3.5 w-3.5 text-brand" />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{pt.text}</p>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-400 mt-4 pt-3 border-t border-gray-100 leading-relaxed">
              We are committed to making a lasting impact through strategic partnerships,
              innovative projects, and a people-centric approach.
            </p>
          </CardWrapper>
        </div>

        {/* ── Core Values ── */}
        <div>
          <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-5 text-center">
            Core Values
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CORE_VALUES.map((val) => (
              <div
                key={val.title}
                className="group p-5 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out bg-white text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center mx-auto mb-3 group-hover:bg-brand transition-colors duration-300">
                  <val.icon className="h-5 w-5 text-brand group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="font-bold text-ngo-black text-sm mb-2">{val.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Board of Trustees ── */}
        <div>
          <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-5 text-center">
            Board of Trustees
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BOARD.map((member) => (
              <ExecutivePortraitCard
                key={member.name}
                name={member.name}
                label={member.title}
                image={member.image}
                initial={member.initial}
                bio={member.bio}
              />
            ))}
          </div>
        </div>

        {/* ── Statutory Obligations ── */}
        <CardWrapper className="p-6">
          <h3 className="font-bold text-ngo-black text-lg mb-4 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
              <ShieldCheck className="h-4 w-4 text-brand" />
            </div>
            Statutory Obligations &amp; Tax Compliance
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {[
              { label: "PAN", value: "ABHTS4005K" },
              { label: "80G Approval No.", value: "ABHTS4005K24CH02" },
              { label: "Approval Period", value: "2024–25 to 2028–29" },
              { label: "Section", value: "80G(5) of the IT Act, 1961" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-3 p-4 rounded-xl bg-brand-50 border border-brand-100"
              >
                <BadgeCheck className="h-5 w-5 text-brand mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 font-medium">{item.label}</p>
                  <p className="text-sm font-bold text-ngo-black">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">
            Sirumugai Rotary Trust has been approved by the Income Tax Department of India
            (approval no. <strong className="text-ngo-black">ABHTS4005K24CH02</strong>) to
            carry out its objectives from 2024–25 to 2028–29. Approval under clause
            (ii)(b) of the second proviso to section 80G(5) of the Income Tax Act, 1961,
            has been granted subject to certain conditions.
          </p>
        </CardWrapper>

        {/* ── Get Involved ── */}
        <div>
          <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-5 text-center">
            Get Involved
          </p>
          <p className="text-center text-gray-500 text-sm max-w-xl mx-auto mb-7">
            We believe everyone can contribute to making the world a better place. Whether
            you want to donate, volunteer, or partner with us — your support will help us
            expand our impact and bring hope to more lives.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {INVOLVE.map((item) => (
              <a
                key={item.label}
                href={item.cta}
                className="group p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out bg-white text-center block"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mx-auto mb-3 group-hover:bg-brand transition-colors duration-300">
                  <item.icon className="h-6 w-6 text-brand group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="font-bold text-ngo-black text-base mb-1">{item.label}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </a>
            ))}
          </div>
        </div>

        {/* ── Contact row ── */}
        <CardWrapper className="p-6">
          <h3 className="font-bold text-ngo-black text-lg mb-5 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
              <Mail className="h-4 w-4 text-brand" />
            </div>
            Contact the Trust
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-brand shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-gray-400 font-medium mb-0.5">Address</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  608/2, VOC Nagar, 4th Street, Sirumugai,<br />
                  Coimbatore DT, Tamil Nadu – 641302
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-brand shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-gray-400 font-medium mb-0.5">Email</p>
                <a
                  href="mailto:sirumugairotarytrust@gmail.com"
                  className="text-sm text-brand hover:underline break-all"
                >
                  sirumugairotarytrust@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-brand shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-gray-400 font-medium mb-0.5">Phone</p>
                <div className="space-y-0.5">
                  {["+91 98658 10325", "+91 95000 41394", "+91 98946 62299"].map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, "")}`}
                      className="block text-sm text-gray-700 hover:text-brand transition-colors"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardWrapper>

      </div>
    </section>
  );
}
