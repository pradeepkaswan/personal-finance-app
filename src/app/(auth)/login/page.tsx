import Link from "next/link";

export default function Login() {
  return (
    <>
      <h1 className="text-preset-1">Login</h1>
      <form>
        <div className="flex flex-col gap-200 mb-400">
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
          </div>
          <div className="flex flex-col gap-50">
            <label
              htmlFor="password"
              className="text-preset-5-bold text-grey-500"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full rounded-lg border py-100 px-250 border-beige-500"
            />
          </div>
        </div>
        <button className="w-full p-200 text-preset-4-bold rounded-lg text-white bg-grey-900 hover:bg-grey-500">
          Login
        </button>
      </form>
      <p className="text-preset-4 text-grey-500 text-center">
        Need to create an account?
        <Link
          href="/sign-up"
          className="text-preset-4-bold text-grey-900 underline underline-offset-4 ml-100"
        >
          Sign Up
        </Link>
      </p>
    </>
  );
}
