import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import LinkButton from "@/components/LinkButton";
import { ArrowRight, ExternalLink } from "lucide-react";
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
          eyebrow="What We Do"
          title="Our Active Projects"
          subtitle="From rural infrastructure to urban education, our projects span continents and disciplines — all united by one goal: lasting, community-driven impact."
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

                {/* Dark overlay on hover with centered CTA */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 bg-white text-brand font-semibold text-sm px-5 py-2.5 rounded-full shadow-lg hover:bg-brand hover:text-white transition-colors duration-200">
                    <ExternalLink className="h-4 w-4" />
                    Learn More
                  </span>
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
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <button className="text-brand hover:text-brand-600 font-semibold text-sm flex items-center gap-1 transition-colors duration-200">
                    Read full story <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                  <div className="w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center group-hover:bg-brand transition-colors duration-200">
                    <ArrowRight className="h-4 w-4 text-brand group-hover:text-white transition-colors duration-200" />
                  </div>
                </div>
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
