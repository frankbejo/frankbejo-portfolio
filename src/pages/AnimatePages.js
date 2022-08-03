import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "./Home";
import Projects from "./Projects";
import {AnimatePresence} from 'framer-motion';
import About from "./About";
import Contacts from "./Contacts";
import Error from "./Error";

const AnimatePages = () => {

    return(
        <AnimatePresence>
            <Routes>
                <Route path='/' element={<Navbar />}>
                <Route index element={<Home />}/>
                <Route path='/projects' element={<Projects />} />
                <Route path='/about' element={<About />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='*' element={<Error />} />
                </Route>
            </Routes>
        </AnimatePresence>
    
    )
}

export default AnimatePages;