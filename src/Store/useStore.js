import { create } from "zustand";

const loadTransactions = () => {
  const data = localStorage.getItem("transactions");
  return data ? JSON.parse(data) : [];
};

export const useStore = create((set, get) => ({
  role: "viewer",

  transactions: loadTransactions(),

  setRole: (role) => set({ role }),

  addTransaction: (tx) => {
    const updated = [...get().transactions, { ...tx, id: Date.now() }];
    localStorage.setItem("transactions", JSON.stringify(updated));
    set({ transactions: updated });
  },

  deleteTransaction: (id) => {
    const updated = get().transactions.filter((t) => t.id !== id);
    localStorage.setItem("transactions", JSON.stringify(updated));
    set({ transactions: updated });
  },
}));