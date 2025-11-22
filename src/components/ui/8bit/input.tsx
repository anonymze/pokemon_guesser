import { Input as ShadcnInput } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { splitProps, type ComponentProps } from "solid-js";
import "./styles/retro.css";

export const inputVariants = cva("", {
  variants: {
    font: {
      normal: "",
      retro: "retro",
    },
  },
  defaultVariants: {
    font: "retro",
  },
});

export type BitInputProps = ComponentProps<typeof ShadcnInput> &
  VariantProps<typeof inputVariants>;

function Input(props: BitInputProps) {
  const [local, rest] = splitProps(props, ["class", "font"]);

  return (
    <div
      class={cn(
        "relative border-y-6 border-primary  p-0! flex items-center focus-icon",
        local.class,
      )}
    >
      <ShadcnInput
        {...rest}
        class={cn(
          "rounded-none ring-0 w-full!",
          local.font !== "normal" && "retro",
          local.class,
        )}
      />

      <div
        class="absolute inset-0 border-x-6 -mx-1.5 border-primary pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
}

export { Input };
