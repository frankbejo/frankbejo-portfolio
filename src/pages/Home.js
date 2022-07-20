import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { StyledHome } from "../Theme";

const Home = () => {
    return(
        <StyledHome>
            <section className="home">
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
                    <span>Learn More</span>
                    <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </div>
                <div className="socials">
                    <ul className="social-list">
                        <li>
                            <FontAwesomeIcon icon={faFacebook} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faGithub} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </li>
                    </ul>
                </div>
            </section>
        </StyledHome>
    )
}

export default Home;