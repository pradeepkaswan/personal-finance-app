import Link from "next/link";

import { SignupForm } from "@/components/signup-form";

export default function Signup() {
  return (
    <>
      <h1 className="text-preset-1">Sign Up</h1>
      <SignupForm />
      <p className="text-preset-4 text-grey-500 text-center">
        Already have an account?
        <Link
          href="/login"
          className="text-preset-4-bold text-grey-900 underline underline-offset-4 ml-100"
        >
          Login
        </Link>
      </p>
    </>
  );
}
