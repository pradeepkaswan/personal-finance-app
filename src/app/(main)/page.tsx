export default function Overview() {
  return (
    <div className="flex flex-col px-200 py-[40px] md:p-[40px]">
      <div className="h-[56px] mb-400">
        <h1 className="text-preset-1 text-grey-900">Overview</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-300 w-full">
        <div className="flex flex-col gap-150 w-full p-300 bg-grey-900 rounded-xl">
          <span className="text-preset-4 text-white">Current Balance</span>
          <span className="text-preset-1 text-white">$4,836.00</span>
        </div>
        <div className="flex flex-col gap-150 w-full p-300 bg-white rounded-xl">
          <span className="text-preset-4 text-grey-500">Income</span>
          <span className="text-preset-1 text-grey-900">$4,836.00</span>
        </div>
        <div className="flex flex-col gap-150 w-full p-300 bg-white rounded-xl">
          <span className="text-preset-4 text-grey-500">Expenses</span>
          <span className="text-preset-1 text-grey-900">$4,836.00</span>
        </div>
      </div>
    </div>
  );
}
