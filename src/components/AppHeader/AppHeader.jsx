import styles from "./AppHeader.module.scss";
import lightLogo from "images/pixelmateLogo/Pixelmate_logo_claim_white.png";
import darkLogo from "images/pixelmateLogo/Pixelmate_logo_claim_black.svg";
import NavigationMenu from "components/NavigationMenu/NavigationMenu";

function AppHeader(props) {
  return (
    <div className={styles.header}>
      <a href='/'>
        <img src={props.theme ? lightLogo : darkLogo} alt='Logo' />
      </a>
      <NavigationMenu theme={props.theme} />
    </div>
  );
}

export default AppHeader;
