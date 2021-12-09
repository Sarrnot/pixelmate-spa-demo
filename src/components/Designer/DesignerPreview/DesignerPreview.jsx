import styles from "./DesignerPreview.module.scss";
import mapIcon from "images/icons/Group 3355.svg";

function DesignerPreview(props) {
  return (
    <>
      <p className={styles.username}>{props.username}</p>
      <p className={styles.name}>{props.name}</p>
      <p className={styles.email}>{props.email}</p>
      <div className={styles.address}>
        <img src={mapIcon} />
        <div>
          <p className={styles.heading}>{props.address.city}</p>
          <p>{`${props.address.street} ${props.address.suite}`}</p>
          <p>{props.address.zipcode}</p>
        </div>
      </div>
      <a href='' className={styles.website}>
        {props.website}
      </a>
    </>
  );
}

export default DesignerPreview;
