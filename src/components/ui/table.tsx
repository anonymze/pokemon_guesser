import { cn } from "@/lib/utils";
import { type JSX, splitProps } from "solid-js";

function Table(props: JSX.HTMLAttributes<HTMLTableElement>) {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <div data-slot="table-container" class="relative w-full overflow-x-auto">
      <table
        data-slot="table"
        class={cn("w-full caption-bottom text-sm", local.class)}
        {...others}
      />
    </div>
  );
}

function TableHeader(props: JSX.HTMLAttributes<HTMLTableSectionElement>) {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <thead
      data-slot="table-header"
      class={cn("[&_tr]:border-b", local.class)}
      {...others}
    />
  );
}

function TableBody(props: JSX.HTMLAttributes<HTMLTableSectionElement>) {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <tbody
      data-slot="table-body"
      class={cn("[&_tr:last-child]:border-0", local.class)}
      {...others}
    />
  );
}

function TableFooter(props: JSX.HTMLAttributes<HTMLTableSectionElement>) {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <tfoot
      data-slot="table-footer"
      class={cn(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        local.class
      )}
      {...others}
    />
  );
}

function TableRow(props: JSX.HTMLAttributes<HTMLTableRowElement>) {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <tr
      data-slot="table-row"
      class={cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        local.class
      )}
      {...others}
    />
  );
}

function TableHead(props: JSX.ThHTMLAttributes<HTMLTableCellElement>) {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <th
      data-slot="table-head"
      class={cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-0.5",
        local.class
      )}
      {...others}
    />
  );
}

function TableCell(props: JSX.TdHTMLAttributes<HTMLTableCellElement>) {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <td
      data-slot="table-cell"
      class={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 *:[[role=checkbox]]:translate-y-0.5",
        local.class
      )}
      {...others}
    />
  );
}

function TableCaption(props: JSX.HTMLAttributes<HTMLTableCaptionElement>) {
  const [local, others] = splitProps(props, ["class"]);
  return (
    <caption
      data-slot="table-caption"
      class={cn("text-muted-foreground mt-4 text-sm", local.class)}
      {...others}
    />
  );
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
