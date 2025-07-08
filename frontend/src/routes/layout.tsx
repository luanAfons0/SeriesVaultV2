import { component$, Slot } from "@builder.io/qwik";
import { Footer } from "~/components/footer/footer";
import { Header } from "~/components/header/header";

export default component$(() => {
  return (
    <>
      <main class="flex flex-col justify-center">
        <Header />
        <section class="container mx-auto my-4 flex flex-col justify-center p-5 sm:p-0">
          <Slot />
        </section>
        <Footer />
      </main>
    </>
  );
});
