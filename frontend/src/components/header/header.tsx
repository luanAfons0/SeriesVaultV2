import { $, component$, useOnDocument, useSignal } from "@builder.io/qwik";
import { TbSun, TbMoon, TbMenu2 } from "@qwikest/icons/tablericons";
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
    <header>
      <Link href="/" aria-label="Go to the home page">
        <h2>SeriesVault</h2>
      </Link>
      <details class="dropdown">
        <summary>
          <TbMenu2 />
        </summary>
        <ul dir="rtl">
          <li>
            <Link href="/login/" aria-label="Go to te login page">
              <button class="secondary">Login</button>
            </Link>
          </li>
          <li>
            <Link href="/sign-up/" aria-label="Go to the sign up page">
              <button>Sign up</button>
            </Link>
          </li>
          <li>
            <button
              class={`${getButtonColor()}`}
              onClick$={() => handleSwitchTheme()}
              aria-label="changeTheme"
            >
              {theme.value == "dark" ? <TbSun /> : <TbMoon />}
            </button>
          </li>
        </ul>
      </details>
    </header>
  );
});
