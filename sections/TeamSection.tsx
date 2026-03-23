import SectionHeading from "@/components/SectionHeading";
import ExecutivePortraitCard from "@/components/ExecutivePortraitCard";

const TEAM = [
  {
    role: "Club President",
    name: "Arulmozhi P T",
    phone: "9003309696",
    email: "ezhilkarthi@gmail.com",
    image: "/images/executives/Arulmozhi.JPG",
  },
  {
    role: "Club Secretary",
    name: "Venkatachalamoorthy M",
    phone: "9965483529",
    email: "mvmoorthy1976@gmail.com",
    image: "/images/executives/Venkatachalamoorthy.JPG",
  },
  {
    role: "Club Vice President",
    name: "Balaji M",
    phone: "9842266559",
    email: "balaji.sirumugai@gmail.com",
    image: "/images/executives/Balaji.JPG",
  },
  {
    role: "Club Treasurer",
    name: "Pr Murugavel",
    phone: "9715336833",
    email: "murugavelpr@gmail.com",
    image: "/images/executives/Murugavel.jpeg",
  },
  {
    role: "Executive Secretary / Director",
    name: "Arunkarthi M",
    phone: "9842399990",
    email: "arunkarthi@gmail.com",
    image: "/images/executives/Arunkarthi.jpg",
  },
  {
    role: "Club Foundation Chair",
    name: "Sampath Kumar N",
    phone: "9842209262",
    email: "sbatexmotaro@gmail.com",
    image: "/images/executives/Sampath Kumar.jpg",
  },
  {
    role: "Club Membership Chair",
    name: "Kodhandapani T",
    phone: "9442255211",
    email: "tk55211@gmail.com",
    image: "/images/executives/Kodhandapani.jpg",
  },
  {
    role: "Club Service Projects Chair",
    name: "Senthil Kumar R",
    phone: "9842225416",
    email: "senthil.era@gmail.com",
    image: "/images/executives/Senthilkumar.JPG",
  },
  {
    role: "Club Learning Facilitator",
    name: "Venu Shankar V",
    phone: "9894662299",
    email: "pearlindustrials@gmail.com",
    image: "/images/executives/Venu Shankar.jpg",
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
            <ExecutivePortraitCard
              key={member.email}
              name={member.name}
              label={member.role}
              image={member.image}
              initial={member.name.charAt(0)}
              phone={member.phone}
              email={member.email}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
