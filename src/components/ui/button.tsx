import { cva, type VariantProps } from "class-variance-authority";
import { type Component, type JSX, splitProps } from "solid-js";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-alternative text-alternative-foreground hover:bg-alternative/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20  ",
        outline:
          "border bg-white shadow-xs hover:text-white hover:bg-primary text-primary focus:bg-primary focus:text-white",
        secondary:
          "bg-warning text-foreground hover:bg-warning/80 hover:text-foreground! focus:bg-warning/80",
        ghost:
          "border border-foreground hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    class?: string;
  };

const Button: Component<ButtonProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "variant", "size"]);

  return (
    <button
      data-slot="button"
      class={cn(
        buttonVariants({
          variant: local.variant,
          size: local.size,
          className: local.class,
        }),
      )}
      {...others}
    />
  );
};

export { Button, buttonVariants };
