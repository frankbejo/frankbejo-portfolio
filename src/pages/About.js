import { StyledAbout } from "../Theme";
import picture from '../images/BEJO-415.png';
import resume from '../assets/Frank Bejo.pdf';
import {motion} from 'framer-motion';

const About = () => {
    return(
        <StyledAbout>
            <motion.section 
            className="about"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}>
                <div className="content-container">
                <div className="title-page">
                    <span>about me</span> 
                </div>
                <div className="about-container">
                    {/* <div className="image-container"> */}
                        
                    {/* </div> */}
                    <p>
                        <span className="image-container">
                            <img src={picture} alt="awdawd" />
                        </span>
                        <span>
                        <span> hi!
                        <span className="hand">👋
                        </span></span>, i'm frank bejo, i graduated 
                        at quezon city university with a bachelors 
                        degree in informartion and technology, when i 
                        graduated, like any other graduating students, i still dont know what
                        career do i want to pursue and skills i need to
                        develop but because covid 19 is still at peak that time and we're in
                        quarantine and you can't do anything at all, i started reviewing web
                        development, i remembered when i dont have have pc or laptop to code 
                        onto, but i have a phone, so i maximize what i have to review html css 
                        and javascript. 
                        </span>
                    </p>
                    <div className="resume-button">
                        <a href={resume} rel="noreferrer" target="_blank" >resume</a>
                        <div className="backdrop"></div>
                    </div>
                </div>
                </div>
            </motion.section>
        </StyledAbout>
    )
}

export default About;