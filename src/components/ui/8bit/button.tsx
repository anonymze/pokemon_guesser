import { type VariantProps, cva } from "class-variance-authority";
import { type Component, type JSX, splitProps } from "solid-js";

import { cn } from "@/lib/utils";

import { Button as ShadcnButton } from "@/components/ui/button";

export const buttonVariants = cva("", {
  variants: {
    font: {
      normal: "",
      retro: "retro",
    },
    variant: {
      default: "bg-foreground",
      destructive: "bg-foreground",
      outline: "bg-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    },
    size: {
      default: "h-9 px-4 py-2 has-[>svg]:px-3",
      sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
      lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
      icon: "size-9",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export type BitButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    class?: string;
  };

const Button: Component<BitButtonProps> = (props) => {
  const [local, others] = splitProps(props, [
    "children",
    "variant",
    "size",
    "class",
    "font",
  ]);

  const isMuted = local.class?.includes("bg-muted");

  return (
    <ShadcnButton
      {...others}
      class={cn(
        "rounded-none active:translate-y-1 transition-transform relative inline-flex items-center justify-center gap-1.5 border-none focus-icon",
        "retro",
        isMuted ? "hover:text-foreground" : "hover:text-white",
        local.class,
      )}
      size={local.size}
      variant={local.variant}
    >
      {local.children}

      {local.variant !== "ghost" &&
        local.variant !== "link" &&
        local.size !== "icon" && (
          <>
            {/* Pixelated border */}
            <div class="absolute -top-1.5 w-1/2 left-1.5 h-1.5 bg-foreground " />
            <div class="absolute -top-1.5 w-1/2 right-1.5 h-1.5 bg-foreground " />
            <div class="absolute -bottom-1.5 w-1/2 left-1.5 h-1.5 bg-foreground " />
            <div class="absolute -bottom-1.5 w-1/2 right-1.5 h-1.5 bg-foreground " />
            <div class="absolute top-0 left-0 size-1.5 bg-foreground " />
            <div class="absolute top-0 right-0 size-1.5 bg-foreground " />
            <div class="absolute bottom-0 left-0 size-1.5 bg-foreground " />
            <div class="absolute bottom-0 right-0 size-1.5 bg-foreground " />
            <div class="absolute top-1.5 -left-1.5 h-[calc(100%-12px)] w-1.5 bg-foreground " />
            <div class="absolute top-1.5 -right-1.5 h-[calc(100%-12px)] w-1.5 bg-foreground " />
            {local.variant !== "outline" && (
              <>
                {/* Top shadow */}
                <div class="absolute top-0 left-0 w-full h-1.5 bg-foreground/20" />
                <div class="absolute top-1.5 left-0 w-3 h-1.5 bg-foreground/20" />

                {/* Bottom shadow */}
                <div class="absolute bottom-0 left-0 w-full h-1.5 bg-foreground/20" />
                <div class="absolute bottom-1.5 right-0 w-3 h-1.5 bg-foreground/20" />
              </>
            )}
          </>
        )}

      {local.size === "icon" && (
        <>
          <div class="absolute top-0 left-0 w-full h-[5px] md:h-1.5 bg-foreground  pointer-events-none" />
          <div class="absolute bottom-0 w-full h-[5px] md:h-1.5 bg-foreground  pointer-events-none" />
          <div class="absolute top-1 -left-1 w-[5px] md:w-1.5 h-1/2 bg-foreground  pointer-events-none" />
          <div class="absolute bottom-1 -left-1 w-[5px] md:w-1.5 h-1/2 bg-foreground  pointer-events-none" />
          <div class="absolute top-1 -right-1 w-[5px] md:w-1.5 h-1/2 bg-foreground  pointer-events-none" />
          <div class="absolute bottom-1 -right-1 w-[5px] md:w-1.5 h-1/2 bg-foreground  pointer-events-none" />
        </>
      )}
    </ShadcnButton>
  );
};

export { Button };
