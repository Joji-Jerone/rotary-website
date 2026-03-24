"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import LinkButton from "@/components/LinkButton";
import { PROJECTS } from "@/lib/constants";
import SectionHeading from "@/components/SectionHeading";

/* ────────────────────────────────────────────────────────────────────────────
   ProjectsSection — click-to-expand card popup

   1. User clicks a card → measure its position with getBoundingClientRect
   2. A fixed-position clone appears at that exact spot, then CSS-transitions
      to a larger centered popup
   3. Backdrop fades in behind it
   4. Click backdrop or × button to close — clone shrinks back to origin
   5. Escape key also closes
   ──────────────────────────────────────────────────────────────────────────── */

interface CardRect {
  top: number;
  left: number;
  width: number;
  height: number;
}

export default function ProjectsSection() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [originRect, setOriginRect] = useState<CardRect | null>(null);

  const cardRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  /* — open — */
  const openCard = useCallback((id: number) => {
    // If already open, ignore
    if (activeId !== null) return;

    const el = cardRefs.current.get(id);
    if (!el) return;

    const r = el.getBoundingClientRect();
    setOriginRect({ top: r.top, left: r.left, width: r.width, height: r.height });
    setActiveId(id);

    // Next two frames: first renders the clone at origin, second triggers expansion
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsExpanded(true);
      });
    });
  }, [activeId]);

  /* — close — */
  const closeCard = useCallback(() => {
    setIsExpanded(false);
    // Let the shrink animation play, then unmount
    setTimeout(() => {
      setActiveId(null);
      setOriginRect(null);
    }, 350);
  }, []);

  /* — Escape key — */
  useEffect(() => {
    if (activeId === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCard();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [activeId, closeCard]);

  /* — Lock body scroll when popup is open — */
  useEffect(() => {
    if (activeId !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [activeId]);

  /* — Expanded rect: centered on viewport — */
  const getExpandedStyle = (): React.CSSProperties => {
    if (typeof window === "undefined") return {};
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const w = Math.min(520, vw - 48);
    const h = w + 200; // image + text estimate
    return {
      top: Math.max(24, (vh - h) / 2),
      left: Math.max(24, (vw - w) / 2),
      width: w,
    };
  };

  const activeProject = PROJECTS.find((p) => p.id === activeId) ?? null;

  return (
    <>
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

          {/* ── Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                ref={(el) => {
                  if (el) cardRefs.current.set(project.id, el);
                }}
                onClick={() => openCard(project.id)}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md cursor-pointer
                           hover:shadow-xl hover:-translate-y-1 hover:border-brand/30
                           transition-all duration-300 ease-out"
              >
                {/* 1:1 image */}
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <Badge className="bg-brand text-white text-xs shadow-sm">
                      {project.tag}
                    </Badge>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  <h3 className="font-bold text-ngo-black text-base mb-2 group-hover:text-brand transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ── CTA ── */}
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

      {/* ── Backdrop ── */}
      {activeId !== null && (
        <div
          className="fixed inset-0 z-40"
          style={{
            backgroundColor: isExpanded ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0)",
            backdropFilter: isExpanded ? "blur(6px)" : "blur(0px)",
            transition: "background-color 0.35s ease, backdrop-filter 0.35s ease",
          }}
          onClick={closeCard}
        />
      )}

      {/* ── Expanded popup card ── */}
      {activeProject && originRect && (() => {
        const expanded = getExpandedStyle();
        return (
          <div
            className="fixed z-50 overflow-hidden"
            style={{
              top: isExpanded ? expanded.top : originRect.top,
              left: isExpanded ? expanded.left : originRect.left,
              width: isExpanded ? expanded.width : originRect.width,
              borderRadius: "1.5rem",
              boxShadow: isExpanded
                ? "0 25px 60px -12px rgba(0,0,0,0.4)"
                : "0 4px 12px rgba(0,0,0,0.1)",
              transition: [
                "top 0.4s cubic-bezier(0.32, 0.72, 0, 1)",
                "left 0.4s cubic-bezier(0.32, 0.72, 0, 1)",
                "width 0.4s cubic-bezier(0.32, 0.72, 0, 1)",
                "box-shadow 0.4s ease",
              ].join(", "),
              pointerEvents: isExpanded ? "auto" : "none",
            }}
          >
            <div className="bg-white rounded-3xl overflow-hidden relative">
              {/* Close button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeCard();
                }}
                className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm
                           flex items-center justify-center shadow-md
                           hover:bg-white hover:scale-110 transition-all duration-200"
                style={{
                  opacity: isExpanded ? 1 : 0,
                  transition: "opacity 0.25s ease 0.2s, background-color 0.2s, transform 0.2s",
                }}
                aria-label="Close"
              >
                <X className="w-4 h-4 text-gray-700" />
              </button>

              {/* 1:1 image */}
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  className="object-cover object-center"
                  sizes="520px"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: isExpanded
                      ? "linear-gradient(to top, rgba(0,0,0,0.2), transparent 40%)"
                      : "none",
                    transition: "background 0.35s ease",
                  }}
                />
                <div className="absolute top-3 left-3 z-10">
                  <Badge
                    className="bg-brand text-white shadow-sm"
                    style={{
                      fontSize: isExpanded ? "0.875rem" : "0.75rem",
                      padding: isExpanded ? "0.3rem 0.85rem" : "0.125rem 0.5rem",
                      transition: "font-size 0.35s ease, padding 0.35s ease",
                    }}
                  >
                    {activeProject.tag}
                  </Badge>
                </div>
              </div>

              {/* Text */}
              <div
                style={{
                  padding: isExpanded ? "1.5rem" : "1.25rem",
                  transition: "padding 0.35s ease",
                }}
              >
                <h3
                  className="font-bold text-ngo-black leading-snug"
                  style={{
                    fontSize: isExpanded ? "1.35rem" : "1rem",
                    marginBottom: isExpanded ? "0.75rem" : "0.5rem",
                    transition: "font-size 0.35s ease, margin-bottom 0.35s ease",
                  }}
                >
                  {activeProject.title}
                </h3>
                <p
                  className="text-gray-600 leading-relaxed"
                  style={{
                    fontSize: "0.875rem",
                    display: isExpanded ? "block" : "-webkit-box",
                    WebkitLineClamp: isExpanded ? undefined : 3,
                    WebkitBoxOrient: "vertical" as const,
                    overflow: isExpanded ? "visible" : "hidden",
                  }}
                >
                  {activeProject.description}
                </p>
              </div>
            </div>
          </div>
        );
      })()}
    </>
  );
}
