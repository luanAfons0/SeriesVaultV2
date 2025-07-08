import { $, component$, useOnDocument, useSignal } from "@builder.io/qwik";
import { TbMoon, TbMenu2, TbSunFilled } from "@qwikest/icons/tablericons";
import { Link } from "@builder.io/qwik-city";

export const Header = component$(() => {
  const $htmlElement = useSignal<HTMLElement | null>(null);
  const theme = useSignal<string>("dark");

  useOnDocument(
    "load",
    $(() => {
      const element = document.getElementsByTagName("html")[0];
      $htmlElement.value = element;
    }),
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
    <header class="navbar bg-base-300 shadow-sm">
      <div class="navbar-start">
        <div class="dropdown">
          <div
            tabIndex={0}
            role="button"
            class="btn btn-ghost btn-circle text-2xl"
            aria-label="Show dropdown button"
          >
            <TbMenu2 />
          </div>
          <ul
            tabIndex={0}
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/about-us/" aria-label="Go to the about us page">
                <button aria-label="Go to the about us page button">
                  About us
                </button>
              </Link>
            </li>
            <li>
              <Link href="/sign-up/" aria-label="Go to the sign up page">
                <button aria-label="Go to the sign up page button">
                  Sign up
                </button>
              </Link>
            </li>
            <li>
              <Link href="/login/" aria-label="Go to te login page">
                <button
                  aria-label="Go to the login page button"
                  class="secondary"
                >
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-center">
        <Link
          class="btn btn-ghost text-xl"
          href="/"
          aria-label="Go to the home page"
        >
          <h2>Series Vault</h2>
        </Link>
      </div>
      <div class="navbar-end px-2">
        <button
          class={`${getButtonColor()} text-2xl outline-0`}
          onClick$={() => handleSwitchTheme()}
          aria-label="changeTheme"
        >
          {theme.value == "dark" ? <TbMoon /> : <TbSunFilled />}
        </button>
      </div>
    </header>
  );
});
