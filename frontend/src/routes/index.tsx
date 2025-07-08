import type { DocumentHead } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";

import { Home } from "~/components/home/home";

export default component$(() => {
  return <Home />;
});

export const head: DocumentHead = {
  title: "Series Vault | Home",
  meta: [
    {
      name: "description",
      content: "Series vault home page",
    },
  ],
};
