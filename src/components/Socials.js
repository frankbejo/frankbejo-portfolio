import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import {motion} from 'framer-motion';
import { container, item } from "../data";
import { StyledSocials } from '../Theme';

const Socials = () => {
    return(
        <StyledSocials>
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
                </StyledSocials>
    )
}

export default Socials;