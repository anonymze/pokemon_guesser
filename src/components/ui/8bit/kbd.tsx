import { cn } from "@/lib/utils";
import { Component, ComponentProps, splitProps } from "solid-js";

import "./styles/retro.css";

const Kbd: Component<ComponentProps<"kbd">> = (props) => {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <kbd
      data-slot="kbd"
      class={cn(
        "retro bg-warning text-foreground pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 px-1 font-sans text-xs font-medium select-none",
        "[&_svg:not([class*='size-'])]:size-3",
        "in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background",
        local.class
      )}
      {...rest}
    />
  );
};

const KbdGroup: Component<ComponentProps<"kbd">> = (props) => {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <kbd
      data-slot="kbd-group"
      class={cn("inline-flex items-center gap-1", local.class)}
      {...rest}
    />
  );
};

export { Kbd, KbdGroup };
