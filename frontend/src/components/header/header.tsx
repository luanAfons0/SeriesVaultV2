import { component$ } from "@builder.io/qwik";
import styles from "./styles.module.scss";
import { Link } from "@builder.io/qwik-city";

export const Header = component$(() => {
  return (
    <header class={styles.container}>
      <h2>SeriesVault</h2>
      <div class={styles.buttonRow}>
        <Link href="/login">
          <button class="secondary">Login</button>
        </Link>
        <Link href="/sign-up">
          <button>Sign up</button>
        </Link>
      </div>
    </header>
  );
});
