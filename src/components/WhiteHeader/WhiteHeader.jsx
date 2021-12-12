import styles from "./WhiteHeader.module.scss";

function WhiteHeader({ children }) {
  return <div className={styles.whiteHeader}>{children}</div>;
}

export default WhiteHeader;
