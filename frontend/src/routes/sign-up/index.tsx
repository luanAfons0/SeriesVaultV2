/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-wrapper-object-types */
import { $, component$, type QRL } from "@builder.io/qwik";
import {
  DocumentHead,
  Link,
  routeLoader$,
  useNavigate,
} from "@builder.io/qwik-city";
import type { InitialValues, SubmitHandler } from "@modular-forms/qwik";
import { formAction$, useForm, valiForm$ } from "@modular-forms/qwik";
import styles from "./styles.module.scss";
import * as v from "valibot";
import { toast } from "qwik-sonner";

const SignUpSchema = v.object({
  firstName: v.pipe(v.string(), v.nonEmpty("Please enter you first name.")),
  lastName: v.pipe(v.string(), v.nonEmpty("Please enter your last name.")),
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

type SignUpForm = v.InferInput<typeof SignUpSchema>;

export const useFormLoader = routeLoader$<InitialValues<SignUpForm>>(() => ({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
}));

export const useFormAction = formAction$<SignUpForm>(
  () => {},
  valiForm$(SignUpSchema)
);

export default component$(() => {
  const [_, { Form, Field }] = useForm<SignUpForm>({
    loader: useFormLoader(),
    action: useFormAction(),
    validate: valiForm$(SignUpSchema),
  });
  const navigate = useNavigate();

  const createAccount = $(async (values: SignUpForm) => {
    const response = await fetch(`${import.meta.env.PUBLIC_API_URL}/account`, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (response.status >= 200 && response.status < 400) {
      toast.success("Account created!");
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    }
  });

  const handleSubmit: QRL<SubmitHandler<SignUpForm>> = $(async (values) => {
    const response = await fetch(
      `${import.meta.env.PUBLIC_API_URL}/validate/email`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
        }),
      }
    );

    const data = await response.json();

    if (data.isValid == false) {
      toast.error("The email is already in use");
      return;
    }

    createAccount(values);
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
            <div class="grid">
              <Field name="firstName">
                {(field, props) => (
                  <label>
                    First name
                    <input
                      {...props}
                      placeholder="First name"
                      autocomplete="given-name"
                      aria-describedby="invalid-first-name"
                      aria-invalid={
                        field.touched
                          ? field.error || (field.value ?? "").length <= 0
                            ? "true"
                            : "false"
                          : "spelling"
                      }
                    />
                    {field.error && (
                      <small id="invalid-first-name">{field.error}</small>
                    )}
                  </label>
                )}
              </Field>
              <Field name="lastName">
                {(field, props) => (
                  <label>
                    Last name
                    <input
                      {...props}
                      placeholder="Last name"
                      autocomplete="given-name"
                      aria-describedby="invalid-second-name"
                      aria-invalid={
                        field.touched
                          ? field.error || (field.value as String).length <= 0
                            ? "true"
                            : "false"
                          : "spelling"
                      }
                    />
                    {field.error && (
                      <small id="invalid-second-name">{field.error}</small>
                    )}
                  </label>
                )}
              </Field>
            </div>
            <Field name="email">
              {(field, props) => (
                <label>
                  Email
                  <input
                    {...props}
                    type="email"
                    placeholder="Email"
                    autocomplete="email"
                    aria-describedby="invalid-second-name"
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
                    placeholder="Password"
                    aria-label="Password"
                    autocomplete="current-password"
                    aria-describedby="invalid-password"
                    aria-invalid={
                      field.touched
                        ? field.error || (field.value as String).length <= 0
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
            <label>
              <input name="opt-in" type="checkbox" role="switch" checked />
              Receive news and offers
            </label>
          </fieldset>
          <input type="submit" value="Sign up" />
        </Form>
      </article>
    </div>
  );
});

export const head: DocumentHead = {
  title: "SeriesVault | Sign up",
  meta: [
    {
      name: "description",
      content: "Create your account!",
    },
  ],
};
