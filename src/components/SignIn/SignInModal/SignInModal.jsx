import styles from "./SignInModal.module.scss";
import { useState } from "react";
import { Modal } from "@mui/material";
import arrowIcon from "images/icons/flaticon1557998900-svg.png";
import crossIcon from "images/icons/Component 16-1.svg";

function MandatoryInput({ isValid }) {
  if (!isValid) {
    return <p className={styles.mandatoryInput}>Toto pole je povinné</p>;
  }

  return null;
}

function SignInModal(props) {
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);

  const [password, setPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  const [menu, setMenu] = useState(1);

  const modalCloseHandler = () => {
    setEmail("");
    setEmailIsValid(true);
    setPassword("");
    setPasswordIsValid(true);
    setMenu(1);
    props.modalClose();
  };

  const nextInputHandler = (event) => {
    event.preventDefault();
    if (!email) {
      setEmailIsValid(false);
      return;
    }
    if (email) {
      setMenu(menu + 1);
    }
  };

  const signInHandler = (event) => {
    event.preventDefault();
    if (!password) {
      setPasswordIsValid(false);
      return;
    }
    if (password) {
      console.log(email, password);
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

  const inputField = (
    <div>
      {menu === 1 && (
        <>
          <input
            type='email'
            placeholder='Váš email'
            value={email}
            onChange={emailOnChange}
            className={`${!emailIsValid && styles.invalid}`}
          />
          <MandatoryInput isValid={emailIsValid} />
        </>
      )}
      {menu === 2 && (
        <>
          <input
            type='password'
            placeholder='Heslo'
            value={password}
            onChange={passwordOnChange}
            className={`${!passwordIsValid && styles.invalid}`}
          />
          <MandatoryInput isValid={passwordIsValid} />
        </>
      )}
    </div>
  );

  const logInButton = (
    <>
      {menu === 1 && (
        <button onClick={nextInputHandler}>
          Další <img src={arrowIcon} alt='' />
        </button>
      )}
      {menu === 2 && <button onClick={signInHandler}>Odeslat</button>}
    </>
  );

  return (
    <Modal open={props.modalShow} onClose={modalCloseHandler}>
      <div className={styles.modal}>
        <button onClick={modalCloseHandler}>
          <img src={crossIcon} alt='Close login' />
        </button>
        <h1>Přihlásit se</h1>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas.
        </p>
        <form>
          {inputField}
          {logInButton}
        </form>
      </div>
    </Modal>
  );
}

export default SignInModal;
