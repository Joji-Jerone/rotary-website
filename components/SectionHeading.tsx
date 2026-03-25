import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean; // for dark-background sections
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-8 sm:mb-10 lg:mb-10 xl:mb-14", centered && "text-center", className)}>
      {eyebrow && (
        <p
          className={cn(
            "text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2 sm:mb-3",
            light ? "text-brand-200" : "text-brand"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4",
          light ? "text-white" : "text-ngo-black"
        )}
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-sm sm:text-base leading-relaxed max-w-2xl",
            centered && "mx-auto",
            light ? "text-white/60" : "text-gray-500"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
