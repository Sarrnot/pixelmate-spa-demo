import { useState } from "react";
import styles from "./NavigationMenu.module.scss";
import { SignInModal } from "components/SignIn/SignInModal";

function NavigationMenu(props) {
  const [modalShow, setModalShow] = useState(false);

  const modalOpen = (event) => {
    setModalShow(true);
  };

  const modalClose = () => {
    setModalShow(false);
  };

  return (
    <div className={`${styles.navigationMenu} ${styles[props.theme]}`}>
      <a href='/designeri'>Designéři</a>
      <a href=''>Portfolio</a>
      <button className={styles.signIn} onClick={modalOpen}>
        Přihlásit se
      </button>
      <SignInModal modalShow={modalShow} modalClose={modalClose} />
    </div>
  );
}

export default NavigationMenu;
