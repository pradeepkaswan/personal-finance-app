import { Link, useNavigate } from "react-router-dom";

import { AuthForm } from "../components/sections/auth-form";
import PageTitle from "../components/page-title";
import { useAuth } from "../context/auth-context";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (formData: { email: string; password: string }) => {
    login(formData.email, formData.password);
    navigate("/");
  };

  return (
    <>
      <PageTitle title="Frontend Mentor | Personal finance app - Login" />
      <h1 className="text-preset-1 text-grey-900">Login</h1>
      <AuthForm isLogin={true} onSubmit={handleLogin} />
      <p className="text-preset-4 text-grey-500 text-center">
        Need to create an account?
        <Link
          to="/auth/sign-up"
          className="text-preset-4 font-bold text-grey-900 underline underline-offset-3 ml-2"
        >
          Sign Up
        </Link>
      </p>
    </>
  );
}
