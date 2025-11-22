import { cn } from "@/lib/utils";
import * as SwitchPrimitive from "@kobalte/core/switch";
import { type Component, type ComponentProps, splitProps } from "solid-js";

const Switch: Component<ComponentProps<typeof SwitchPrimitive.Root>> = (
  props,
) => {
  const [local, others] = splitProps(props, ["class"]);

  return (
    <SwitchPrimitive.Root
      class="focus-icon inline-block"
      {...others}
    >
      <SwitchPrimitive.Input class="sr-only" />
      <SwitchPrimitive.Control
        data-slot="switch"
        class={cn(
          "relative peer data-checked:bg-primary rounded-xs data-unchecked:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center border border-transparent shadow-xs transition-all outline-none disabled:cursor-not-allowed disabled:opacity-50",
          local.class,
        )}
      >
        <SwitchPrimitive.Thumb
          data-slot="switch-thumb"
          class={cn(
            "bg-background data-unchecked:bg-foreground data-checked:bg-primary-foreground pointer-events-none block w-4 h-4 border border-foreground/80 ring-0 transition-transform data-checked:translate-x-[calc(100%-2px)] data-unchecked:translate-x-0",
          )}
        />

        <div
          class="absolute inset-0 border-y-4 -my-1 border-foreground pointer-events-none"
          aria-hidden="true"
        />

        <div
          class="absolute inset-0 border-x-4 -mx-1 border-foreground pointer-events-none"
          aria-hidden="true"
        />
      </SwitchPrimitive.Control>
    </SwitchPrimitive.Root>
  );
};

export { Switch };
