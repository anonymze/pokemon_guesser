/* @refresh reload */
import { Router } from "@solidjs/router";
import "solid-devtools";
import { lazy } from "solid-js";
import { render } from "solid-js/web";
import "./styles/app.css";
import { Toaster } from "@/components/ui/sonner";

const root = document.getElementById("app");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "App element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

const routes = {
  path: "/",
  component: lazy(() => import("./app/home")),
};

render(() => (
  <>
    <Router>{routes}</Router>
    <Toaster />
  </>
), root!);
