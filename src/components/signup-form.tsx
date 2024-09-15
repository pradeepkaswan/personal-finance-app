"use client";

import { useFormState, useFormStatus } from "react-dom";

import { signup } from "@/app/(auth)/actions";

export function SignupForm() {
  const [state, action] = useFormState(signup, undefined);

  return (
    <form action={action}>
      <div className="flex flex-col gap-200 mb-400">
        <div className="flex flex-col gap-50 ">
          <label htmlFor="name" className="text-preset-5-bold text-grey-500">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full rounded-lg border py-100 px-250 border-beige-500"
          />
          {state?.errors?.name && (
            <p className="text-preset-5 text-grey-500 text-end">
              {state.errors.name}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-50">
          <label htmlFor="email" className="text-preset-5-bold text-grey-500">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full rounded-lg border py-100 px-250 border-beige-500"
          />
          {state?.errors?.email && (
            <p className="text-preset-5 text-grey-500 text-end">
              {state.errors.email}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-50">
          <label
            htmlFor="password"
            className="text-preset-5-bold text-grey-500"
          >
            Create Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full rounded-lg border py-100 px-250 border-beige-500"
          />
          {state?.errors?.password && (
            <p className="text-preset-5 text-grey-500 text-end">
              {state.errors.password}
            </p>
          )}
        </div>
      </div>
      <CreateAccountButton />
    </form>
  );
}

function CreateAccountButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="w-full p-200 text-preset-4-bold rounded-lg text-white bg-grey-900 hover:bg-grey-500"
    >
      Create Account
    </button>
  );
}
