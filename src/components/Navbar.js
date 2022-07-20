import { useState } from "react";
import { NavLink, Outlet } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { StyledNavbar, GlobalStyles, darkmode, lightmode } from "../Theme";
import darkmodelogo from '../images/dark-logo.png'
import lightmodelogo from '../images/light-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faBars, faClose } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [theme, settheme] = useState(false)
    const [togglemenu, settogglemenu] = useState(false)

    return(
        <ThemeProvider theme={theme ? darkmode:lightmode}>
        <StyledNavbar>
            <nav>
                <div className="menu" onClick={() => settogglemenu(!togglemenu)}>
                    <FontAwesomeIcon icon={togglemenu ? faClose:faBars} />
                </div>
                <div className="brand-logo">
                    <img src={theme ? lightmodelogo : darkmodelogo} alt="logo" />
                </div>
                <div className="theme-mode" onClick={() => settheme(!theme)}>
                    <FontAwesomeIcon icon={theme ? faMoon : faSun} />
                </div>
            </nav>
            <div className={`side-menu ${togglemenu ? "show":""}`}>
                <ul className="menu-list">
                    <li>
                        <NavLink to="/" className={({isActive}) => {return isActive ? "active":" "}} onClick={() => settogglemenu(false)}>home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" className={({isActive}) => {return isActive ? "active":" "}} onClick={() => settogglemenu(false)}>projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacts" className={({isActive}) => {return isActive ? "active":" "}} onClick={() => settogglemenu(false)}>contacts</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({isActive}) => {return isActive ? "active":" "}} onClick={() => settogglemenu(false)}>about</NavLink>
                    </li>
                </ul>
            </div>
            <div className={`backdrop ${togglemenu ? "show":""}`} onClick={() => settogglemenu(false)}></div>
        </StyledNavbar>
        <Outlet />
        <GlobalStyles />
        </ThemeProvider>
    )
}

export default Navbar;