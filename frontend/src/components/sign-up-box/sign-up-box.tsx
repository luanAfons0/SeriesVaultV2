import { component$ } from "@builder.io/qwik";
import styles from "./styles.module.scss";
import { Link } from "@builder.io/qwik-city";

export const SignUpBox = component$(() => {
  return (
    <div class={styles.container}>
      <article>
        <header>
          <Link href="/" aria-label="Go to the home page">
            SeriesVault
          </Link>
        </header>
        <fieldset>
          <div class="grid">
            <label>
              First name
              <input
                name="first_name"
                placeholder="First name"
                autocomplete="given-name"
              />
            </label>
            <label>
              Last name
              <input
                name="last_name"
                placeholder="Last name"
                autocomplete="given-name"
              />
            </label>
          </div>
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
          <label>
            <input name="terms" type="checkbox" role="switch" />I agree to the
            Terms
          </label>
          <label>
            <input name="opt-in" type="checkbox" role="switch" checked />
            Receive news and offers
          </label>
        </fieldset>
        <input type="submit" value="Log in" />
      </article>
    </div>
  );
});
