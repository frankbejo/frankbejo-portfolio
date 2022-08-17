import { StyledProjects } from "../Theme"
import Item from "../components/Item"
import {motion} from 'framer-motion';
import { projects } from "../data";
import {useState } from "react";
import { container } from "../data";

const Projects = () => {
    const [data, setdata] = useState(projects)

    return(
        <StyledProjects>
            <motion.section 
            className="projects"
            
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            >
                <div className="title-page">
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