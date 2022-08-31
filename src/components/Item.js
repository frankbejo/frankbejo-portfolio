import {motion} from 'framer-motion';
import { Projectitem } from '../data';

const Item = ({index, image, projectname, desc, liveviewlink, viewcodelink}) => {

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
                        <a href={viewcodelink} target="_blank">viewcode</a>
                        <div className="viewcode-bg"></div>
                    </div>
                <div className="view-live">
                    <a href={liveviewlink} target="_blank">viewlive</a>
                </div>
                </div>
            </div>
        </motion.li>
    )
}

export default Item;