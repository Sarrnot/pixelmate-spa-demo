import styles from "./DesignerPreview.module.scss";
import mapIcon from "images/icons/Group 3355.svg";
import arrowIcon from "images/icons/flaticon1557998900-svg.svg";

function DesignerPreview(props) {
  const onClickHandler = (event) => {
    event.preventDefault();
    window.location.href = `/designeri/${props.id}`;
  };

  return (
    <>
      <p className={styles.username}>{props.username}</p>
      <p className={styles.name}>{props.name}</p>
      <p className={styles.email}>{props.email}</p>
      <div className={styles.address}>
        <img src={mapIcon} alt='' />
        <div>
          <p className={styles.heading}>{props.address.city}</p>
          <p>{`${props.address.street} ${props.address.suite}`}</p>
          <p>{props.address.zipcode}</p>
        </div>
      </div>
      <a href='' className={styles.website}>
        {props.website}
      </a>
      <button onClick={onClickHandler}>
        Zobrazit profil <img src={arrowIcon} alt='arrowIcon' />
      </button>
    </>
  );
}

export default DesignerPreview;
