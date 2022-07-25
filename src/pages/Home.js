import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { StyledHome } from "../Theme";
import {motion} from 'framer-motion';

const Home = () => {
    return(
        <StyledHome>
            <section className="home">
                <motion.div 
                className="landing-home-page"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}                >
                <div className="title-page">
                    <div className="little-greet">
                        <span>Hi I'm</span>
                    </div>
                    <div className="big-name">
                        <span>frankbejo</span>
                    </div>
                </div>
                <p className="introduction">Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. Iure, saepe culpa! Facere 
                cum numquam a amet placeat, consequatur eius exercitationem.</p>
                <div className="seemore">
                    <div className="seemore-button">
                    <span>Learn more</span>
                    <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </div>
                <div className="socials">
                    <motion.ul 
                    className="social-list"

                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    >
                        <li>
                            <FontAwesomeIcon icon={faFacebook} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faGithub} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </li>
                    </motion.ul>
                </div>
                </motion.div>
            </section>
        </StyledHome>
    )
}

export default Home;