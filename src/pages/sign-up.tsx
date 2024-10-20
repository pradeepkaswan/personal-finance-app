import { Link, useNavigate } from "react-router-dom";

import { AuthForm } from "../components/sections/auth-form";
import PageTitle from "../components/page-title";
import { useAuth } from "../context/auth-context";

export default function SignUp() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = (formData: {
    name: string;
    email: string;
    password: string;
  }) => {
    signup(formData.name, formData.email, formData.password);
    navigate("/auth/login");
  };

  return (
    <>
      <PageTitle title="Frontend Mentor | Personal finance app - Sign Up" />
      <h1 className="text-preset-1 text-grey-900">Sign Up</h1>
      <AuthForm isLogin={false} onSubmit={handleSignUp} />
      <p className="text-preset-4 text-grey-500 text-center">
        Already have an account?
        <Link
          to="/auth/login"
          className="text-preset-4 font-bold text-grey-900 underline underline-offset-3 ml-2"
        >
          Login
        </Link>
      </p>
    </>
  );
}
