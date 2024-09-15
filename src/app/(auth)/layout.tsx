import { LogoLargeIcon } from "@/components/icons";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="flex flex-col items-center lg:items-start lg:w-[560px] justify-between py-300 px-450 lg:p-450 lg:m-250 bg-grey-900 rounded-b-lg lg:rounded-lg">
        <LogoLargeIcon />

        <div className="hidden lg:flex flex-col gap-300 w-full">
          <h2 className="text-preset-1 text-white">
            Keep track of your money and save for your future
          </h2>
          <p className="text-preset-4 text-white">
            Personal finance app puts you in control of your spending. Track
            transactions, set budgets, and add to savings pots easily.
          </p>
        </div>
      </div>
      <div className="flex px-200 mx-auto my-auto">
        <div className="flex flex-col gap-400 bg-white w-[560px]  py-300 px-250 mx-200 rounded-xl">
          {children}
        </div>
      </div>
    </div>
  );
}
