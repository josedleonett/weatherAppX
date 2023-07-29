import React, { useContext } from "react";
import TabButtonContainer from "../containers/TabButtonContainer";
import { ContextGlobal } from "../../context/Global.context";
import styles from "../../styles/TabsDisplay.module.css";

const TabsDisplay = ({ cityList }) => {
  const { state } = useContext(ContextGlobal);

  console.log(state.weatherCodeMapping[45].imgDay);

  return (
    <nav className={`${styles.tabsDisplay} ${styles[state.themeMode]}`}>
      <TabButtonContainer
        title={"Oncativo"}
        to={"/oncativo"}
        temperatureValue={"11"}
        weatherIcoSrc={`/svg/weatherImages/${state.weatherCodeMapping[45].imgDay}.svg`}
      />
      <TabButtonContainer
        title={"Cordoba"}
        to={"/cordoba"}
        temperatureValue={"20"}
        weatherIcoSrc={`/svg/weatherImages/${state.weatherCodeMapping[1].imgDay}.svg`}
      />
      <TabButtonContainer
        title={"Maturin"}
        to={"/maturin"}
        temperatureValue={"30"}
        weatherIcoSrc={`/svg/weatherImages/${state.weatherCodeMapping[80].imgDay}.svg`}
      />
    </nav>
  );
};

export default TabsDisplay;
