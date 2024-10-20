import { Pot } from "../../types";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";

export const PotCard: React.FC<Pot> = ({ name, target, total, theme }) => {
  const percent = Math.min((total / target) * 100, 100);

  return (
    <div className="bg-white py-6 px-5 md:p-6 flex flex-col gap-8 rounded-xl">
      <div className="flex justify-between items-center">
        <div className="flex flex-row items-center gap-4">
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: theme }}
          />
          <h3 className="text-preset-2">{name}</h3>
        </div>
        <Icons.ellipses className="size-4" />
      </div>
      <div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-preset-4 text-grey-500">Total Saved</span>
          <span className="text-preset-1">${total.toFixed(2)}</span>
        </div>
        <div className="w-full bg-beige-100 rounded-full h-2.5">
          <div
            className="h-2.5  rounded-full"
            style={{ backgroundColor: theme, width: `${percent}%` }}
          ></div>
          <div className="flex flex-row justify-between items-center mt-3">
            <span className="text-preset-5 text-grey-500 font-bold">
              {percent.toFixed(1)}%
            </span>
            <span className="text-preset-4 text-grey-500">
              Target of ${target.toFixed(0)}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4 mt-8">
        <Button intent="secondary" weight="bold" fullWidth>
          + Add Money
        </Button>
        <Button intent="secondary" weight="bold" fullWidth>
          Withdraw
        </Button>
      </div>
    </div>
  );
};
