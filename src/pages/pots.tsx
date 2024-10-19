import { Button } from "../components/ui/button";

export default function Pots() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-preset-1 text-grey-900 py-2">Pots</h1>
        <Button weight="bold">+ Add New Pot</Button>
      </div>
      <div className="mt-8 bg-white p-4">
        <h2 className="text-preset-2">Savings</h2>
      </div>
    </>
  );
}
