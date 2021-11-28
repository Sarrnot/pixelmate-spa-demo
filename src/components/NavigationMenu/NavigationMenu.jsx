import styles from "./NavigationMenu.module.scss";

function NavigationMenu() {
  return (
    <div className={styles.navigationMenu}>
      <a href='/designeri'>Designéři</a>
      <a href=''>Portfolio</a>
      <a href='' className={styles.signIn}>
        Přihlásit se
      </a>
    </div>
  );
}

export default NavigationMenu;