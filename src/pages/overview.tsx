import { useNavigate } from "react-router-dom";
import PageTitle from "../components/page-title";
import { Button } from "../components/ui/button";
import { useAuth } from "../context/auth-context";

const Card = ({
  title,
  amount,
  isBalance,
}: {
  title: string;
  amount: string;
  isBalance: boolean;
}) => (
  <div
    className={`flex flex-col gap-3 p-5 rounded-xl w-full ${
      isBalance ? "bg-grey-900" : "bg-white"
    }`}
  >
    <h2
      className={`text-preset-4 ${isBalance ? "text-white" : "text-grey-500"}`}
    >
      {title}
    </h2>
    <p
      className={`text-preset-1 ${isBalance ? "text-white" : "text-grey-900"}`}
    >
      ${amount}
    </p>
  </div>
);

export default function Overview() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/auth/login");
  };

  return (
    <>
      <PageTitle title="Frontend Mentor | Personal finance app - Overview" />
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-preset-1 text-grey-900 py-2">Overview</h1>
        <Button intent="danger" weight="bold" onClick={handleLogout}>
          Log Out
        </Button>
      </div>

      <div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-6">
          <Card title="Current Balance" amount="4,836.00" isBalance={true} />
          <Card title="Income" amount="3,814.25" isBalance={false} />
          <Card title="Expense" amount="1,700.50" isBalance={false} />
        </div>
      </div>
    </>
  );
}
