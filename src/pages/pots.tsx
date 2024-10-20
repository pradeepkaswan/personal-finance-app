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
  //const [pots, setPots] = useState(mockPots);
  // const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  // const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  // const [editingPot, setEditingPot] = useState<Pot | null>(null);

  // const handleAddPot = (newPot: Partial<Pot>) => {
  //   setPots([
  //     ...pots,
  //     { ...newPot, id: Date.now().toString(), total: 0 } as Pot,
  //   ]);
  //   setIsAddModalOpen(false);
  // };

  // const handleEditPot = (updatedPot: Partial<Pot>) => {
  //   setPots(
  //     pots.map((pot) =>
  //       pot.id === updatedPot.id ? { ...pot, ...updatedPot } : pot
  //     )
  //   );
  //   setIsEditModalOpen(false);
  //   setEditingPot(null);
  // };

  // const handleDeletePot = (id: string) => {
  //   setPots(pots.filter((pot) => pot.id !== id));
  // };

  return (
    <>
      <PageTitle title="Frontend Mentor | Personal finance app - Pots" />
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-preset-1 text-grey-900 py-2">Pots</h1>
        <Button
          weight="bold"
          // onClick={() => setIsAddModalOpen(true)}
        >
          + Add New Pot
        </Button>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {pots.map((pot) => (
          <PotCard
            key={pot.id}
            // onEdit={() => {
            //   setEditingPot(pot);
            //   setIsEditModalOpen(true);
            // }}
            // onDelete={() => handleDeletePot(pot.id)}
            {...pot}
          />
        ))}
      </div>

      {/* <dialog open={isAddModalOpen}>
        <form onSubmit={handleAddPot}></form>
      </dialog>

      <dialog open={isEditModalOpen}>
        {editingPot && (
          <form onSubmit={handleEditPot} initialValue={editingPot}></form>
        )}
      </dialog> */}
    </>
  );
}
