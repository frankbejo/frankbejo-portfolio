import { StyledProjects } from "../Theme"
import Item from "../components/Item"
import {motion} from 'framer-motion';
import desktop from '../images/projects-view/jandf-clothing-home.JPG'
import products from '../images/projects-view/jandf-clothing-products.JPG'
import products_tablet from '../images/projects-view/jandf-clothing-products-tablet.JPG'


const Projects = () => {
    const projects = [
        {
            projectname: "&Clothing",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus dolor culpa provident aliquid eveniet dignissimos inventore cupiditate! Impedit, quaerat sed!",
            image: {
                desktop_view: desktop,
                tablet_view: "../images/projects-view/jandf-clothing-home.jpg",
                other: "../images/projects-view/jandf-clothing-home.jpg"
            },
            liveviewlink: "",
            viewcodelink: ""
        },
        {
            projectname: "Kanban Board",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus dolor culpa provident aliquid eveniet dignissimos inventore cupiditate! Impedit, quaerat sed!",
            image: {
                desktop_view: products,
                tablet_view: "/static/media/jandf-clothing-products.4698b9dc845751e829f2.JPG",
                other: "/static/media/jandf-clothing-products-tablet.3ef3e3b0f5eff2d36064.JPG"
            },
            liveviewlink: "",
            viewcodelink: ""
        },
        {
            projectname: "Complete the Sentence Mini Game",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus dolor culpa provident aliquid eveniet dignissimos inventore cupiditate! Impedit, quaerat sed!",
            image: {
                desktop_view: products_tablet,
                tablet_view: "/static/media/jandf-clothing-products.4698b9dc845751e829f2.JPG",
                other: "/static/media/jandf-clothing-products-tablet.3ef3e3b0f5eff2d36064.JPG"
            }
            ,
            liveviewlink: "",
            viewcodelink: ""
        }
    ]    
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
                                projects.map((item, index) => {
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