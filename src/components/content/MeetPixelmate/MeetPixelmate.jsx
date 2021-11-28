import styles from "./MeetPixelmate.module.scss";
import arrowIcon from "images/icons/flaticon1557998900-svg.png";
import bgImg from "images/meetPixelmateBg/Component 13 – 1.png";

function MeetPixelmate() {
  return (
    <>
      <div className={styles.meetPixelmate}>
        <div className={styles.smallHeading}>Poznejte Pixelmate tým</div>
        <div className={styles.heading}>
          Jsme mladí a hraví, startupy nás baví
        </div>
        <div className={styles.text}>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Pellentesque arcu. Ut tempus purus at
            lorem. Nam quis nulla. Aenean placerat. Mauris suscipit, ligula sit
            amet pharetra semper, nibh ante cursus purus, vel sagittis velit
            mauris vel metus. Fusce tellus. Praesent id justo in neque elementum
            ultrices. Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam.
          </p>
          <p>
            architecto beatae vitae dicta sunt explicabo. Nulla est. Curabitur
            bibendum justo non orci. Aenean placerat. Praesent in mauris eu
            tortor porttitor accumsan. Maecenas libero. Phasellus enim erat,
            vestibulum vel, aliquam a, posuere eu, velit. Etiam commodo dui eget
            wisi. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu,
            orci. Nemo enim ipsam voluptatem.
          </p>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/designeri";
          }}
        >
          Co dalšího se šušká <img src={arrowIcon} alt='arrowIcon' />
        </button>
      </div>
      <img src={bgImg} alt='Background' className={styles.bgImg} />
    </>
  );
}

export default MeetPixelmate;
