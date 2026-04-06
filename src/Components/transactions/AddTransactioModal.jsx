import { useState } from "react";
import { useStore } from "../../store/useStore";
import styles from "./AddTransactionModal.module.css";
import { motion } from "framer-motion";

export default function AddTransactionModal({ close }) {
  const { addTransaction } = useStore();

  const [form, setForm] = useState({
    amount: "",
    category: "",
    type: "expense",
    date: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!form.amount || !form.category || !form.date) {
      setError("All fields are required");
      return;
    }

    addTransaction({
      ...form,
      amount: Number(form.amount),
    });

    close();
  };

  return (
    <div className={styles.overlay}>
      <motion.div
        className={styles.modal}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <h2>Add Transaction</h2>

        {error && <p className={styles.error}>{error}</p>}

        <input
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={(e) =>
            setForm({ ...form, amount: e.target.value })
          }
        />

        <input
          placeholder="Category (e.g. Food, Rent)"
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
        />

        <input
          type="date"
          value={form.date}
          onChange={(e) =>
            setForm({ ...form, date: e.target.value })
          }
        />

        <select
          value={form.type}
          onChange={(e) =>
            setForm({ ...form, type: e.target.value })
          }
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <div className={styles.actions}>
          <button onClick={handleSubmit}>Add</button>
          <button onClick={close} className={styles.cancel}>
            Cancel
          </button>
        </div>
      </motion.div>
    </div>
  );
}