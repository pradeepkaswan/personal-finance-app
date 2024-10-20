import { useState } from "react";
import { Icons } from "../ui/icons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface AuthFormProps {
  isLogin: boolean;
  onSubmit: (data: { name: string; email: string; password: string }) => void;
}

export const AuthForm: React.FC<AuthFormProps> = ({ isLogin, onSubmit }) => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  // const [errors, setErrors] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));

    // if (name === "password") {
    //   validatePassword(value);
    // }
  };

  // const validatePassword = (password: string) => {
  //   setErrors((prev) => ({
  //     ...prev,
  //     password:
  //       password.length < 8 ? "Password must be at least 8 characters" : "",
  //   }));
  // };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formdata);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4 mb-10">
        {!isLogin && (
          <div className="flex w-full flex-col">
            <label
              htmlFor="name"
              className="block text-preset-5 font-bold text-grey-500 mb-1"
            >
              Name
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formdata.name}
              onChange={handleChange}
            />
          </div>
        )}
        <div className="flex w-full flex-col">
          <label
            htmlFor="email"
            className="block text-preset-5 font-bold text-grey-500 mb-1"
          >
            Email
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formdata.email}
            onChange={handleChange}
            autoComplete="email"
          />
        </div>
        <div className="flex w-full flex-col">
          <label
            htmlFor="password"
            className="block text-preset-5 font-bold text-grey-500 mb-1"
          >
            {isLogin ? "Password" : "Create Password"}
          </label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formdata.password}
              onChange={handleChange}
              autoComplete="new-password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-5"
            >
              {showPassword ? <Icons.show /> : <Icons.hide />}
            </button>
          </div>
          {/* {errors?.password && (
            <p className="mt-1 text-end text-preset-5 text-grey-500">
              {errors.password}
            </p>
          )} */}
        </div>
      </div>
      <Button type="submit" weight="bold" fullWidth>
        {isLogin ? "Login" : "Create Account"}
      </Button>
    </form>
  );
};
