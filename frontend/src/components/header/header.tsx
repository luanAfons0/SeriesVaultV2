import { $, component$, useOnDocument, useSignal } from "@builder.io/qwik";
import styles from "./styles.module.scss";
import { Link } from "@builder.io/qwik-city";
import { TbSun, TbMoon } from "@qwikest/icons/tablericons";

export const Header = component$(() => {
  const $htmlElement = useSignal<HTMLElement | null>(null);
  const theme = useSignal<string>("dark");

  useOnDocument(
    "load",
    $(() => {
      const element = document.getElementsByTagName("html")[0];
      $htmlElement.value = element;
    })
  );

  const handleSwitchTheme = $(() => {
    if ($htmlElement.value == null) return;

    const targetTheme =
      $htmlElement.value.getAttribute("data-theme") === "dark"
        ? "light"
        : "dark";

    theme.value = targetTheme;
    $htmlElement.value.setAttribute("data-theme", targetTheme);
  });

  const getButtonColor = () => {
    return theme.value == "dark" ? "outline" : "primary";
  };

  return (
    <header>
      <nav class={styles.container}>
        <ul>
          <li>
            <Link href="/" aria-label="Go to the home page">
              <h2>
                <strong>Series Vault</strong>
              </h2>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <button
              class={`${getButtonColor()} ${styles.themeButton}`}
              onClick$={() => handleSwitchTheme()}
              aria-label="changeTheme"
            >
              {theme.value == "dark" ? <TbSun /> : <TbMoon />}
            </button>
          </li>
          <li>
            <details class="dropdown">
              <summary>Account</summary>
              <ul dir="rtl">
                <li>
                  <Link href="/profile/" aria-label="Go to the profile page">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link href="/sign-up/" aria-label="Go to the sign up page">
                    Sign up
                  </Link>
                </li>
                <li>
                  <Link href="/login/" aria-label="Go to te login page">
                    Login
                  </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  );
});
