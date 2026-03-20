import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import LinkButton from "@/components/LinkButton";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/lib/constants";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="section-padding bg-ngo-gray"
      aria-label="Our Projects"
    >
      <div className="container-custom mx-auto">

        {/* ── Section Header ── */}
        <div className="text-center mb-12">
          <p className="section-subtitle">What We Do</p>
          <h2 className="section-title">Our Active Projects</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            From rural infrastructure to urban education, our projects span continents
            and disciplines — all united by one goal: lasting, community-driven impact.
          </p>
        </div>

        {/* ── Project Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white rounded-xl"
            >
              {/* Card Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Tag badge */}
                <div className="absolute top-3 left-3">
                  <Badge className="bg-brand text-white text-xs shadow-sm">
                    {project.tag}
                  </Badge>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-ngo-black group-hover:text-brand transition-colors duration-200">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <CardDescription className="text-gray-500 leading-relaxed text-sm">
                  {project.description}
                </CardDescription>
              </CardContent>

              <CardFooter className="pt-0">
                <Button
                  variant="ghost"
                  className="text-brand hover:text-brand-600 hover:bg-brand-50 p-0 h-auto text-sm font-semibold"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* ── CTA Below Grid ── */}
        <div className="text-center mt-12">
          <LinkButton
            href="#contact"
            variant="outline"
            className="border-brand text-brand hover:bg-brand hover:text-white transition-all duration-200 px-8"
          >
            Partner With Us
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
