import { cn } from "@/lib/utils";
import * as SelectPrimitive from "@kobalte/core/select";
import { type Component, type ComponentProps, JSX, splitProps } from "solid-js";

const ChevronDownIcon: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = (
  props,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    {...props}
  >
    <path d="m6 9 6 6 6-6"></path>
  </svg>
);

const ChevronUpIcon: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = (
  props,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    {...props}
  >
    <path d="m18 15-6-6-6 6"></path>
  </svg>
);

const CheckIcon: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    {...props}
  >
    <path d="M20 6 9 17l-5-5"></path>
  </svg>
);

const Select: Component<ComponentProps<typeof SelectPrimitive.Root>> = (
  props,
) => {
  return <SelectPrimitive.Root {...props} />;
};

const SelectGroup: Component<JSX.HTMLAttributes<HTMLDivElement>> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return <div class={cn("px-2 py-1.5", local.class)} {...others} />
}

const SelectValue: Component<ComponentProps<typeof SelectPrimitive.Value<any>>> = (
  props,
) => {
  return <SelectPrimitive.Value {...props} />;
};

interface SelectTriggerProps
  extends ComponentProps<typeof SelectPrimitive.Trigger> {
  size?: "sm" | "default";
}

const SelectTrigger: Component<SelectTriggerProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "size", "children"]);

  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={local.size || "default"}
      class={cn(
        "border-input data-placeholder:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 aria-invalid:border-destructive bg-input/30 hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        local.class,
      )}
      {...others}
    >
      {local.children}
      <SelectPrimitive.Icon>
        <ChevronDownIcon class="size-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
};

interface SelectContentProps
  extends ComponentProps<typeof SelectPrimitive.Content> {
  position?: "popper" | "item-aligned";
}

const SelectContent: Component<SelectContentProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "children", "position"]);

  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        class={cn(
          "bg-popover text-popover-foreground data-expanded:animate-in data-closed:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 data-[expanded]:zoom-in-95 relative z-50 min-w-32 overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
          local.position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          local.class,
        )}
        {...others}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Listbox
          class={cn("p-1", local.position === "popper" && "w-full scroll-my-1")}
        />
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
};

const SelectLabel: Component<ComponentProps<typeof SelectPrimitive.Label>> = (
  props,
) => {
  const [local, others] = splitProps(props, ["class"]);

  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      class={cn("text-muted-foreground px-2 py-1.5 text-xs e", local.class)}
      {...others}
    />
  );
};

const SelectItem: Component<ComponentProps<typeof SelectPrimitive.Item>> = (
  props,
) => {
  const [local, others] = splitProps(props, ["class", "children", "item"]);

  return (
    <SelectPrimitive.Item
      item={local.item}
      data-slot="select-item"
      class={cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2 hover:border-primary!",
        local.class,
      )}
      {...others}
    >
      <SelectPrimitive.ItemIndicator class="absolute right-2 flex size-3.5 items-center justify-center">
        <CheckIcon class="size-4" />
      </SelectPrimitive.ItemIndicator>
      <SelectPrimitive.ItemLabel>{local.children}</SelectPrimitive.ItemLabel>
    </SelectPrimitive.Item>
  );
};

const SelectSeparator: Component<JSX.HTMLAttributes<HTMLDivElement>> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <div
      data-slot="select-separator"
      class={cn("bg-primary pointer-events-none -mx-1 my-1 h-px ", local.class)}
      {...others}
    />
  )
}

const SelectScrollUpButton: Component<JSX.HTMLAttributes<HTMLDivElement>> = (
  props,
) => {
  const [local, others] = splitProps(props, ["class"]);

  return (
    <div
      data-slot="select-scroll-up-button"
      class={cn(
        "flex cursor-default items-center justify-center py-1",
        local.class,
      )}
      {...others}
    >
      <ChevronUpIcon class="size-4" />
    </div>
  );
};

const SelectScrollDownButton: Component<JSX.HTMLAttributes<HTMLDivElement>> = (
  props,
) => {
  const [local, others] = splitProps(props, ["class"]);

  return (
    <div
      data-slot="select-scroll-down-button"
      class={cn(
        "flex cursor-default items-center justify-center py-1 ",
        local.class,
      )}
      {...others}
    >
      <ChevronDownIcon class="size-4" />
    </div>
  );
};

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
