import styles from "./DesignerSearchBar.module.scss";
import searchIcon from "images/icons/Icon feather-search.svg";
import { useRef } from "react";

function DesignerSearchBar(props) {
  const searchInputRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.setSearchInput(searchInputRef.current.value);
  };

  return (
    <div className={styles.designerSearchBar}>
      <form onSubmit={onSubmitHandler}>
        <div className={styles.searchInput}>
          <img src={searchIcon} alt='Search Icon' onClick={onSubmitHandler} />
          <input type='text' placeholder='Vyhledávání' ref={searchInputRef} />
        </div>
      </form>
      <button onClick={onSubmitHandler}>Vyhledat</button>
    </div>
  );
}

export default DesignerSearchBar;
