import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { SignUpBox } from "~/components/sign-up-box/sign-up-box";

export default component$(() => {
  return (
    <>
      <SignUpBox />
    </>
  );
});

export const head: DocumentHead = {
  title: "SeriesVault | Sign up",
  meta: [
    {
      name: "description",
      content: "Create your account!",
    },
  ],
};
