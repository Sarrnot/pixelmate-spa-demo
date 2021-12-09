import styles from "./Card.module.scss";

function Card({ children }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>{children}</div>
    </div>
  );
}

export default Card;
