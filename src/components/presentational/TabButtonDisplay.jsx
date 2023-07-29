import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ContextGlobal } from "../../context/Global.context";
import styles from "../../styles/TabButtonDisplay.module.css";

const TabButtonDisplay = ({
  title,
  to,
  temperatureValue,
  weatherIcoSrc,
}) => {
  const { state } = useContext(ContextGlobal);

  return (
    <NavLink
      className={`${styles.tabButtonDisplay} ${styles[state.themeMode]}`}
      to={to}
    >
      <p>{title}</p>
      <p>{temperatureValue}°</p>
      <img
        src={weatherIcoSrc}
      />
    </NavLink>
  );
};

export default TabButtonDisplay;
