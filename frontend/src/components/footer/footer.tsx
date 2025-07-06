import { TbBrandGithub, TbBrandLinkedin } from "@qwikest/icons/tablericons";
import { component$ } from "@builder.io/qwik";
import styles from "./styles.module.scss";
import { Link } from "@builder.io/qwik-city";

export const Footer = component$(() => {
  return (
    <footer class={styles.container}>
      <hr />
      <div class={styles.flex}>
        <div>
          <p class={styles.text}>It&rsquo;s time to ditch the text file.</p>
          <small class="contrast">
            Keep track of your serie easily by creating your own list.
          </small>
        </div>
        <div class={styles.buttonRow}>
          <Link href="/login/">
            <button class="secondary">Login</button>
          </Link>
          <Link href="/sign-up/">
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
            href="https://www.linkedin.com/in/luan-henrique-afonso-881154280"
            aria-label="Check out my Linkedin"
          >
            <TbBrandLinkedin />
          </Link>
          <Link
            target="_blank"
            href="https://github.com/luanAfons0"
            aria-label="Check out my GitHub"
          >
            <TbBrandGithub />
          </Link>
        </div>
        <hr />
        <p>&copy;{new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </footer>
  );
});
