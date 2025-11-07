import { type Component, splitProps } from "solid-js";

import * as CheckboxPrimitive from "@kobalte/core/checkbox";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

import { Checkbox as ShadcnCheckbox } from "@/components/ui/checkbox";

export const checkboxVariants = cva("", {
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

export type BitCheckboxProps = CheckboxPrimitive.CheckboxRootProps &
  VariantProps<typeof checkboxVariants> & {
    class?: string;
  };

const Checkbox: Component<BitCheckboxProps> = (props) => {
  const [local, others] = splitProps(props, ["class"]);

  return (
    <div
      class={cn(
        "relative flex items-center justify-center w-5 border-y-6 border-secondary pointer-events-none",
        local.class,
      )}
    >
      <ShadcnCheckbox
        class={cn(
          "flex items-center justify-center rounded-none size-5 ring-0 border-none pointer-events-auto",
          "retro",
          local.class,
        )}
        {...others}
      />

      <div
        class="absolute inset-0 border-x-6 -mx-1.5 border-secondary pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
};

export { Checkbox };
