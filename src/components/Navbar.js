import {useEffect, useState } from "react";
import { NavLink, Outlet } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { StyledNavbar, GlobalStyles, darkmode, lightmode } from "../Theme";
import logo from '../images/frankbejologo.png';
import { faHome, faListCheck, faCircleQuestion,faPaperPlane, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Navbar = () => {
    const [theme, settheme] = useState(null)
    const [isMenu, setIsMenu] = useState(false)

    const SetTheme = () => {
        settheme(!theme)
        localStorage.setItem("theme",theme)
    }

    const SetMenu = () => {
        setIsMenu(!isMenu)
    }

    return(
        <ThemeProvider theme={theme ? lightmode:darkmode}>
        <StyledNavbar>
            <nav>
                <div className="top-nav">
                    <div className="left">
                        <div className="burger-menu show">
                            <div className="bar" onClick={() => SetMenu()}>
                                <div className="top"></div>
                                <div className="mid"></div>
                                <div className="top"></div>
                            </div>
                        </div>
                    </div>
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
                <div className={`side-nav ${isMenu ? "show":"hide"}`}>
                    <ul className="menu-list">
                        <li>
                            <NavLink to="/" className={({isActive}) => {return isActive ? "active":""}} onClick={() => setIsMenu(false) }>
                                <FontAwesomeIcon icon={faHome} />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="projects" className={({isActive}) => {return isActive ? "active":""}} onClick={() => setIsMenu(false) }>
                                <FontAwesomeIcon icon={faListCheck} />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="about" className={({isActive}) => {return isActive ? "active":""}} onClick={() => setIsMenu(false) }>
                                <FontAwesomeIcon icon={faCircleQuestion} />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="contacts" className={({isActive}) => {return isActive ? "active":""}} onClick={() => setIsMenu(false) }>
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