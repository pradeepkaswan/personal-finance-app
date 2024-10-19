import { useState } from "react";
import { Icons } from "../icons";
import { NavLink, Outlet } from "react-router-dom";

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

  // const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="h-screen flex">
      <aside className="xl:w-[300px] bg-grey-900 px-4 md:px-10 md:py-[40px] md:h-screen md:flex md:flex-col md:rounded-r-2xl rounded-t-xl xl:rounded-t-none xl:rounded-r-2xl transition-all duration-300 ease-in-out text-grey-300 text-preset-3">
        <div className="p-4">
          <img src="/images/logo-large.svg" alt="" />
        </div>
        <nav>
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <NavLink to={item.href}>
                  {({ isActive }) => (
                    <span
                      className={`flex flex-row items-center xl:gap-4 mt-2 pt-2 xl:h-[56px] ${
                        isActive
                          ? "text-green bg-beige-100 rounded-t-xl xl:rounded-t-none xl:rounded-r-xl"
                          : "hover:text-grey-100"
                      }`}
                    >
                      {item.icon}
                      <span
                        className={`"hidden md:block text-preset-3" ${
                          isActive ? "text-grey-900" : "hover:text-grey-100"
                        }`}
                      >
                        {item.label}
                      </span>
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <footer className="hidden md:mb-6 md:pl-8">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Expand Menu" : "Collapse Menu"}
          >
            {isOpen ? (
              <Icons.arrow className="transition-transform duration-300 hover:text-grey-100 text-grey-300 " />
            ) : (
              <div className="flex gap-4 items-center">
                <Icons.arrow className="rotate-180 transition-transform duration-300 text-grey-300 group-hover:text-grey-100" />
                <span className="text-grey-300 transition-colors duration-300 group-hover:text-grey-100">
                  Minimize Menu
                </span>
              </div>
            )}
          </button>
        </footer>
      </aside>
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
