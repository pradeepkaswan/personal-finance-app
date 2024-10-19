import { useState } from "react";
import { Icons } from "../ui/icons";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  {
    id: "overview",
    icon: <Icons.overview />,
    label: "Overview",
    href: "/overview",
  },
  {
    id: "transactions",
    icon: <Icons.transactions />,
    label: "Transactions",
    href: "/transactions",
  },
  {
    id: "budgets",
    icon: <Icons.budgets />,
    label: "Budgets",
    href: "/budgets",
  },
  {
    id: "pots",
    icon: <Icons.pots />,
    label: "Pots",
    href: "/pots",
  },
  {
    id: "recurring-bills",
    icon: <Icons.recurringBills />,
    label: "Recurring Bills",
    href: "/recurring-bills",
  },
];

export default function Layout() {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="h-screen flex">
      <aside
        className={`hidden xl:flex ${
          isOpen ? "w-[300px]" : "w-[88px]"
        } bg-grey-900 py-[40px] flex flex-col rounded-r-2xl transition-all duration-300 ease-in-out text-grey-300 text-preset-3`}
      >
        {isOpen ? (
          <img
            src="/images/logo-large.svg"
            className="w-fit pl-8"
            alt="Logo Large"
          />
        ) : (
          <img
            src="/images/logo-small.svg"
            className="w-fit pl-9"
            alt="Logo Small"
          />
        )}

        <nav className="mt-10 ">
          <ul className="mt-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <NavLink to={item.href}>
                  {({ isActive }) => (
                    <div
                      className={`flex flex-row items-center gap-4 mt-2 h-[56px] pl-6 ${
                        isActive
                          ? `text-green bg-beige-100 rounded-r-xl ${
                              isOpen ? "mr-6" : "mr-4"
                            } border-l-4 border-green`
                          : "hover:text-grey-100 pl-7"
                      }`}
                    >
                      {item.icon}
                      {isOpen && (
                        <span
                          className={`"hidden md:block text-preset-3" ${
                            isActive ? "text-grey-900" : "hover:text-grey-100"
                          }`}
                        >
                          {item.label}
                        </span>
                      )}
                    </div>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <footer className="mb-6 mt-auto pl-8">
          <button
            onClick={toggleSidebar}
            aria-label={isOpen ? "Expand Menu" : "Collapse Menu"}
          >
            {isOpen ? (
              <div className="flex gap-4 items-center">
                <Icons.arrow className="transition-transform duration-300 hover:text-grey-100 text-grey-300 " />
                <span className="text-grey-300 transition-colors duration-300 group-hover:text-grey-100">
                  Minimize Menu
                </span>
              </div>
            ) : (
              <Icons.arrow className="rotate-180 transition-transform duration-300 text-grey-300 group-hover:text-grey-100" />
            )}
          </button>
        </footer>
      </aside>
      <main className="flex-1 overflow-auto m-4 md:m-10">
        <h1 className="text-preset-1 text-grey-900 py-2">
          {location.pathname.slice(1).charAt(0).toUpperCase() +
            location.pathname.slice(2)}
        </h1>
        <Outlet />
      </main>

      <nav className="xl:hidden fixed bottom-0 left-0 right-0 bg-grey-900 text-grey-300 pt-2 px-4 rounded-t-xl">
        <ul className="flex flex-row">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-center w-full"
            >
              <NavLink to={item.href} className="w-full max-w-[104px]">
                {({ isActive }) => (
                  <div
                    className={`flex flex-col items-center gap-1 justify-center py-2 ${
                      isActive
                        ? "text-green bg-beige-100 rounded-t-lg border-b-4 border-green"
                        : "hover:text-grey-100"
                    }`}
                  >
                    {item.icon}
                    <span
                      className={`hidden md:block text-preset-5 font-bold ${
                        isActive ? "text-grey-900" : "hover:text-grey-100"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
