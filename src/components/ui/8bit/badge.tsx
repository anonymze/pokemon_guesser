import { type VariantProps, cva } from "class-variance-authority";
import { JSX, splitProps } from "solid-js";

import { cn } from "@/lib/utils";

import { Badge as ShadcnBadge } from "@/components/ui/badge";

export const badgeVariants = cva("", {
  variants: {
    font: {
      normal: "",
      retro: "retro",
    },
    variant: {
      default: "border-primary bg-primary",
      destructive: "border-destructive bg-destructive",
      outline: "border-background bg-background",
      secondary: "border-secondary bg-secondary",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type BitBadgeProps = {
  children?: JSX.Element;
  class?: string;
  font?: "normal" | "retro";
  variant?: "default" | "destructive" | "outline" | "secondary";
} & JSX.HTMLAttributes<HTMLSpanElement>;

function Badge(props: BitBadgeProps) {
  const [local, others] = splitProps(props, ["children", "class", "font", "variant"]);
  const color = badgeVariants({ variant: local.variant, font: local.font });

  const classes = local.class?.split(" ") || [];

  // visual classes for badge and sidebars
  const visualClasses = classes.filter(
    (c) =>
      c.startsWith("bg-") ||
      c.startsWith("border-") ||
      c.startsWith("text-") ||
      c.startsWith("rounded-")
  );

  // Container should accept all non-visual utility classes (e.g., size, spacing, layout)
  const containerClasses = classes.filter(
    (c) =>
      !(
        c.startsWith("bg-") ||
        c.startsWith("border-") ||
        c.startsWith("text-") ||
        c.startsWith("rounded-")
      )
  );

  return (
    <div class={cn("relative inline-flex items-stretch", containerClasses)}>
      <ShadcnBadge
        {...others}
        class={cn(
          "h-full",
          "rounded-none",
          "w-full",
          local.font !== "normal" && "retro",
          visualClasses
        )}
        variant={local.variant}
      >
        {local.children}
      </ShadcnBadge>

      {/* Left pixel bar */}
      <div
        class={cn(
          "-left-1.5 absolute inset-y-1 w-1.5",
          color,
          visualClasses
        )}
      />
      {/* Right pixel bar */}
      <div
        class={cn(
          "-right-1.5 absolute inset-y-1 w-1.5",
          color,
          visualClasses
        )}
      />
    </div>
  );
}

export { Badge };
