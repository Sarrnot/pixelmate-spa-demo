import styles from "./CardLayout.module.scss";

function CardLayout({ children }) {
  return (
    <div className={styles.cardLayoutContainer}>
      <div className={styles.cardLayout}>{children}</div>
    </div>
  );
}

export default CardLayout;
