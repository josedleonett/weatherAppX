import React, { useContext } from "react";
import { FaSearch, FaCrosshairs } from "react-icons/fa";
import styles from "../../styles/SearchInputDisplay.module.css";
import { ContextGlobal } from "../../context/Global.context";

const SearchInputDisplay = ({
  submitHandler,
  inputState,
  inputChangeHandler,
  getLocationHandler,
}) => {
    const {state} = useContext(ContextGlobal)
  return (
    <form
      className={`${styles.searchInput} ${styles[state.themeMode]}`}
      onSubmit={submitHandler}
    >
      <label htmlFor="searchInput">
        <button type="submit">
          <FaSearch />
        </button>
        <input
          id="searchInput"
          type="search"
          placeholder="Buscar Lugares"
          value={inputState}
          onChange={inputChangeHandler}
          list="searchMatch"
          autoComplete="false"
        />
        <button onClick={getLocationHandler}>
          <FaCrosshairs />
        </button>
        {/* <datalist id="searchMatch">
            <option value="comomo">
              <li>comomo</li>
            </option>
            <option value="fsd"></option>
            <option value="fsd"></option>
          </datalist> */}
      </label>
    </form>
  );
};

export default SearchInputDisplay;
