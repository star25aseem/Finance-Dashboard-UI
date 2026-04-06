import { useState } from "react";
import { useStore } from "../../store/useStore";
import styles from "./Transactions.module.css";
import AddTransactionModal from "./AddTransactionModal";

export default function Transactions() {
  const { transactions, deleteTransaction, role } = useStore();

  const [typeFilter, setTypeFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("");
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  // 🔍 Filtering logic
  const filtered = transactions
    .filter((t) =>
      t.category.toLowerCase().includes(search.toLowerCase())
    )
    .filter((t) =>
      typeFilter === "all" ? true : t.type === typeFilter
    )
    .filter((t) =>
      dateFilter ? t.date === dateFilter : true
    );

  return (
    <div className={styles.container}>
      
      {/* 🔹 Header */}
      <div className={styles.header}>
        <h2>Transactions</h2>

        <div className={styles.controls}>
          
          {/* 🔍 Search */}
          <input
            placeholder="Search category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* 🔽 Type Filter */}
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          {/* 📅 Date Filter */}
          <input
            type="date"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
          />

          {/* ➕ Add Button */}
          {role === "admin" && (
            <button onClick={() => setShowModal(true)}>
              + Add
            </button>
          )}
        </div>
      </div>
    
      <p className={styles.total}>
         Showing ₹{filtered.reduce((a, t) => a + t.amount, 0)}
      </p>
      {/* 📋 Table */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Type</th>
            {role === "admin" && <th>Action</th>}
          </tr>
        </thead>

        <tbody>
          {filtered.length > 0 ? (
            filtered.map((t) => (
              <tr key={t.id} className={styles.row}>
                <td>{t.date}</td>
                <td>{t.category}</td>

                <td
                  className={
                    t.type === "expense"
                      ? styles.expense
                      : styles.income
                  }
                >
                  ₹{t.amount}
                </td>

                <td>{t.type}</td>

                {role === "admin" && (
                  <td>
                    <span
                      className={styles.deleteBtn}
                      onClick={() => deleteTransaction(t.id)}
                    >
                      Delete
                    </span>
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className={styles.empty}>
                No transactions found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* 🧾 Modal */}
      {showModal && (
        <AddTransactionModal
          close={() => setShowModal(false)}
        />
      )}
    </div>
  );
}