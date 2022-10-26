import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { StyledHome } from "../Theme";
import {motion} from 'framer-motion';
import Socials from '../components/Socials';
import { Link } from 'react-router-dom';

const Home = () => {
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
                <p className="introduction">i'm a front-end web developer </p>
                <div className="seemore">
                    <Link to="/about">
                        <div className="seemore-button">
                            <span>learn more</span>
                            <FontAwesomeIcon icon={faChevronRight} />
                            <div className="seemore-bg"></div>
                        </div>
                    </Link>
                </div>
                <div className="socials">
                    <Socials />
                </div>
                </motion.div>
            </section>
        </StyledHome>
    )
}

export default Home;