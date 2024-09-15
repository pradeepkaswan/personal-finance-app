"use client";

import { memo, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

import {
  OverviewIcon,
  TransactionsIcon,
  BudgetsIcon,
  PotsIcon,
  RecurringBillsIcon,
  ArrowIcon,
  ArrowDirection,
  LogoSmallIcon,
  LogoLargeIcon,
} from "@/components/icons";

interface NavItemProps {
  icon: React.ReactNode;
  href: string;
  label: string;
  isSidebarCollapsed?: boolean;
  isMobile?: boolean;
  isTablet?: boolean;
}

const NavItem: React.FC<NavItemProps> = memo(
  ({ icon, href, label, isSidebarCollapsed, isMobile, isTablet }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    const linkClasses = classNames(
      "flex items-center gap-50 lg:gap-200 text-grey-300 transition-colors duration-300",
      {
        "flex-col rounded-t-xl mt-100 pt-100 pb-150 px-300":
          isMobile || isTablet,
        "h-[56px] rounded-r-xl pl-300": !isMobile && !isTablet,
        "bg-beige-100 text-grey-900 border-l-4 border-green":
          isActive && !isMobile && !isTablet,
        "bg-beige-100  border-b-4 border-green":
          isActive && (isMobile || isTablet),
        "hover:text-grey-100": !isActive,
        "pl-300": !isSidebarCollapsed && !isMobile,
      }
    );

    const iconClasses = classNames({
      "text-green": isActive,
      "transition-colors duration-300 group-hover:text-grey-100": !isActive,
    });

    const labelClasses = classNames({
      "hidden md:block": isMobile || isTablet,
      "transition-colors duration-300 group-hover:text-grey-100": !isActive,
    });

    return (
      <li>
        <Link href={href} className={linkClasses} aria-label={label}>
          <div className={iconClasses}>{icon}</div>
          {!isSidebarCollapsed && <span className={labelClasses}>{label}</span>}
        </Link>
      </li>
    );
  }
);

NavItem.displayName = "NavItem";

const NAV_ITEMS = [
  {
    id: "overview",
    icon: <OverviewIcon />,
    label: "Overview",
    href: "/",
  },
  {
    id: "transactions",
    icon: <TransactionsIcon />,
    label: "Transactions",
    href: "/transactions",
  },
  {
    id: "budgets",
    icon: <BudgetsIcon />,
    label: "Budgets",
    href: "/budgets",
  },
  {
    id: "pots",
    icon: <PotsIcon />,
    label: "Pots",
    href: "/pots",
  },
  {
    id: "recurring-bills",
    icon: <RecurringBillsIcon />,
    label: "Recurring Bills",
    href: "/recurring-bills",
  },
];

const AdaptiveNavigation: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsSidebarCollapsed((prev) => !prev);

  const navigationClasses = classNames(
    "w-full bg-grey-900 transition-all duration-300 ease-in-out text-grey-300 text-preset-3",
    {
      "px-200 md:px-450 rounded-t-xl": isMobile || isTablet,
      "py-[40px] h-screen flex flex-col rounded-r-2xl": !isMobile && !isTablet,
      "lg:w-[88px]": isSidebarCollapsed && !isMobile,
      "lg:w-[300px]": !isSidebarCollapsed && !isMobile,
    }
  );

  return (
    <aside className={navigationClasses}>
      {!isMobile && !isTablet && (
        <header className="mb-300 pl-400">
          {isSidebarCollapsed ? <LogoSmallIcon /> : <LogoLargeIcon />}
        </header>
      )}
      <nav
        className={`lg:mb-auto lg:mt-500 lg:pr-100 ${
          isSidebarCollapsed ? "lg:pr-100" : "lg:pr-300"
        }`}
      >
        <ul
          className={`${
            isMobile || isTablet
              ? "flex flex-row w-full justify-between"
              : "space-y-100"
          }`}
        >
          {NAV_ITEMS.map((item) => (
            <NavItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              href={item.href}
              isSidebarCollapsed={isSidebarCollapsed}
              isMobile={isMobile}
              isTablet={isTablet}
            />
          ))}
        </ul>
      </nav>
      {!isMobile && !isTablet && (
        <footer className="mb-300 pl-400">
          <button
            onClick={toggleSidebar}
            aria-label={isSidebarCollapsed ? "Expand Menu" : "Collapse Menu"}
          >
            {isSidebarCollapsed ? (
              <ArrowIcon direction={ArrowDirection.Left} />
            ) : (
              <div className="flex gap-200 items-center group">
                <ArrowIcon direction={ArrowDirection.Right} />
                <span className="text-grey-300 transition-colors duration-300 group-hover:text-grey-100">
                  Minimize Menu
                </span>
              </div>
            )}
          </button>
        </footer>
      )}
    </aside>
  );
};

export default AdaptiveNavigation;
