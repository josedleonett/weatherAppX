import React, { useContext, useEffect } from 'react'
import NavbarDisplay from '../presentational/NavbarDisplay'
import { ContextGlobal } from '../../context/Global.context';

const NavbarContainer = () => {
    const { state, dispatch, changeThemeColor } = useContext(ContextGlobal);

    const themeModeSwitcherHandler = () => {
      const newTheme = state.themeMode === "light" ? "dark" : "light";
      dispatch({ type: "SET_THEME_MODE", payload: newTheme });
    };
  
    const themeColorChangeHandler = (event) => {
      const themeColorIndex = parseInt(event.target.value);
      dispatch({ type: "SET_THEME_COLOR", payload: themeColorIndex });
    };
  
    useEffect(() => {
      changeThemeColor(state.themeColor);
    }, [state.themeColor]);

  return (
  <NavbarDisplay themeModeSwitcherHandler={themeModeSwitcherHandler} />);
}

export default NavbarContainer