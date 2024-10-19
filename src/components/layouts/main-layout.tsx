import { useState } from "react";
import { Icons } from "../ui/icons";
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
      <aside
        className={`${
          isOpen ? "w-[300px]" : "w-[88px]"
        } bg-grey-900 px-10 py-[40px] h-screen flex flex-col rounded-r-2xl  transition-all duration-300 ease-in-out text-grey-300 text-preset-3`}
      >
        {isOpen ? (
          <img src="/images/logo-large.svg" className="w-[122px]" alt="" />
        ) : (
          <img src="/images/logo-small.svg" className="" alt="" />
        )}

        <nav className="mt-10 -mx-10">
          <ul className="mt-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <NavLink to={item.href}>
                  {({ isActive }) => (
                    <div
                      className={`flex flex-row items-center gap-4 mt-2 h-[56px] pl-6 ${
                        isActive
                          ? "text-green bg-beige-100 rounded-r-xl mr-6 border-l-4 border-green"
                          : "hover:text-grey-100"
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

        <footer className="mb-6 mt-auto">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
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
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
