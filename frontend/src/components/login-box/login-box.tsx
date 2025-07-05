import { component$ } from "@builder.io/qwik";
import styles from "./styles.module.scss";
import { Link } from "@builder.io/qwik-city";

export const LoginBox = component$(() => {
  return (
    <div class={styles.container}>
      <article>
        <header>
          <Link href="/" aria-label="Go to the home page">
            SeriesVault
          </Link>
        </header>
        <fieldset>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="Email"
              autocomplete="email"
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="Password"
              aria-label="Password"
              autocomplete="current-password"
            />
          </label>
          <input type="submit" value="Log in" />
        </fieldset>
      </article>
    </div>
  );
});
