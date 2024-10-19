// import { create } from "zustand";
// import { devtools, persist } from "zustand/middleware";

// import createTransactionSlice, {
//   TransactionSlice,
// } from "./slices/transaction-slice";

// type StoreState = UserSlice &
//   FinancialSlice &
//   TransactionSlice &
//   BudgetSlice &
//   PotSlice &
//   BillSlice;

// const useStore = create<StoreState>(
//   devtools(
//     persist(
//       (set, get) => ({
//         ...createUserSlice(set, get),
//         ...createFinancialSlice(set, get),
//         ...createTransactionSlice(set, get),
//         ...createBudgetSlice(set, get),
//         ...createPotSlice(set, get),
//         ...createBillSlice(set, get),
//       }),
//       {
//         name: "finance-store",
//         getStorage: () => localStorage,
//       }
//     )
//   )
// );

// export default useStore;
