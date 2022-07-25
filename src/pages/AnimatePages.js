import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "./Home";
import Projects from "./Projects";
import {AnimatePresence} from 'framer-motion';

const AnimatePages = () => {

    return(
        <AnimatePresence>
            <Routes>
                <Route path='/' element={<Navbar />}>
                <Route index element={<Home />}/>
                <Route path='/projects' element={<Projects />} />
                <Route path='/contacts' element={<Home />} />
                <Route path='/about' element={<Home />} />
                <Route path='*' element={<Projects />} />
                </Route>
            </Routes>
        </AnimatePresence>
    
    )
}

export default AnimatePages;