import styles from "./Insights.module.css";

export default function Insights({ transactions }) {
  const now = new Date().getMonth();
  const prev = now - 1;

  const currentMonth = transactions.filter(
    (t) => new Date(t.date).getMonth() === now
  );

  const prevMonth = transactions.filter(
    (t) => new Date(t.date).getMonth() === prev
  );

  const sum = (arr) =>
    arr.reduce((a, t) => a + t.amount, 0);

  const currentTotal = sum(currentMonth);
  const prevTotal = sum(prevMonth);

  const diff = currentTotal - prevTotal;

  const percent =
    prevTotal === 0
      ? 100
      : ((diff / prevTotal) * 100).toFixed(1);

  return (
    <div className={styles.box}>
      <h3>Insights</h3>

      <p>
        This month: ₹{currentTotal}
      </p>

      <p>
        Last month: ₹{prevTotal}
      </p>

      <p>
        Change:{" "}
        <span
          style={{
            color: diff >= 0 ? "#22c55e" : "#ef4444",
          }}
        >
          {percent}% {diff >= 0 ? "↑" : "↓"}
        </span>
      </p>
    </div>
  );
}