import Image from "next/image";
import { Mail, Phone } from "lucide-react";

const TEAM = [
  {
    role: "Club President",
    name: "Arulmozhi P T",
    phone: "9003309696",
    email: "ezhilkarthi@gmail.com",
    image: "https://picsum.photos/seed/person-president/300/300",
  },
  {
    role: "Club Secretary",
    name: "Venkatachalamoorthy M",
    phone: "9965483529",
    email: "mvmoorthy1976@gmail.com",
    image: "https://picsum.photos/seed/person-secretary/300/300",
  },
  {
    role: "Club Vice President",
    name: "Balaji M",
    phone: "9842266559",
    email: "balaji.sirumugai@gmail.com",
    image: "https://picsum.photos/seed/person-vp/300/300",
  },
  {
    role: "Club Treasurer",
    name: "Pr Murugavel",
    phone: "9715336833",
    email: "murugavelpr@gmail.com",
    image: "https://picsum.photos/seed/person-treasurer/300/300",
  },
  {
    role: "Executive Secretary / Director",
    name: "Arunkarthi M",
    phone: "9842399990",
    email: "arunkarthi@gmail.com",
    image: "https://picsum.photos/seed/person-exec-sec/300/300",
  },
  {
    role: "Club Foundation Chair",
    name: "Sampath Kumar N",
    phone: "9842209262",
    email: "sbatexmotaro@gmail.com",
    image: "https://picsum.photos/seed/person-foundation/300/300",
  },
  {
    role: "Club Membership Chair",
    name: "Kodhandapani T",
    phone: "9442255211",
    email: "tk55211@gmail.com",
    image: "https://picsum.photos/seed/person-membership/300/300",
  },
  {
    role: "Club Service Projects Chair",
    name: "Senthil Kumar R",
    phone: "9842225416",
    email: "senthil.era@gmail.com",
    image: "https://picsum.photos/seed/person-service/300/300",
  },
  {
    role: "Club Learning Facilitator",
    name: "Venu Shankar V",
    phone: "9894662299",
    email: "pearlindustrials@gmail.com",
    image: "https://picsum.photos/seed/person-learning/300/300",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand font-semibold uppercase tracking-wider text-sm mb-3">
            Leadership
          </p>
          <h2 className="section-title mb-4">
            Club Executives &amp; Directors
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Meet the dedicated leaders steering our club through the 2025–2026
            Rotary year.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM.map((member) => (
            <div
              key={member.email}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow flex gap-4 items-start"
            >
              {/* Avatar */}
              <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-brand-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>

              {/* Info */}
              <div className="min-w-0">
                <p className="text-xs font-semibold text-brand uppercase tracking-wide mb-0.5">
                  {member.role}
                </p>
                <h3 className="font-heading font-bold text-ngo-black text-base leading-tight mb-3">
                  {member.name}
                </h3>
                <div className="space-y-1.5">
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center gap-1.5 text-xs text-ngo-gray hover:text-brand transition-colors"
                  >
                    <Phone className="size-3 shrink-0" />
                    <span>{member.phone}</span>
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-1.5 text-xs text-ngo-gray hover:text-brand transition-colors truncate"
                  >
                    <Mail className="size-3 shrink-0" />
                    <span className="truncate">{member.email}</span>
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
