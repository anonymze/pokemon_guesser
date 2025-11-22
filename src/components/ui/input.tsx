import { cn } from "@/lib/utils";
import { splitProps, type ComponentProps } from "solid-js";

function Input(props: ComponentProps<"input">) {
  const [local, rest] = splitProps(props, ["class", "type"]);

  return (
    <input
      type={local.type ?? "text"}
      data-slot="input"
      autocomplete="off"
      autocorrect="off"
      autocapitalize="off"
      spellcheck={false}
      class={cn(
        "file:text-foreground placeholder:text-foreground/50 selection:bg-primary selection:text-primary-foreground border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
        local.class,
      )}
      {...rest}
    />
  );
}

export { Input };
