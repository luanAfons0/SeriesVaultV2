import { $, component$, useOnDocument, useSignal } from "@builder.io/qwik";
import styles from "./styles.module.scss";
import { Link } from "@builder.io/qwik-city";

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
        <button
          class={`${getButtonColor()} ${styles.themeButton}`}
          onClick$={() => handleSwitchTheme()}
        >
          {theme.value == "dark" ? (
            <i class="ti ti-sun" />
          ) : (
            <i class="ti ti-moon" />
          )}
        </button>
      </div>
    </header>
  );
});
