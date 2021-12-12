import styles from "./DesignerSearchBar.module.scss";
import searchIcon from "images/icons/Icon feather-search.svg";
import { useRef } from "react";

function DesignerSearchBar(props) {
  const searchInputRef = useRef();

  const onClickHandler = (event) => {
    props.setSearchInput(searchInputRef.current.value);
  };

  return (
    <div className={styles.designerSearchBar}>
      <form>
        <div className={styles.searchInput}>
          <img src={searchIcon} alt='Search Icon' onClick={onClickHandler} />
          <input type='text' placeholder='Vyhledávání' ref={searchInputRef} />
        </div>
      </form>
      <button onClick={onClickHandler}>Vyhledat</button>
    </div>
  );
}

export default DesignerSearchBar;
