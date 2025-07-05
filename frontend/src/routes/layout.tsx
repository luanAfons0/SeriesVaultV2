import { component$, Slot } from "@builder.io/qwik";
import { Footer } from "~/components/footer/footer";
import { Header } from "~/components/header/header";

export default component$(() => {
  return (
    <main class="container">
      <Header />
      <Slot />
      <Footer />
    </main>
  );
});
