import { Icons } from "../components/ui/icons";
import { Input } from "../components/ui/input";

export default function Transactions() {
  return (
    <>
      <h1 className="text-preset-1 text-grey-900 py-2">Transactions</h1>
      <div className="mt-8">
        <div className="bg-white py-6 px-5 md:p-8 rounded-xl">
          <div className="flex flex-row items-center justify-center gap-6 xl:justify-between">
            <Input placeholder="Search transaction" />
            <div className="flex flex-row gap-6">
              <Icons.sort className="md:hidden" />
              <Icons.filter className="md:hidden" />
              <div className="hidden md:flex items-center gap-2">
                <span className="text-preset-4 text-grey-500 whitespace-nowrap">
                  Sort by
                </span>
                <Input />
              </div>
              <div className="hidden md:flex items-center gap-2">
                <span className="text-preset-4 text-grey-500">Category</span>
                <Input />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
