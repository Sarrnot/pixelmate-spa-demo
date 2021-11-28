import styles from "./SignInForm.module.scss";
import arrowIcon from "images/icons/flaticon1557998900-svg.png";

const signInHandler = () => {
  console.log("bla");
  return false;
};

function SignInForm() {
  return (
    <div className={styles.signInForm}>
      <p className={styles.heading}>Přihlašte se</p>
      <form onSubmit={signInHandler}>
        <input type='email' id='email' name='email' placeholder='Váš email' />
        <input
          type='password'
          id='password'
          name='password'
          placeholder='Heslo'
        />
        <div>
          <input type='radio' id='privacyPolicy' name='privacyPolicy' />
          <label htmlFor='privacyPolicy'>
            Souhlasím se všeobecnými podmínkami a <br />
            Zásadou o ochranně osobních údajlů.
          </label>
        </div>
      </form>
      <button onClick={signInHandler}>
        Přihlásit se <img src={arrowIcon} alt='arrowIcon' />
      </button>
    </div>
  );
}

export default SignInForm;
