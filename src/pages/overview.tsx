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
  return (
    <>
      <h1 className="text-preset-1 text-grey-900 py-2">Overview</h1>
      <div className="mt-8">
        <div className="flex flex-col md:flex-row gap-3 md:gap-6">
          <Card title="Current Balance" amount="4,836.00" isBalance={true} />
          <Card title="Income" amount="3,814.25" isBalance={false} />
          <Card title="Expense" amount="1,700.50" isBalance={false} />
        </div>
      </div>
    </>
  );
}
