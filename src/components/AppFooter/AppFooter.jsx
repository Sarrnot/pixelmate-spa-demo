import styles from "./AppFooter.module.scss";
import logo from "images/pixelmateLogo/Pixelmate_logo_claim_white.svg";

function AppFooter() {
  return (
    <div className={styles.footer}>
      <div>© All rights reserved 2013-2019. Pixelmate s.r.o.</div>
      <img src={logo} alt='Logo' />
      <div>Zásady ochrany osobních údajů</div>
    </div>
  );
}

export default AppFooter;
