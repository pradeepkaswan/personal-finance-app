import { Icons } from "../components/ui/icons";

export default function RecurringBills() {
  return (
    <>
      <h1 className="text-preset-1 text-grey-900 py-2">Recurring Bills</h1>
      <div className="mt-8">
        <div className="flex text-preset-5 text-white bg-grey-900 rounded-lg">
          <Icons.recurringBills className="fill-transparent" />
          <div className="flex flex-col">
            <span>Total bills</span>
            <span>$384.98</span>
          </div>
        </div>
      </div>
    </>
  );
}
