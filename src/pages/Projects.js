import { StyledProjects } from "../Theme"
import Item from "../components/Item"
import {motion} from 'framer-motion';
import { projects } from "../data";
import { useEffect, useState } from "react";
import picture from "../images/projects-view/jandf-clothing-home.JPG";

const Projects = () => {
    const [data, setdata] = useState(projects)

    console.log(data)
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
                    <ul className="project-list">
                        {
                                data.map((item, index) => {
                                    return <Item {...item} index={index}/>
                                })
                            
                        }
                        
                    </ul>
                </div>
            </motion.section>    
        </StyledProjects>
    )
}

export default Projects;