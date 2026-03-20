"use client";

// Client-side anchor styled as a button — safe to import from server components.
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";

type BtnVariants = VariantProps<typeof buttonVariants>;

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: BtnVariants["variant"];
  size?: BtnVariants["size"];
  extraClassName?: string;
}

export default function LinkButton({
  variant = "default",
  size = "default",
  className,
  extraClassName,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <a
      {...props}
      className={cn(
        buttonVariants({ variant, size }),
        "no-underline",
        className,
        extraClassName
      )}
    >
      {children}
    </a>
  );
}
