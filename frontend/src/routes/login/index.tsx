import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { LoginBox } from "~/components/login-box/login-box";

export default component$(() => {
  return <LoginBox />;
});

export const head: DocumentHead = {
  title: "SeriesVault | Login",
  meta: [
    {
      name: "description",
      content: "Login into your account!",
    },
  ],
};
