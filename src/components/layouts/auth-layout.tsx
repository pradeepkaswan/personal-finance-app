import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col xl:flex-row xl:p-5">
      <div className="flex xl:hidden py-6 rounded-b-lg bg-grey-900 items-center justify-center w-full">
        <img src="/images/logo-large.svg" alt="Logo" />
      </div>

      <div className="relative hidden flex-1 xl:flex xl:flex-col overflow-hidden w-full max-w-[560px] bg-grey-900 rounded-lg p-10">
        <img
          src="/images/logo-large.svg"
          alt="Logo"
          className="z-10 w-[122px]"
        />

        <div className="absolute inset-0 z-0 h-full w-full object-cover">
          <img
            src="/images/illustration-authentication.svg"
            alt="Authentication Illustration"
          />
        </div>

        <div className="z-10 mt-auto flex flex-col gap-6 text-white">
          <h2 className="text-preset-1 max-w-[20ch]">
            Keep track of your money and save for your future
          </h2>
          <p className="text-preset-4">
            Personal finance app puts you in control of your spending. Track
            transactions, set budgets, and add to savings pots easily.
          </p>
        </div>
      </div>
      <div className="flex-grow flex items-center justify-center px-4">
        <div className="w-full flex flex-col gap-6 bg-white max-w-[560px] py-6 px-5 rounded-xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
