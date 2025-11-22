import { cn } from "@/lib/utils";
import * as SeparatorPrimitive from "@kobalte/core/separator";
import { type Component, type ComponentProps, splitProps } from "solid-js";

const Separator: Component<ComponentProps<typeof SeparatorPrimitive.Root>> = (
  props,
) => {
  const [local, others] = splitProps(props, ["class", "orientation"]);

  return (
    <SeparatorPrimitive.Root
      data-slot="separator-root"
      orientation={local.orientation || "horizontal"}
      class={cn(
        "data-[orientation=horizontal]:bg-size-[16px_8px] data-[orientation=horizontal]:bg-[linear-gradient(90deg,var(--foreground)_75%,transparent_75%)] shrink-0 data-[orientation=horizontal]:h-0.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-0.5 data-[orientation=vertical]:bg-size-[2px_16px] data-[orientation=vertical]:bg-[linear-gradient(0deg,var(--foreground)_75%,transparent_75%)] bg-[linear-gradient(0deg,var(--ring)_75%,transparent_75%)]",
        local.class,
      )}
      {...others}
    />
  );
};

export { Separator };
