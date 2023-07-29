import React, { useContext } from "react";
import NavbarContainer from "../containers/NavbarContainer";
import TabsContainer from "../containers/TabsContainer";
import { ContextGlobal } from "../../context/Global.context";
import styles from "../../styles/HeaderDisplay.module.css";

const HeaderDisplay = () => {
    const {state} = useContext(ContextGlobal)
  return (
    <header className={styles.header}>
      <NavbarContainer />
      <TabsContainer />
    </header>
  );
};

export default HeaderDisplay;
