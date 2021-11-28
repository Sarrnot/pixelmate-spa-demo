import styles from "./Intro.module.scss";
import backgroundImage from "images/introBg/Video_screenshot_Mirek.png";
import { SignInForm } from "components/SignIn/SignInForm";
import arrowIcon from "images/icons/flaticon1557998900-svg.png";

function Intro() {
  return (
    <div
      className={styles.introContainer}
      style={{ backgroundImage: `url("${backgroundImage}")` }}
    >
      <div className={styles.intro}>
        <div>
          <p className={styles.heading}>Specializujeme se na vývoj produktů</p>
          <p className={styles.subheading}>
            Ty nejlepší firmy na trhu už CRM systémy nějakou tu dobu používají,
            ale není výjimkou, že se trápí zbytečně.
          </p>
          <button>
            Kontaktujte nás <img src={arrowIcon} alt='arrowIcon' />
          </button>
        </div>

        <div>
          <SignInForm />
        </div>
      </div>
    </div>
  );
}

export default Intro;
