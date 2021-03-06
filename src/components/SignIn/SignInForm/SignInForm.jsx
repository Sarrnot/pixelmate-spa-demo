import { useState } from "react";
import styles from "./SignInForm.module.scss";
import arrowIcon from "images/icons/flaticon1557998900-svg.png";

function MandatoryInput({ isValid }) {
  if (!isValid) {
    return <p className={styles.mandatoryInput}>Toto pole je povinné</p>;
  }

  return null;
}

function SignInForm() {
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);

  const [password, setPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [privacyPolicyIsValid, setPrivacyPolicyIsValid] = useState(true);

  const signInHandler = (event) => {
    event.preventDefault();
    if (email && password && privacyPolicy) {
      console.log(email, password, privacyPolicy);
      return;
    }
    if (!email) {
      setEmailIsValid(false);
    }
    if (!password) {
      setPasswordIsValid(false);
    }
    if (!privacyPolicy) {
      setPrivacyPolicyIsValid(false);
    }
  };

  const emailOnChange = (event) => {
    setEmail(event.target.value);
    if (event.target.value) {
      setEmailIsValid(true);
    }
  };
  const passwordOnChange = (event) => {
    setPassword(event.target.value);
    if (event.target.value) {
      setPasswordIsValid(true);
    }
  };
  const privacyPolicyOnChange = (event) => {
    setPrivacyPolicy(event.target.value);
    if (event.target.value) {
      setPrivacyPolicyIsValid(true);
    }
  };

  return (
    <div className={styles.signInForm}>
      <p className={styles.heading}>Přihlašte se</p>
      <form onSubmit={signInHandler}>
        <div>
          <input
            type='email'
            placeholder='Váš email'
            value={email}
            onChange={emailOnChange}
            className={`${!emailIsValid && styles.invalid}`}
          />
          <MandatoryInput isValid={emailIsValid} />
        </div>
        <div>
          <input
            type='password'
            placeholder='Heslo'
            value={password}
            onChange={passwordOnChange}
            className={`${!passwordIsValid && styles.invalid}`}
          />
          <MandatoryInput isValid={passwordIsValid} />
        </div>
        <div className={styles.radioInput}>
          <input
            type='radio'
            id='privacyPolicy'
            value={privacyPolicy}
            onChange={privacyPolicyOnChange}
          />
          <label htmlFor='privacyPolicy'>
            Souhlasím se všeobecnými podmínkami a <br />
            Zásadou o ochranně osobních údajů.
          </label>
          <MandatoryInput isValid={privacyPolicyIsValid} />
        </div>
        <button onClick={signInHandler}>
          Přihlásit se <img src={arrowIcon} alt='arrowIcon' />
        </button>
      </form>
    </div>
  );
}

export default SignInForm;
