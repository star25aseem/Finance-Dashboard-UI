import styles from "./Dashboard.module.css";
import SummaryCards from "../components/cards/SummaryCards";
import Charts from "../components/charts/Charts";
import Insights from "../components/Insights";
import { useStore } from "../store/useStore";

export default function Dashboard() {
  const { transactions } = useStore();

  return (
    <div className={styles.container}>
      
      {/* Summary Section */}
      <div className={styles.section}>
        <div className={styles.sectionTitle}>Overview</div>
        <SummaryCards transactions={transactions} />
      </div>

      {/* Charts Section */}
      <div className={styles.section}>
        <div className={styles.sectionTitle}>Analytics</div>

        <div className={styles.chartsGrid}>
          <Charts transactions={transactions} />
        </div>
      </div>

      {/* Insights Section */}
      <div className={styles.section}>
        <div className={styles.sectionTitle}>Insights</div>
        <Insights transactions={transactions} />
      </div>

    </div>
  );
}
