import { StyledProjects } from "../Theme"
import Item from "../components/Item"

const Projects = () => {

    const projects = [
        {
            projectname: "&Clothing",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus dolor culpa provident aliquid eveniet dignissimos inventore cupiditate! Impedit, quaerat sed!",
            image: {
                desktop_view: "/static/media/jandf-clothing-home.4dc21fb0c3a97d2f18e3.JPG",
                tablet_view: "/static/media/jandf-clothing-products.4698b9dc845751e829f2.JPG",
                other: "/static/media/jandf-clothing-products-tablet.3ef3e3b0f5eff2d36064.JPG"
            },
            liveviewlink: "",
            viewcodelink: ""
        },
        {
            projectname: "Kanban Board",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus dolor culpa provident aliquid eveniet dignissimos inventore cupiditate! Impedit, quaerat sed!",
            image: {
                desktop_view: "/static/media/jandf-clothing-products.4698b9dc845751e829f2.JPG",
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
                desktop_view: "/static/media/jandf-clothing-products-tablet.3ef3e3b0f5eff2d36064.JPG",
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
            <section className="projects">
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
                            projects.map(item => {
                                return <Item {...item}/>
                            })
                        }
                    </ul>
                </div>
            </section>    
        </StyledProjects>
    )
}

export default Projects;