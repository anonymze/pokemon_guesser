import { Component, ComponentProps, splitProps } from "solid-js";

export const ErrorIcon: Component<ComponentProps<"svg">> = (props) => {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <svg
      width="150"
      height="160"
      viewBox="0 0 150 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class={`text-current ${local.class}`}
      {...rest}
    >
      <path d="M0 10H10V20H0V10Z" fill="currentColor" />
      <path d="M150 10H140V20H150V10Z" fill="currentColor" />
      <path d="M0 20H10V30H0V20Z" fill="currentColor" />
      <path d="M150 20H140V30H150V20Z" fill="currentColor" />
      <path d="M0 30H10V40H0V30Z" fill="currentColor" />
      <path d="M150 30H140V40H150V30Z" fill="currentColor" />
      <path d="M0 40H10V50H0V40Z" fill="currentColor" fill-opacity="0.3" />
      <path d="M10 50H20V60H10V50Z" fill="currentColor" fill-opacity="0.3" />
      <path d="M20 60H30V70H20V60Z" fill="currentColor" fill-opacity="0.3" />
      <path d="M30 70H40V80H30V70Z" fill="currentColor" fill-opacity="0.3" />
      <path d="M40 140H50V150H40V140Z" fill="currentColor" fill-opacity="0.3" />
      <path d="M50 130H60V140H50V130Z" fill="currentColor" fill-opacity="0.3" />
      <path d="M60 120H70V130H60V120Z" fill="currentColor" fill-opacity="0.3" />
      <path d="M70 110H80V120H70V110Z" fill="currentColor" fill-opacity="0.3" />
      <path d="M80 120H90V130H80V120Z" fill="currentColor" fill-opacity="0.3" />
      <path
        d="M90 130H100V140H90V130Z"
        fill="currentColor"
        fill-opacity="0.3"
      />
      <path
        d="M100 140H110V150H100V140Z"
        fill="currentColor"
        fill-opacity="0.3"
      />
      <path d="M0 140H10V150H0V140Z" fill="currentColor" fill-opacity="0.3" />
      <path d="M10 150H20V160H10V150Z" fill="currentColor" fill-opacity="0.3" />
      <path d="M20 150H30V160H20V150Z" fill="currentColor" fill-opacity="0.3" />
      <path d="M30 150H40V160H30V150Z" fill="currentColor" fill-opacity="0.3" />
      <path
        d="M110 150H120V160H110V150Z"
        fill="currentColor"
        fill-opacity="0.3"
      />
      <path
        d="M120 150H130V160H120V150Z"
        fill="currentColor"
        fill-opacity="0.3"
      />
      <path
        d="M130 150H140V160H130V150Z"
        fill="currentColor"
        fill-opacity="0.3"
      />
      <path
        d="M140 140H150V150H140V140Z"
        fill="currentColor"
        fill-opacity="0.3"
      />
      <path d="M140 40H150V50H140V40Z" fill="currentColor" fill-opacity="0.3" />
      <path d="M110 70H120V80H110V70Z" fill="currentColor" fill-opacity="0.3" />
      <path d="M120 60H130V70H120V60Z" fill="currentColor" fill-opacity="0.3" />
      <path d="M130 50H140V60H130V50Z" fill="currentColor" fill-opacity="0.3" />
      <path d="M10 30H20V40H10V30Z" fill="currentColor" />
      <path d="M140 30H130V40H140V30Z" fill="currentColor" />
      <path d="M10 40H20V50H10V40Z" fill="currentColor" />
      <path d="M140 40H130V50H140V40Z" fill="currentColor" />
      <path d="M20 40H30V50H20V40Z" fill="currentColor" />
      <path d="M130 40H120V50H130V40Z" fill="currentColor" />
      <path d="M130 30H120V40H130V30Z" fill="currentColor" />
      <path d="M20 30H30V40H20V30Z" fill="currentColor" />
      <path d="M20 50H30V60H20V50Z" fill="currentColor" />
      <path d="M130 50H120V60H130V50Z" fill="currentColor" />
      <path d="M30 50H40V60H30V50Z" fill="currentColor" />
      <path d="M120 50H110V60H120V50Z" fill="currentColor" />
      <path d="M120 40H110V50H120V40Z" fill="currentColor" />
      <path d="M30 40H40V50H30V40Z" fill="currentColor" />
      <path d="M110 50H100V60H110V50Z" fill="currentColor" />
      <path d="M40 50H50V60H40V50Z" fill="currentColor" />
      <path d="M110 40H100V50H110V40Z" fill="currentColor" />
      <path d="M40 40H50V50H40V40Z" fill="currentColor" />
      <path d="M110 30H100V40H110V30Z" fill="currentColor" />
      <path d="M40 30H50V40H40V30Z" fill="currentColor" />
      <path d="M120 30H110V40H120V30Z" fill="currentColor" />
      <path d="M30 30H40V40H30V30Z" fill="currentColor" />
      <path d="M120 20H110V30H120V20Z" fill="currentColor" />
      <path d="M30 20H40V30H30V20Z" fill="currentColor" />
      <path d="M130 20H120V30H130V20Z" fill="currentColor" />
      <path d="M20 20H30V30H20V20Z" fill="currentColor" />
      <path d="M130 10H120V20H130V10Z" fill="currentColor" />
      <path d="M20 10H30V20H20V10Z" fill="currentColor" />
      <path d="M140 10H130V20H140V10Z" fill="currentColor" />
      <path d="M10 10H20V20H10V10Z" fill="currentColor" />
      <path d="M140 20H130V30H140V20Z" fill="currentColor" />
      <path d="M10 20H20V30H10V20Z" fill="currentColor" />
      <path d="M100 40H90V50H100V40Z" fill="currentColor" />
      <path d="M50 40H60V50H50V40Z" fill="currentColor" />
      <path d="M30 60H40V70H30V60Z" fill="currentColor" />
      <path d="M120 60H110V70H120V60Z" fill="currentColor" />
      <path d="M40 60H50V70H40V60Z" fill="currentColor" />
      <path d="M110 60H100V70H110V60Z" fill="currentColor" />
      <path d="M40 70H50V80H40V70Z" fill="currentColor" />
      <path d="M110 70H100V80H110V70Z" fill="currentColor" />
      <path d="M40 80H50V90H40V80Z" fill="currentColor" />
      <path d="M110 80H100V90H110V80Z" fill="currentColor" />
      <path d="M110 90H100V100H110V90Z" fill="currentColor" />
      <path d="M40 90H50V100H40V90Z" fill="currentColor" />
      <path d="M30 80H40V90H30V80Z" fill="currentColor" />
      <path d="M120 80H110V90H120V80Z" fill="currentColor" />
      <path d="M30 90H40V100H30V90Z" fill="currentColor" />
      <path d="M120 90H110V100H120V90Z" fill="currentColor" />
      <path d="M20 90H30V100H20V90Z" fill="currentColor" />
      <path d="M130 90H120V100H130V90Z" fill="currentColor" />
      <path d="M20 100H30V110H20V100Z" fill="currentColor" />
      <path d="M130 100H120V110H130V100Z" fill="currentColor" />
      <path d="M10 100H20V110H10V100Z" fill="currentColor" />
      <path d="M140 100H130V110H140V100Z" fill="currentColor" />
      <path d="M10 110H20V120H10V110Z" fill="currentColor" />
      <path d="M140 110H130V120H140V110Z" fill="currentColor" />
      <path d="M0 110H10V120H0V110Z" fill="currentColor" />
      <path d="M150 110H140V120H150V110Z" fill="currentColor" />
      <path d="M0 120H10V130H0V120Z" fill="currentColor" />
      <path d="M150 120H140V130H150V120Z" fill="currentColor" />
      <path d="M0 130H10V140H0V130Z" fill="currentColor" />
      <path d="M150 130H140V140H150V130Z" fill="currentColor" />
      <path d="M10 140H20V150H10V140Z" fill="currentColor" />
      <path d="M140 140H130V150H140V140Z" fill="currentColor" />
      <path d="M20 140H30V150H20V140Z" fill="currentColor" />
      <path d="M130 140H120V150H130V140Z" fill="currentColor" />
      <path d="M30 140H40V150H30V140Z" fill="currentColor" />
      <path d="M120 140H110V150H120V140Z" fill="currentColor" />
      <path d="M30 130H40V140H30V130Z" fill="currentColor" />
      <path d="M120 130H110V140H120V130Z" fill="currentColor" />
      <path d="M40 130H50V140H40V130Z" fill="currentColor" />
      <path d="M110 130H100V140H110V130Z" fill="currentColor" />
      <path d="M40 120H50V130H40V120Z" fill="currentColor" />
      <path d="M110 120H100V130H110V120Z" fill="currentColor" />
      <path d="M120 120H110V130H120V120Z" fill="currentColor" />
      <path d="M30 120H40V130H30V120Z" fill="currentColor" />
      <path d="M120 110H110V120H120V110Z" fill="currentColor" />
      <path d="M30 110H40V120H30V110Z" fill="currentColor" />
      <path d="M130 110H120V120H130V110Z" fill="currentColor" />
      <path d="M20 110H30V120H20V110Z" fill="currentColor" />
      <path d="M130 120H120V130H130V120Z" fill="currentColor" />
      <path d="M20 120H30V130H20V120Z" fill="currentColor" />
      <path d="M130 130H120V140H130V130Z" fill="currentColor" />
      <path d="M20 130H30V140H20V130Z" fill="currentColor" />
      <path d="M140 130H130V140H140V130Z" fill="currentColor" />
      <path d="M10 130H20V140H10V130Z" fill="currentColor" />
      <path d="M140 120H130V130H140V120Z" fill="currentColor" />
      <path d="M10 120H20V130H10V120Z" fill="currentColor" />
      <path d="M110 110H100V120H110V110Z" fill="currentColor" />
      <path d="M40 110H50V120H40V110Z" fill="currentColor" />
      <path d="M50 120H60V130H50V120Z" fill="currentColor" />
      <path d="M100 120H90V130H100V120Z" fill="currentColor" />
      <path d="M50 110H60V120H50V110Z" fill="currentColor" />
      <path d="M100 110H90V120H100V110Z" fill="currentColor" />
      <path d="M100 100H90V110H100V100Z" fill="currentColor" />
      <path d="M50 100H60V110H50V100Z" fill="currentColor" />
      <path d="M110 100H100V110H110V100Z" fill="currentColor" />
      <path d="M40 100H50V110H40V100Z" fill="currentColor" />
      <path d="M120 100H110V110H120V100Z" fill="currentColor" />
      <path d="M30 100H40V110H30V100Z" fill="currentColor" />
      <path d="M60 110H70V120H60V110Z" fill="currentColor" />
      <path d="M90 110H80V120H90V110Z" fill="currentColor" />
      <path d="M60 100H70V110H60V100Z" fill="currentColor" />
      <path d="M90 100H80V110H90V100Z" fill="currentColor" />
      <path d="M70 100H80V110H70V100Z" fill="currentColor" />
      <path d="M80 100H70V110H80V100Z" fill="currentColor" />
      <path d="M80 100H90V110H80V100Z" fill="currentColor" />
      <path d="M70 100H60V110H70V100Z" fill="currentColor" />
      <path d="M10 0H20V10H10V0Z" fill="currentColor" />
      <path d="M140 0H130V10H140V0Z" fill="currentColor" />
      <path d="M20 0H30V10H20V0Z" fill="currentColor" />
      <path d="M130 0H120V10H130V0Z" fill="currentColor" />
      <path d="M30 0H40V10H30V0Z" fill="currentColor" />
      <path d="M120 0H110V10H120V0Z" fill="currentColor" />
      <path d="M30 10H40V20H30V10Z" fill="currentColor" />
      <path d="M120 10H110V20H120V10Z" fill="currentColor" />
      <path d="M40 10H50V20H40V10Z" fill="currentColor" />
      <path d="M110 10H100V20H110V10Z" fill="currentColor" />
      <path d="M40 20H50V30H40V20Z" fill="currentColor" />
      <path d="M110 20H100V30H110V20Z" fill="currentColor" />
      <path d="M50 20H60V30H50V20Z" fill="currentColor" />
      <path d="M100 20H90V30H100V20Z" fill="currentColor" />
      <path d="M50 30H60V40H50V30Z" fill="currentColor" />
      <path d="M100 30H90V40H100V30Z" fill="currentColor" />
      <path d="M60 30H70V40H60V30Z" fill="currentColor" />
      <path d="M90 30H80V40H90V30Z" fill="currentColor" />
      <path d="M60 40H70V50H60V40Z" fill="currentColor" />
      <path d="M90 40H80V50H90V40Z" fill="currentColor" />
      <path d="M70 40H80V50H70V40Z" fill="currentColor" />
      <path d="M80 40H70V50H80V40Z" fill="currentColor" />
      <path d="M80 40H90V50H80V40Z" fill="currentColor" />
      <path d="M70 40H60V50H70V40Z" fill="currentColor" />
      <path d="M50 50H100V100H50V50Z" fill="currentColor" />
      <path d="M100 50H50V100H100V50Z" fill="currentColor" />
      <path d="M60 40H90V50H60V40Z" fill="currentColor" />
      <path d="M60 100H90V110H60V100Z" fill="currentColor" />
    </svg>
  );
};
