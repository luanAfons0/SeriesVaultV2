import { component$ } from "@builder.io/qwik";
import styles from "./styles.module.scss";
import { Link } from "@builder.io/qwik-city";

export const Footer = component$(() => {
  return (
    <footer class={styles.container}>
      <hr />
      <div class={styles.flex}>
        <div>
          <h5>It&rsquo;s time to ditch the text file.</h5>
          <h6 class="contrast">
            Keep track of your anime easily by creating your own list.
          </h6>
        </div>
        <div class={styles.buttonRow}>
          <Link href="/login">
            <button class="secondary">Login</button>
          </Link>
          <Link href="/sign-up">
            <button>Sign up</button>
          </Link>
        </div>
      </div>
      <hr />
      <div class={styles.alignCenter}>
        <p>Follow me</p>
        <div class={styles.icons}>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/luan-henrique-afonso-881154280/"
          >
            <i class="fa fa-linkedin-square" />
          </Link>
          <Link target="_blank" href="https://github.com/luanAfons0">
            <i class="fa fa-github-square" />
          </Link>
        </div>
        <hr />
        <p>&copy;{new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </footer>
  );
});
