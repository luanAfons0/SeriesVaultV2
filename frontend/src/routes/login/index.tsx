/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-wrapper-object-types */
import { $, component$, QRL } from "@builder.io/qwik";
import {
  DocumentHead,
  Link,
  routeLoader$,
  useNavigate,
} from "@builder.io/qwik-city";
import styles from "./styles.module.scss";
import * as v from "valibot";
import {
  formAction$,
  InitialValues,
  SubmitHandler,
  useForm,
  valiForm$,
} from "@modular-forms/qwik";
import { toast } from "qwik-sonner";

const LogInSchema = v.object({
  email: v.pipe(
    v.string(),
    v.nonEmpty("Please enter your email."),
    v.email("The email address is badly formatted.")
  ),
  password: v.pipe(
    v.string(),
    v.nonEmpty("Please enter your password."),
    v.minLength(8, "Your password must have 8 characters or more.")
  ),
});

type LogInForm = v.InferInput<typeof LogInSchema>;

export const useFormLoader = routeLoader$<InitialValues<LogInForm>>(() => ({
  email: "",
  password: "",
}));

export const useFormAction = formAction$<LogInForm>(
  (_) => {},
  valiForm$(LogInSchema)
);

export default component$(() => {
  const [_, { Form, Field }] = useForm<LogInForm>({
    loader: useFormLoader(),
    action: useFormAction(),
    validate: valiForm$(LogInSchema),
  });

  const navigate = useNavigate();

  const handleSubmit: QRL<SubmitHandler<LogInForm>> = $(async (values) => {
    const response = await fetch(`${import.meta.env.PUBLIC_API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (response.status >= 400) {
      toast.error("An error occurred, please verify the values and try again.");
      return;
    }

    toast.success("Login successfully!");
    setTimeout(() => {
      navigate("/");
    }, 1500);
  });

  return (
    <div class={styles.container}>
      <article>
        <Form onSubmit$={handleSubmit}>
          <header>
            <Link href="/" aria-label="Go to the home page">
              SeriesVault
            </Link>
            <hr />
          </header>
          <fieldset>
            <Field name="email">
              {(field, props) => (
                <label>
                  Email
                  <input
                    {...props}
                    type="email"
                    name="email"
                    placeholder="Email"
                    autocomplete="email"
                    aria-describedby="invalid-email"
                    aria-invalid={
                      field.touched
                        ? field.error || (field.value as String).length <= 0
                          ? "true"
                          : "false"
                        : "spelling"
                    }
                  />
                  {field.error && (
                    <small id="invalid-email">{field.error}</small>
                  )}
                </label>
              )}
            </Field>
            <Field name="password">
              {(field, props) => (
                <label>
                  Password
                  <input
                    {...props}
                    type="password"
                    name="password"
                    placeholder="Password"
                    aria-label="Password"
                    autocomplete="current-password"
                    aria-describedby="invalid-password"
                    aria-invalid={
                      field.touched
                        ? field.error || (field.value ?? "").length <= 0
                          ? "true"
                          : "false"
                        : "spelling"
                    }
                  />
                  {field.error && (
                    <small id="invalid-password">{field.error}</small>
                  )}
                </label>
              )}
            </Field>
            <input type="submit" value="Log in" />
          </fieldset>
        </Form>
      </article>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Series Vault | Login",
  meta: [
    {
      name: "description",
      content: "Login into your account!",
    },
  ],
};
