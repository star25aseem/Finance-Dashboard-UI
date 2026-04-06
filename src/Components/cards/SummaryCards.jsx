import styles from "./SummaryCards.module.css";
import { motion } from "framer-motion";
export default function SummaryCards({ transactions }) {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((a, t) => a + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((a, t) => a + t.amount, 0);

  const balance = income - expenses;

  const Card = ({ title, value }) => (
    <motion.div
      className={styles.card}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className={styles.title}>{title}</div>
      <div className={styles.value}>₹{value}</div>
    </motion.div>
  );

  return (
    <div className={styles.grid}>
      <Card title="Balance" value={balance} />
      <Card title="Income" value={income} />
      <Card title="Expenses" value={expenses} />
    </div>
  );
}
