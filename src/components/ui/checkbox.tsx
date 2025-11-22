import * as CheckboxPrimitive from "@kobalte/core/checkbox";
import { CheckboxLabel } from "@kobalte/core/src/checkbox/checkbox-label.jsx";
import { type Component, type ComponentProps, splitProps } from "solid-js";

const Checkbox: Component<ComponentProps<typeof CheckboxPrimitive.Root>> = (
  props,
) => {
  const [local, others] = splitProps(props, ["class"]);

  return (
    <CheckboxPrimitive.Root {...others}>
      <CheckboxPrimitive.Input />
      <CheckboxPrimitive.Control class={local.class}>
        <CheckboxPrimitive.Indicator>lol</CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Control>
    </CheckboxPrimitive.Root>
  );
};

export { Checkbox };
