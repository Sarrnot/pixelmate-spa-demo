import styles from "./DesignerDetail.module.scss";
import mapIcon from "images/icons/Group 3355.svg";
import designerImg from "images/designerPhoto/Component 15 – 1.png";
import arrowIcon from "images/icons/flaticon1557998900-svg.svg";

function DesignerDetail(props) {
  const onClickHandler = (event) => {
    event.preventDefault();
    window.location.href = `/designeri`;
  };

  return (
    <div className={styles.designerDetailContainer}>
      <div className={styles.designerDetails}>
        <button onClick={onClickHandler}>
          <img src={arrowIcon} alt='' />
          Zpět
        </button>
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
        <div className={styles.company}>
          <p className={styles.heading}>{props.company.name}</p>
          <p>{props.company.catchPhrase}</p>
          <p>{props.company.bs}</p>
        </div>
      </div>
      <div className={styles.img}>
        <img src={designerImg} alt='Designer' />
      </div>
    </div>
  );
}

export default DesignerDetail;
