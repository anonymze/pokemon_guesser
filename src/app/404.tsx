import { Button } from "@/components/ui/8bit/button";
import { A } from "@solidjs/router";
import { Component } from "solid-js";

const Page: Component = () => {
  return <main class="flex justify-center items-center flex-col h-dvh gap-5">
    <h1 class="text-7xl">404</h1>
    <p class="text-xl">PAGE NOT FOUND</p>
    <Button><A href="/">Go back home</A></Button>
  </main>;
};

export default Page;
