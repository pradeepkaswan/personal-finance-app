import PageTitle from "../components/page-title";
import { PotCard } from "../components/sections/pot-card";
import { Button } from "../components/ui/button";
import { Pot } from "../types";

const pots: Pot[] = [
  {
    id: "1",
    name: "Savings",
    target: 2000.0,
    total: 159.0,
    theme: "#277C78",
  },
  {
    id: "2",
    name: "Concert Ticket",
    target: 150.0,
    total: 110.0,
    theme: "#626070",
  },
  {
    id: "3",
    name: "Gift",
    target: 150.0,
    total: 110.0,
    theme: "#82C9D7",
  },
  {
    id: "4",
    name: "New Laptop",
    target: 1000.0,
    total: 10.0,
    theme: "#F2CDAC",
  },
  {
    id: "5",
    name: "Holiday",
    target: 1440.0,
    total: 531.0,
    theme: "#826CB0",
  },
];

export default function Pots() {
  return (
    <>
      <PageTitle title="Frontend Mentor | Personal finance app - Pots" />
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-preset-1 text-grey-900 py-2">Pots</h1>
        <Button weight="bold">+ Add New Pot</Button>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {pots.map((pot) => (
          <PotCard key={pot.id} {...pot} />
        ))}
      </div>
    </>
  );
}
