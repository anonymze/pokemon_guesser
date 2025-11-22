import { Progress as ProgressPrimitive } from "@kobalte/core/progress";
import { splitProps, type Component } from "solid-js";

import { cn } from "@/lib/utils";

export interface ProgressProps {
  className?: string;
  value?: number;
}

const Progress: Component<ProgressProps> = (props) => {
  const [local, others] = splitProps(props, ["className", "value"]);

  return (
    <ProgressPrimitive
      value={local.value || 0}
      minValue={0}
      maxValue={100}
      {...others}
    >
      <ProgressPrimitive.Track
        data-slot="progress"
        class={cn(
          "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
          local.className
        )}
      >
        <ProgressPrimitive.Fill
          data-slot="progress-indicator"
          class="bg-primary h-full w-full flex-1 transition-all"
          style={{ transform: `translateX(-${100 - (local.value || 0)}%)` }}
        />
      </ProgressPrimitive.Track>
    </ProgressPrimitive>
  );
};

export { Progress };
