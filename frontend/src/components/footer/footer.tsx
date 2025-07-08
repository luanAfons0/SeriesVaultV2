import { TbBrandGithub, TbBrandLinkedin } from "@qwikest/icons/tablericons";
import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Footer = component$(() => {
  return (
    <footer class="footer sm:footer-horizontal bg-base-300 px-5 py-10">
      <aside>
        <p>
          Luan Henrique Afonso
          <br />
          Developer since 2023
        </p>
      </aside>
      <nav>
        <p class="footer-title">Social</p>
        <div class="grid grid-flow-col gap-4 text-2xl">
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
      </nav>
    </footer>
  );
});
