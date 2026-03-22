import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const TEAM = [
  {
    role: "Club President",
    name: "Arulmozhi P T",
    phone: "9003309696",
    email: "ezhilkarthi@gmail.com",
    image: "https://picsum.photos/seed/person-president/400/500",
  },
  {
    role: "Club Secretary",
    name: "Venkatachalamoorthy M",
    phone: "9965483529",
    email: "mvmoorthy1976@gmail.com",
    image: "https://picsum.photos/seed/person-secretary/400/500",
  },
  {
    role: "Club Vice President",
    name: "Balaji M",
    phone: "9842266559",
    email: "balaji.sirumugai@gmail.com",
    image: "https://picsum.photos/seed/person-vp/400/500",
  },
  {
    role: "Club Treasurer",
    name: "Pr Murugavel",
    phone: "9715336833",
    email: "murugavelpr@gmail.com",
    image: "https://picsum.photos/seed/person-treasurer/400/500",
  },
  {
    role: "Executive Secretary / Director",
    name: "Arunkarthi M",
    phone: "9842399990",
    email: "arunkarthi@gmail.com",
    image: "https://picsum.photos/seed/person-exec-sec/400/500",
  },
  {
    role: "Club Foundation Chair",
    name: "Sampath Kumar N",
    phone: "9842209262",
    email: "sbatexmotaro@gmail.com",
    image: "https://picsum.photos/seed/person-foundation/400/500",
  },
  {
    role: "Club Membership Chair",
    name: "Kodhandapani T",
    phone: "9442255211",
    email: "tk55211@gmail.com",
    image: "https://picsum.photos/seed/person-membership/400/500",
  },
  {
    role: "Club Service Projects Chair",
    name: "Senthil Kumar R",
    phone: "9842225416",
    email: "senthil.era@gmail.com",
    image: "https://picsum.photos/seed/person-service/400/500",
  },
  {
    role: "Club Learning Facilitator",
    name: "Venu Shankar V",
    phone: "9894662299",
    email: "pearlindustrials@gmail.com",
    image: "https://picsum.photos/seed/person-learning/400/500",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="section-padding bg-gray-50" aria-label="Team">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Leadership"
          title="Club Executives & Directors"
          subtitle="Meet the dedicated leaders steering our club through the 2025–2026 Rotary year."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {TEAM.map((member) => (
            <div
              key={member.email}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out bg-white"
            >
              {/* ── Portrait image ── */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Always-visible gradient strip at bottom of image */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-4">
                  <p className="text-xs font-semibold text-brand-300 uppercase tracking-wide mb-0.5 group-hover:opacity-0 transition-opacity duration-200">
                    {member.role}
                  </p>
                  <h3 className="text-white font-bold text-base leading-tight group-hover:opacity-0 transition-opacity duration-200">
                    {member.name}
                  </h3>
                </div>

                {/* ── Hover overlay ── */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center px-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-brand/20 border-2 border-brand/40 flex items-center justify-center mb-3">
                    <span className="text-white font-bold text-xl">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-tight mb-1">
                    {member.name}
                  </h3>
                  <p className="text-brand-300 text-xs font-semibold uppercase tracking-wider mb-5">
                    {member.role}
                  </p>
                  <div className="space-y-2.5 w-full">
                    <a
                      href={`tel:${member.phone}`}
                      className="flex items-center justify-center gap-2 text-sm text-white/80 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-lg py-2 px-3"
                    >
                      <Phone className="h-3.5 w-3.5 shrink-0 text-brand-300" />
                      <span>{member.phone}</span>
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center justify-center gap-2 text-sm text-white/80 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-lg py-2 px-3 truncate"
                    >
                      <Mail className="h-3.5 w-3.5 shrink-0 text-brand-300" />
                      <span className="truncate">{member.email}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* ── Below-image info bar ── */}
              <div className="px-5 py-4 border-t border-gray-100 flex items-center justify-between">
                <div className="min-w-0">
                  <p className="text-xs text-brand font-semibold uppercase tracking-wide truncate">
                    {member.role}
                  </p>
                  <p className="text-sm font-bold text-ngo-black truncate mt-0.5">
                    {member.name}
                  </p>
                </div>
                <div className="flex gap-2 ml-3 shrink-0">
                  <a
                    href={`tel:${member.phone}`}
                    className="w-8 h-8 rounded-full bg-brand-50 hover:bg-brand flex items-center justify-center transition-colors duration-200 group/icon"
                    aria-label={`Call ${member.name}`}
                  >
                    <Phone className="h-3.5 w-3.5 text-brand group-hover/icon:text-white transition-colors" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-8 h-8 rounded-full bg-brand-50 hover:bg-brand flex items-center justify-center transition-colors duration-200 group/icon"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-3.5 w-3.5 text-brand group-hover/icon:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
