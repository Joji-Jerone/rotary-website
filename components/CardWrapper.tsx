import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardWrapperProps {
  children: ReactNode;
  className?: string;
  /** Enable lift (-translate-y-2) on hover — default true */
  lift?: boolean;
  /** Disable the default white bg if you need a custom one */
  noBg?: boolean;
}

export default function CardWrapper({
  children,
  className,
  lift = true,
  noBg = false,
}: CardWrapperProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-gray-200 shadow-md transition-all duration-300 ease-in-out",
        !noBg && "bg-white",
        lift && "hover:shadow-xl hover:-translate-y-2",
        className
      )}
    >
      {children}
    </div>
  );
}
