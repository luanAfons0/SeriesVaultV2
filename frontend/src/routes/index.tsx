import type { DocumentHead } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";

import { Footer } from "~/components/footer/footer";
import { Header } from "~/components/header/header";
import { Home } from "~/components/home/home";

export default component$(() => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
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
