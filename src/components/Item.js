import {motion} from 'framer-motion';
const Item = ({index, image, projectname, desc}) => {
    const item = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1
            }
        };
    return(
        <motion.li 
        className={(index %= 2) === 1 ? "reverse":""}
        variants={item}>
            <div className="image-container">
                <img src={image.desktop_view} alt={image.desktop_view} />
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