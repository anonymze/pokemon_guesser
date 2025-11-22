import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import { type JSX, Show, splitProps } from "solid-js";

import {
  Table as ShadcnTable,
  TableBody as ShadcnTableBody,
  TableCaption as ShadcnTableCaption,
  TableCell as ShadcnTableCell,
  TableFooter as ShadcnTableFooter,
  TableHead as ShadcnTableHead,
  TableHeader as ShadcnTableHeader,
  TableRow as ShadcnTableRow,
} from "@/components/ui/table";

import "./styles/retro.css";

export const tableVariants = cva("", {
  variants: {
    variant: {
      default: "p-4 py-2.5 border-y-6 border-foreground ",
      borderless: "",
    },
    font: {
      normal: "",
      retro: "retro",
    },
  },
  defaultVariants: {
    font: "retro",
    variant: "default",
  },
});

type TableProps = JSX.HTMLAttributes<HTMLTableElement> & {
  font?: VariantProps<typeof tableVariants>["font"];
  variant?: VariantProps<typeof tableVariants>["variant"];
};

function Table(props: TableProps) {
  const [local, others] = splitProps(props, ["class", "font", "variant"]);

  return (
    <div
      class={cn(
        "relative flex justify-center w-fit mx-auto mt-5",
        tableVariants({ font: local.font, variant: local.variant }),
      )}
    >
      <ShadcnTable class={local.class} {...others} />

      <Show when={local.variant !== "borderless"}>
        <div
          class="absolute inset-0 border-x-6 -mx-1.5 border-foreground  pointer-events-none"
          aria-hidden="true"
        />
      </Show>
    </div>
  );
}

function TableHeader(props: JSX.HTMLAttributes<HTMLTableSectionElement>) {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <ShadcnTableHeader
      class={cn(local.class, "border-b-4 border-foreground ")}
      {...others}
    />
  );
}

function TableBody(props: JSX.HTMLAttributes<HTMLTableSectionElement>) {
  const [local, others] = splitProps(props, ["class"]);
  return <ShadcnTableBody class={cn(local.class)} {...others} />;
}

function TableFooter(props: JSX.HTMLAttributes<HTMLTableSectionElement>) {
  const [local, others] = splitProps(props, ["class"]);
  return <ShadcnTableFooter class={cn(local.class)} {...others} />;
}

function TableRow(props: JSX.HTMLAttributes<HTMLTableRowElement>) {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <ShadcnTableRow
      class={cn(local.class, "border-dashed border-b-4 border-foreground ")}
      {...others}
    />
  );
}

function TableHead(props: JSX.ThHTMLAttributes<HTMLTableCellElement>) {
  const [local, others] = splitProps(props, ["class"]);
  return <ShadcnTableHead class={cn(local.class)} {...others} />;
}

function TableCell(props: JSX.TdHTMLAttributes<HTMLTableCellElement>) {
  const [local, others] = splitProps(props, ["class"]);
  return <ShadcnTableCell class={cn(local.class)} {...others} />;
}

function TableCaption(props: JSX.HTMLAttributes<HTMLTableCaptionElement>) {
  const [local, others] = splitProps(props, ["class"]);
  return <ShadcnTableCaption class={cn(local.class)} {...others} />;
}

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
};
