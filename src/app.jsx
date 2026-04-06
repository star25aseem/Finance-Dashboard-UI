import styles from "./App.module.css";
import { useStore } from "./store/useStore";
import Dashboard from "./pages/Dashboard";
import Transactions from "./components/transactions/Transactions";

function App() {
  const { role, setRole } = useStore();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Finance Dashboard</h1>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className={styles.select}
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <Dashboard />
      <Transactions />
    </div>
  );
}

export default App;