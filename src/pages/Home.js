import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { StyledHome } from "../Theme";
import {motion} from 'framer-motion';

const Home = () => {
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
            }
            }
        };

        const item = {
            hidden: { x: -10, opacity: 0 },
            visible: {
                x: 0,
                opacity: 1
                }
            };
    return(
        <StyledHome>
            <section className="home">
                <motion.div 
                className="landing-home-page"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{left: "100vw"}}>
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
                    <span>learn more</span>
                    <FontAwesomeIcon icon={faChevronRight} />
                    <div className="seemore-bg"></div>
                    </div>
                </div>
                <div className="socials">
                    <motion.ul 
                    className="social-list container"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    >
                        <motion.li 
                        className='item'
                        variants={item}
                        >
                            <a href="https://www.facebook.com/frank.bejo" target="_blank">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            
                        </motion.li>
                        <motion.li
                        className='item'
                        variants={item}>
                            <a href="https://github.com/frankbejo" target="_blank">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            
                        </motion.li>
                        <motion.li
                        className='item'
                        variants={item}>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </motion.li>
                    </motion.ul>
                </div>
                </motion.div>
            </section>
        </StyledHome>
    )
}

export default Home;