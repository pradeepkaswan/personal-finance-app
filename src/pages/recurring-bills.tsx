import PageTitle from "../components/page-title";
import { Icons } from "../components/ui/icons";
import { Input } from "../components/ui/input";

export default function RecurringBills() {
  return (
    <>
      <PageTitle title="Frontend Mentor | Personal finance app - Recurring Bills" />
      <h1 className="text-preset-1 text-grey-900 py-2">Recurring Bills</h1>
      <div className="mt-8">
        <div className="flex flex-col gap-6 xl:flex-row">
          <div className="flex flex-col md:flex-row gap-3 md:gap-6 xl:flex-col w-full">
            <div className="w-full flex md:flex-col items-center md:items-start md:justify-center gap-5 md:gap-8 py-6 px-5 text-preset-5 text-white bg-grey-900 rounded-xl">
              <Icons.recurringBills className="size-10" />
              <div className="flex flex-col gap-3">
                <span className="text-preset-4">Total bills</span>
                <span className="text-preset-1">$384.98</span>
              </div>
            </div>
            <div className="w-full p-5 bg-white rounded-xl">
              <h2 className="text-preset-2 mb-5">Summary</h2>
              <div className="divide-y divide-grey-500/15">
                <div className="text-preset-5 pb-4 flex justify-between items-center">
                  <span>Paid Bills</span>
                  <span className="font-bold">2 ($320.00)</span>
                </div>
                <div className="text-preset-5 py-4 flex justify-between items-center">
                  <span>Total Upcoming</span>
                  <span className="font-bold">6 ($1,230.00)</span>
                </div>
                <div className="text-preset-5 text-red pt-4 flex justify-between items-center">
                  <span>Due Soon</span>
                  <span className="font-bold">2 ($40.00)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white py-6 px-5 md:p-8 w-full rounded-xl">
            <div className="flex flex-row items-center justify-center md:justify-between gap-6 mb-6">
              <Input placeholder="Search bills" />
              <Icons.sort className="md:hidden size-5" />
              <div className="hidden md:flex items-center gap-2">
                <span className="text-preset-4 text-grey-500 whitespace-nowrap">
                  Sort by
                </span>
                <Input />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
