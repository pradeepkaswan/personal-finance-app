import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="flex-grow flex items-center justify-center px-4">
      <div className="w-full flex flex-col gap-6 bg-white max-w-[560px] py-6 px-5 rounded-xl">
        <h1 className="text-preset-1 text-grey-900">Sign Up</h1>
        <form>
          <div className="flex flex-col gap-4 mb-10">
            <div
              className="flex flex-col gap-1
"
            >
              <label
                htmlFor="name"
                className="text-preset-5 font-bold text-grey-500"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded-lg border py-2 px-5 border-beige-500"
              />
            </div>
            <div
              className="flex flex-col gap-1
"
            >
              <label
                htmlFor="email"
                className="text-preset-5 font-bold text-grey-500"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded-lg border py-2 px-5 border-beige-500"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="password"
                className="text-preset-5 font-bold text-grey-500"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full rounded-lg border py-2 px-5 border-beige-500"
              />
            </div>
          </div>
          <button className="w-full p-4 text-preset-4-bold rounded-lg text-white bg-grey-900 hover:bg-grey-500">
            Create Account
          </button>
        </form>
        <p className="text-preset-4 text-grey-500 text-center">
          Already have an account?
          <Link
            to="/login"
            className="text-preset-4 font-bold text-grey-900 underline underline-offset-3 ml-2"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
