import { StateCreator } from "zustand";
import { Transaction } from "../../types";

export interface TransactionSlice {
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
  updateTransaction: (id: string, updates: Partial<Transaction>) => void;
  deleteTransaction: (id: string) => void;
}

const createTransactionSlice: StateCreator<TransactionSlice> = (set) => ({
  transactions: [],
  addTransaction: (transaction) => {
    set((state) => ({
      transactions: [...state.transactions, transaction],
    }));
  },
  updateTransaction: (id, updates) => {
    set((state) => ({
      transactions: state.transactions.map((transaction) =>
        transaction.id === id ? { ...transaction, ...updates } : transaction
      ),
    }));
  },
  deleteTransaction: (id) => {
    set((state) => ({
      transactions: state.transactions.filter(
        (transaction) => transaction.id !== id
      ),
    }));
  },
});

export default createTransactionSlice;
