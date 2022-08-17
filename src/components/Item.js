import {motion} from 'framer-motion';
import { Projectitem } from '../data';

const Item = ({index, image, projectname, desc}) => {

    return(
        <motion.li 
        className={(index %= 2) === 1 ? "reverse":""}
        variants={Projectitem}>
            <div className="image-container">
                <img src={image.desktop_view} alt=" " />
            </div>
            <div className="item-right">
                <div className="project-tittle">
                <span>{projectname}</span>
                <p>{desc}</p>
                </div>
                <div className="bottom-links">
                    <div className="view-code">
                        <span>viewcode</span> 
                        <div className="viewcode-bg"></div>
                    </div>
                <div className="view-live">
                    viewlive
                </div>
                </div>
            </div>
        </motion.li>
    )
}

export default Item;