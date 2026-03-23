import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import LinkButton from "@/components/LinkButton";
import { PROJECTS } from "@/lib/constants";
import SectionHeading from "@/components/SectionHeading";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section-padding bg-gray-50"
      aria-label="Our Projects"
    >
      <div className="container-custom">
        <SectionHeading
          eyebrow="Our Work"
          title="Making a Difference in Sirumugai"
          subtitle="See how our Rotary club has made a difference in the lives of the people around Sirumugai."
        />

        {/* ── Project Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out bg-white"
            >
              {/* ── Card Image with overlay ── */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Tag badge */}
                <div className="absolute top-3 left-3 z-10">
                  <Badge className="bg-brand text-white text-xs shadow-sm">
                    {project.tag}
                  </Badge>
                </div>


              </div>

              {/* ── Card Body ── */}
              <div className="p-5">
                <h3 className="font-bold text-ngo-black text-lg mb-2 group-hover:text-brand transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA Below Grid ── */}
        <div className="text-center mt-12">
          <LinkButton
            href="#contact"
            variant="outline"
            className="border-2 border-brand text-brand hover:bg-brand hover:text-white font-semibold px-8 py-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            Partner With Us
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
