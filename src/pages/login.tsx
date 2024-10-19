import { Link } from "react-router-dom";

import { AuthForm } from "../components/sections/auth-form";

export default function Login() {
  const handleLogin = (formData: { email: string; password: string }) => {
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <h1 className="text-preset-1 text-grey-900">Login</h1>
      <AuthForm isLogin={true} onSubmit={handleLogin} />
      <p className="text-preset-4 text-grey-500 text-center">
        Need to create an account?
        <Link
          to="/sign-up"
          className="text-preset-4 font-bold text-grey-900 underline underline-offset-3 ml-2"
        >
          Sign Up
        </Link>
      </p>
    </>
  );
}
