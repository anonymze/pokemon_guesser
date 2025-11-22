import { Component, ComponentProps, splitProps } from "solid-js";

export const RestartIcon: Component<ComponentProps<"svg">> = (props) => {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 256 256"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      stroke-width="0.25"
      color=""
      class="size-6"
      aria-label="repeat"
    >
      <rect x="184" y="48" width="22" height="22" rx="1"></rect>
      <rect x="208" y="64" width="22" height="22" rx="1"></rect>
      <rect x="184" y="80" width="22" height="22" rx="1"></rect>
      <rect x="184" y="64" width="22" height="22" rx="1"></rect>
      <rect x="168" y="32" width="22" height="22" rx="1"></rect>
      <rect x="168" y="96" width="22" height="22" rx="1"></rect>
      <rect x="168" y="64" width="14" height="14" rx="1"></rect>
      <rect x="152" y="64" width="14" height="14" rx="1"></rect>
      <rect x="136" y="64" width="14" height="14" rx="1"></rect>
      <rect x="120" y="64" width="14" height="14" rx="1"></rect>
      <rect x="56" y="112" width="14" height="14" rx="1"></rect>
      <rect x="56" y="80" width="14" height="14" rx="1"></rect>
      <rect x="88" y="64" width="14" height="14" rx="1"></rect>
      <rect x="104" y="64" width="14" height="14" rx="1"></rect>
      <rect x="56" y="96" width="14" height="14" rx="1"></rect>
      <rect x="72" y="64" width="14" height="14" rx="1"></rect>
      <rect x="56" y="176" width="14" height="14" rx="1"></rect>
      <rect x="184" y="144" width="14" height="14" rx="1"></rect>
      <rect x="56" y="160" width="14" height="14" rx="1"></rect>
      <rect x="184" y="160" width="14" height="14" rx="1"></rect>
      <rect x="72" y="144" width="22" height="22" rx="1"></rect>
      <rect x="32" y="176" width="22" height="22" rx="1"></rect>
      <rect x="168" y="176" width="14" height="14" rx="1"></rect>
      <rect x="152" y="176" width="14" height="14" rx="1"></rect>
      <rect x="136" y="176" width="14" height="14" rx="1"></rect>
      <rect x="120" y="176" width="14" height="14" rx="1"></rect>
      <rect x="184" y="128" width="14" height="14" rx="1"></rect>
      <rect x="56" y="192" width="22" height="22" rx="1"></rect>
      <rect x="88" y="176" width="14" height="14" rx="1"></rect>
      <rect x="104" y="176" width="14" height="14" rx="1"></rect>
      <rect x="72" y="208" width="22" height="22" rx="1"></rect>
      <rect x="72" y="176" width="14" height="14" rx="1"></rect>
    </svg>
  );
};
