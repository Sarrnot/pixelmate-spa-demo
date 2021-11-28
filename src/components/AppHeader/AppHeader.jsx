import styles from "./AppHeader.module.scss";
import logo from "images/pixelmateLogo/Pixelmate_logo_claim_white.png";
import NavigationMenu from "components/NavigationMenu/NavigationMenu";

function AppHeader() {
  return (
    <div className={styles.header}>
      <a href='/'>
        <img src={logo} alt='Logo' />
      </a>
      <NavigationMenu />
    </div>
  );
}

export default AppHeader;
