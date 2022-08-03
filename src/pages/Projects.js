import { StyledProjects } from "../Theme"
import Item from "../components/Item"
import {motion, useViewportScroll, useTransform} from 'framer-motion';
import { projects } from "../data";
import { useEffect, useState } from "react";
import picture from "../images/projects-view/jandf-clothing-home.JPG";

const Projects = () => {
    const {scrollYProgress} = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
    const [data, setdata] = useState(projects)

    const container = {
        hidden: { opacity: 1},
        visible: {
            opacity: 1,
            transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
            }
            }
        };

    console.log(scale)
    return(
        <StyledProjects>
            <motion.section 
            className="projects"
            
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            >
                <div className="title-page">
                    <div className="little-text">
                        <span>My personal</span>
                    </div>
                    <div className="big-text">
                        <span>projects</span>
                    </div>
                </div>
                <div className="project-container">
                    <motion.ul 
                    className="project-list"
                    variants={container}
                    initial="hidden"
                    animate="visible">
                        {
                                data.map((item, index) => {
                                    return <Item {...item} index={index}/>
                                })
                            
                        }
                        
                    </motion.ul>
                </div>
            </motion.section>    
        </StyledProjects>
    )
}

export default Projects;