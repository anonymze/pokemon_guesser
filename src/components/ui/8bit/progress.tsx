import { Progress as ProgressPrimitive } from "@kobalte/core/progress";
import { cva, type VariantProps } from "class-variance-authority";
import { For, Show, splitProps, type Component } from "solid-js";

import { cn } from "@/lib/utils";

import "./styles/retro.css";

export const progressVariants = cva("", {
  variants: {
    variant: {
      default: "",
      retro: "retro",
    },
    font: {
      normal: "",
      retro: "retro",
    },
  },
  defaultVariants: {
    font: "retro",
  },
});

export interface BitProgressProps
  extends VariantProps<typeof progressVariants> {
  className?: string;
  font?: VariantProps<typeof progressVariants>["font"];
  progressBg?: string;
  value?: number;
}

const Progress: Component<BitProgressProps> = (props) => {
  const [local, others] = splitProps(props, [
    "className",
    "font",
    "variant",
    "value",
    "progressBg",
  ]);

  // Extract height from className if present
  const heightMatch = () => local.className?.match(/h-(\d+|\[.*?\])/);
  const heightClass = () => heightMatch()?.[0] || "h-2";

  return (
    <div class={cn("relative w-full", local.className)}>
      <ProgressPrimitive
        value={local.value || 0}
        minValue={0}
        maxValue={100}
        {...others}
      >
        <ProgressPrimitive.Track
          data-slot="progress"
          class={cn(
            "bg-primary/20 relative w-full overflow-hidden",
            heightClass(),
            local.font !== "normal" && "retro",
          )}
        >
          <ProgressPrimitive.Fill
            data-slot="progress-indicator"
            class={cn(
              "h-full transition-all",
              local.variant === "retro" ? "flex" : "w-full flex-1",
              local.progressBg && local.variant !== "retro"
                ? local.progressBg
                : "bg-primary",
            )}
            style={
              local.variant === "retro"
                ? undefined
                : { transform: `translateX(-${100 - (local.value || 0)}%)` }
            }
          >
            <Show when={local.variant === "retro"}>
              <div class="flex w-full">
                <For each={Array.from({ length: 20 })}>
                  {(_, i) => {
                    const filledSquares = Math.round(
                      ((local.value || 0) / 100) * 20,
                    );
                    return (
                      <div
                        class={cn(
                          "size-full mx-px",
                          i() < filledSquares
                            ? local.progressBg
                            : "bg-transparent",
                        )}
                      />
                    );
                  }}
                </For>
              </div>
            </Show>
          </ProgressPrimitive.Fill>
        </ProgressPrimitive.Track>
      </ProgressPrimitive>

      <div
        class="absolute inset-0 border-y-4 -my-1 border-foreground  pointer-events-none"
        aria-hidden="true"
      />

      <div
        class="absolute inset-0 border-x-4 -mx-1 border-foreground  pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
};

export { Progress };
