import {motion} from 'framer-motion';
import { Projectitem } from '../data';

const Item = ({index, image, projectname, desc, liveviewlink, viewcodelink, stack}) => {

    return(
        <motion.li 
        className={(index %= 2) === 1 ? "reverse":""}
        variants={Projectitem}>
            <div className="image-container">
                <img src={image.desktop_view} loading="lazy" alt="project" />
            </div>
            <div className="item-right">
                <div className="project-tittle">
                <span>{projectname}</span>
                <p>{desc}</p>
                </div>
                
                <div className="project-stack">
                <div className="tech-stack">
                    <ul className="tech-list">
                    {stack ? (stack.map(tech => {
                        return <li className='tech'>{tech}</li>
                    })):
                    (
                        null
                    )
                    }
                    </ul>
                </div>

                <div className="bottom-links">
                    {
                        liveviewlink ? (
                            <div className="view-live">
                                <a href={liveviewlink} rel="noreferrer" target="_blank">viewlive</a>
                            </div>
                        ):
                        (
                            null
                        )
                    }
                    {
                        viewcodelink ? (
                            <div className="view-code">
                                <a href={viewcodelink} rel="noreferrer" target="_blank">viewcode</a>
                                <div className="viewcode-bg"></div>
                            </div>
                        ):
                        (
                            null
                        )
                    }
                    
                
                </div>
                </div>
                
            </div>
        </motion.li>
    )
}

export default Item;