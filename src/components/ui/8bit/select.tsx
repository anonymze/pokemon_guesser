import { type Component, type ComponentProps, splitProps } from "solid-js"
import { type VariantProps, cva } from "class-variance-authority"
import { cn } from "@/lib/utils"
import {
  Select as ShadcnSelect,
  SelectContent as ShadcnSelectContent,
  SelectGroup as ShadcnSelectGroup,
  SelectItem as ShadcnSelectItem,
  SelectLabel as ShadcnSelectLabel,
  SelectScrollDownButton as ShadcnSelectScrollDownButton,
  SelectScrollUpButton as ShadcnSelectScrollUpButton,
  SelectSeparator as ShadcnSelectSeparator,
  SelectTrigger as ShadcnSelectTrigger,
  SelectValue as ShadcnSelectValue,
} from "@/components/ui/select"

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
})

const Select: Component<ComponentProps<typeof ShadcnSelect>> = (props) => {
  return <ShadcnSelect {...props} />
}

const SelectGroup: Component<ComponentProps<typeof ShadcnSelectGroup>> = (props) => {
  return <ShadcnSelectGroup {...props} />
}

interface BitSelectValueProps extends ComponentProps<typeof ShadcnSelectValue>, VariantProps<typeof inputVariants> {}

const SelectValue: Component<BitSelectValueProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "font", "children"])

  return (
    <ShadcnSelectValue
      class={cn(local.font !== "normal" && "retro", local.class)}
      {...others}
    >
      {local.children}
    </ShadcnSelectValue>
  )
}

interface BitSelectTriggerProps extends ComponentProps<typeof ShadcnSelectTrigger>, VariantProps<typeof inputVariants> {}

const SelectTrigger: Component<BitSelectTriggerProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "font", "children"])

  return (
    <div
      class={cn(
        "relative border-y-6 border-primary pointer-events-none focus-icon",
        local.class,
        local.font !== "normal" && "retro"
      )}
    >
      <ShadcnSelectTrigger
        {...others}
        class={cn("rounded-none ring-0 w-full border-0 pointer-events-auto", local.class)}
      >
        {local.children}
      </ShadcnSelectTrigger>

      <div
        class="absolute inset-0 border-x-6 -mx-1.5 border-primary pointer-events-none"
        aria-hidden="true"
      />
    </div>
  )
}

interface BitSelectContentProps extends ComponentProps<typeof ShadcnSelectContent>, VariantProps<typeof inputVariants> {}

const SelectContent: Component<BitSelectContentProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "font", "children"])

  return (
    <ShadcnSelectContent
      class={cn(
        local.font !== "normal" && "retro",
        local.class,
        "relative rounded-none border-4 border-primary -ml-1 mt-1"
      )}
      {...others}
    >
      {local.children}
    </ShadcnSelectContent>
  )
}

const SelectLabel: Component<ComponentProps<typeof ShadcnSelectLabel>> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return <ShadcnSelectLabel class={cn(local.class)} {...others} />
}

const SelectItem: Component<ComponentProps<typeof ShadcnSelectItem>> = (props) => {
  const [local, others] = splitProps(props, ["class", "children"])

  return (
    <ShadcnSelectItem
      class={cn(
        local.class,
        "rounded-none border-y-3 border-dashed border-ring/0 hover:border-foreground"
      )}
      {...others}
    >
      {local.children}
    </ShadcnSelectItem>
  )
}

const SelectSeparator: Component<ComponentProps<typeof ShadcnSelectSeparator>> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return <ShadcnSelectSeparator class={cn(local.class)} {...others} />
}

const SelectScrollUpButton: Component<ComponentProps<typeof ShadcnSelectScrollUpButton>> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return <ShadcnSelectScrollUpButton class={cn(local.class)} {...others} />
}

const SelectScrollDownButton: Component<ComponentProps<typeof ShadcnSelectScrollDownButton>> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return <ShadcnSelectScrollDownButton class={cn(local.class)} {...others} />
}

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
}
