import { Link } from "react-router-dom";

import { AuthForm } from "../components/sections/auth-form";
import PageTitle from "../components/page-title";

export default function SignUp() {
  const handleSignUp = (formData: {
    name: string;
    email: string;
    password: string;
  }) => {
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <PageTitle title="Frontend Mentor | Personal finance app - Sign Up" />
      <h1 className="text-preset-1 text-grey-900">Sign Up</h1>
      <AuthForm isLogin={false} onSubmit={handleSignUp} />
      <p className="text-preset-4 text-grey-500 text-center">
        Already have an account?
        <Link
          to="/login"
          className="text-preset-4 font-bold text-grey-900 underline underline-offset-3 ml-2"
        >
          Login
        </Link>
      </p>
    </>
  );
}
