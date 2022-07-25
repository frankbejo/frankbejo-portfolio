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

    const CheckTheme = () => {
        if(localStorage.getItem("theme") === null){
            localStorage.setItem("theme", theme)
        }
    
        else{
            settheme(localStorage.getItem("theme"))
            console.log("wqeqwasdq")
        }
    
    }

    const SetTheme = () => {
        settheme(!theme)
        localStorage.setItem("theme",theme)
        console.log(theme)
    }

    useEffect(() => {
        CheckTheme()
    }, [])


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
                        <li className="active">
                            <NavLink to="projects">
                                <FontAwesomeIcon icon={faHome} />
                            </NavLink>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faListCheck} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCircleQuestion} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faPaperPlane} />
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