import { component$ } from "@builder.io/qwik";
import styles from "./styles.module.scss";
import { Link } from "@builder.io/qwik-city";

export const Header = component$(() => {
  return (
    <header class={styles.container}>
      <Link href="/" aria-label="Go to the home page">
        <h2>SeriesVault</h2>
      </Link>
      <div class={styles.buttonRow}>
        <Link href="/login" aria-label="Go to te login page">
          <button class="secondary">Login</button>
        </Link>
        <Link href="/sign-up" aria-label="Go to the sign up page">
          <button>Sign up</button>
        </Link>
      </div>
    </header>
  );
});
