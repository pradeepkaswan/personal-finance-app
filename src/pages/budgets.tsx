import { Button } from "../components/ui/button";

export default function Budgets() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-preset-1 text-grey-900 py-2">Budgets</h1>
        <Button weight="bold">+ Add New Budget</Button>
      </div>
      <div className="mt-8 bg-white p-4">
        <h2 className="text-preset-2">Spending Summary</h2>
      </div>
    </>
  );
}
