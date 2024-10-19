import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import MainLayout from "./components/layouts/main-layout.tsx";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AuthLayout from "./components/layouts/auth-layout.tsx";
import SignUp from "./pages/sign-up.tsx";
import Login from "./pages/login.tsx";
import ErrorPage from "./pages/error-page.tsx";
import Overview from "./pages/overview.tsx";
import Transactions from "./pages/transactions.tsx";
import Budgets from "./pages/budgets.tsx";
import Pots from "./pages/pots.tsx";
import RecurringBills from "./pages/recurring-bills.tsx";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to="/auth/login" replace /> },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to="/overview" replace /> },
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "transactions",
        element: <Transactions />,
      },
      {
        path: "budgets",
        element: <Budgets />,
      },
      {
        path: "pots",
        element: <Pots />,
      },
      {
        path: "recurring-bills",
        element: <RecurringBills />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
