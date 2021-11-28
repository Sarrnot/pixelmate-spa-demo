import styles from "./Sponsors.module.scss";
import ceskaTelevize from "images/sponsors/loga-header-ct.png";
import deloitte from "images/sponsors/loga-header-deloitte.png";
import bosch from "images/sponsors/loga-header-bosch.png";
import narodniMuzeum from "images/sponsors/Group 8.png";
import cemix from "images/sponsors/loga-header-cemix.png";

function Sponsors() {
  return (
    <div className={styles.sponsors}>
      <img src={ceskaTelevize} alt='Logo Česká televize' />
      <img src={deloitte} alt='Logo Deloitte' />
      <img src={bosch} alt='Logo Bosch' />
      <img src={narodniMuzeum} alt='Logo Národní Muzeum' />
      <img src={cemix} alt='Logo Cemix' />
    </div>
  );
}

export default Sponsors;
