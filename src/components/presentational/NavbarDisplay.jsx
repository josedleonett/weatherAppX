import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from '../../context/Global.context'
import SearchInputContainer from '../containers/SearchInputContainer'
import { TbReload } from "react-icons/tb";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import styles from '../../styles/NavbarDisplay.module.css'

const NavbarDisplay = ({handleSwitchThemeMode}) => {
    const {state} = useContext(ContextGlobal)
    
  return (
    <nav className={`${styles.navbar} ${styles[state.themeMode]}`}>
      <ul>
        <li>
          <Link to="/location/">Inicio</Link>
        </li>
        <li>
          <Link to="/favorites">Favoritos</Link>
        </li>
        <li>
          <Link to="/details">Detalles</Link>
        </li>
      </ul>
      <SearchInputContainer />
      <div className={`${styles.buttonContainer}`}>
        <button>
          <TbReload />
        </button>
        <button onClick={handleSwitchThemeMode}>
          {state.themeMode == "light" ? <MdDarkMode /> : <MdLightMode />}
        </button>
      </div>
    </nav>
  )
}

export default NavbarDisplay