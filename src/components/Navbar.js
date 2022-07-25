import {useEffect, useLayoutEffect, useState } from "react";
import { NavLink, Outlet } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { StyledNavbar, GlobalStyles, darkmode, lightmode } from "../Theme";
import logo from '../images/frankbejologo.png';
import { faHome, faListCheck, faCircleQuestion,faPaperPlane, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Navbar = () => {
    const [theme, settheme] = useState(null)
    const [togglemenu, settogglemenu] = useState(false)

    const SetTheme = () => {
        settheme(!theme)
        localStorage.setItem("theme",theme)
        console.log(theme)
    }

    console.log(localStorage.getItem("theme"))
    
    return(
        <ThemeProvider theme={theme ? lightmode:darkmode}>
        <StyledNavbar>
            <nav>
                <div className="top-nav">
                    <div className="brand-logo">
                        <NavLink to="/">
                        <img src={logo} alt="logo" />
                        </NavLink>
                    </div>
                    <div className={`toggle-theme ${theme ? "light":"dark"}`} onClick={() => SetTheme()}>
                        {
                            <FontAwesomeIcon icon={theme ? faSun : faMoon} />
                        }
                    </div>
                </div>
                <div className="side-nav">
                    <ul className="menu-list">
                        <li>
                            <NavLink to="/" className={({isActive}) => {return isActive ? "active":""}}>
                                <FontAwesomeIcon icon={faHome} />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="projects" className={({isActive}) => {return isActive ? "active":""}}>
                                <FontAwesomeIcon icon={faListCheck} />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="about" className={({isActive}) => {return isActive ? "active":""}}>
                                <FontAwesomeIcon icon={faCircleQuestion} />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="contacts" className={({isActive}) => {return isActive ? "active":""}}>
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </StyledNavbar>
        <Outlet />
        <GlobalStyles />
        </ThemeProvider>
    )
}

export default Navbar;