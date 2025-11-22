import { Component, ComponentProps, splitProps } from "solid-js";

export const SuccessIcon: Component<ComponentProps<"svg">> = (props) => {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <svg
      width="160"
      height="120"
      viewBox="0 0 160 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class={`text-current ${local.class}`}
      {...rest}
    >
      <path d="M0 40H10V50H0V40Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M0 50H10V60H0V50Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M10 60H20V70H10V60Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M20 70H30V80H20V70Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M30 80H40V90H30V80Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M40 90H50V100H40V90Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M50 100H60V110H50V100Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M60 110H70V120H60V110Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M70 100H80V110H70V100Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M80 90H90V100H80V90Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M90 80H100V90H90V80Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M100 70H110V80H100V70Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M110 60H120V70H110V60Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M120 50H130V60H120V50Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M130 40H140V50H130V40Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M140 30H150V40H140V30Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M150 20H160V30H150V20Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M140 20H150V30H140V20Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M130 20H140V30H130V20Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M130 30H140V40H130V30Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M10 40H20V50H10V40Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M10 50H20V60H10V50Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M20 40H30V50H20V40Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M20 50H30V60H20V50Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M20 60H30V70H20V60Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M30 50H40V60H30V50Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M30 60H40V70H30V60Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M30 70H40V80H30V70Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M40 60H50V70H40V60Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M40 70H50V80H40V70Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M40 80H50V90H40V80Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M70 60H80V70H70V60Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M80 50H90V60H80V50Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M90 40H100V50H90V40Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M100 30H110V40H100V30Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M110 20H120V30H110V20Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M120 10H130V20H120V10Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M50 70H90V90H50V70Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M75 60H110V80H75V60Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M90 40H130V60H90V40Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M108 20H148V40H108V20Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M130 0H160V20H130V0Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M50 90H80V100H50V90Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M50 100H80V110H50V100Z" fill="currentColor" fill-opacity="0.7" />
      <path d="M60 100H70V120H60V100Z" fill="currentColor" />
      <path d="M70 90H80V110H70V90Z" fill="currentColor" />
      <path d="M80 80H90V100H80V80Z" fill="currentColor" />
      <path d="M90 70H100V90H90V70Z" fill="currentColor" />
      <path d="M100 60H110V80H100V60Z" fill="currentColor" />
      <path d="M110 50H120V70H110V50Z" fill="currentColor" />
      <path d="M120 40H130V60H120V40Z" fill="currentColor" />
      <path d="M130 30H140V50H130V30Z" fill="currentColor" />
      <path d="M140 20H150V40H140V20Z" fill="currentColor" />
      <path d="M150 10H160V30H150V10Z" fill="currentColor" />
    </svg>
  );
};
