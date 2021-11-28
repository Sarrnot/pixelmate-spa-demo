import styles from "./Viewport.module.scss";

function Viewport({ children }) {
  return <div className={styles.viewport}>{children}</div>;
}

export default Viewport;
