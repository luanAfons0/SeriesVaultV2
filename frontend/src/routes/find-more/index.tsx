import { component$ } from "@builder.io/qwik";
import { Footer } from "~/components/footer/footer";
import { Header } from "~/components/header/header";

export default component$(() => {
  return (
    <>
      <Header />
      <h1>Find more page here</h1>
      <Footer />
    </>
  );
});
