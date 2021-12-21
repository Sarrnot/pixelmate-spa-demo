import { useState } from "react";
import styles from "./NavigationMenu.module.scss";
import { SignInModal } from "components/SignIn/SignInModal";
import BurgerMenuIcon from "images/icons/burgerMenuIcon.svg";
import Drawer from "@mui/material/Drawer";

function NavigationMenu(props) {
  const [modalShow, setModalShow] = useState(false);
  const [sidebarShow, setSidebarShow] = useState(false);

  const handleSidebarClose = () => setSidebarShow(false);
  const handleSidebarOpen = () => setSidebarShow(true);

  const modalOpen = (event) => {
    setModalShow(true);
  };
  const modalClose = () => {
    setModalShow(false);
  };

  const navMenuOptions = (
    <>
      <a href='/designeri'>Designéři</a>
      <a href=''>Portfolio</a>
      <button className={styles.signIn} onClick={modalOpen}>
        Přihlásit se
      </button>
    </>
  );

  return (
    <div className={`${styles.navigationMenu} ${styles[props.theme]}`}>
      <button className={styles.burgerIconButton} onClick={handleSidebarOpen}>
        <img src={BurgerMenuIcon} alt='burgerMenuIcon' />
      </button>
      <Drawer open={sidebarShow} onClose={handleSidebarClose} anchor='right'>
        <div className={styles.sidebarMenu}>{navMenuOptions}</div>
      </Drawer>

      <div className={styles.classicMenu}>{navMenuOptions}</div>

      <SignInModal modalShow={modalShow} modalClose={modalClose} />
    </div>
  );
}

export default NavigationMenu;
