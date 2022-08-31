import { StyledAbout } from "../Theme";
import picture from '../images/BEJO-415.JPG';
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
                    <img src={picture} alt="awdawd" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing 
                        elit. Blanditiis quas molestiae harum itaque? Error
                        sunt quo cumque. Maiores sapiente hic in, quisquam
                        excepturi minus neque repellat sunt consequatur 
                        asperiores. Dolor quibusdam, voluptatum quos labori
                        osam in sunt aliquid similique beatae. Error commodi
                        fugit expedita dicta et totam laboriosam quo quibusd
                        am accusantium, reprehenderit praesentium perspic
                        iatis aliquam aliquid pariatur eveniet earum. Perfer
                        endis laboriosam molestias earum est officiis praes
                        entium reiciendis incidunt id quod quisquam omnis 
                        maiores, error illum fuga dolorem odit optio expli
                        cabo vel deserunt iure voluptates, dolores sit. Temp
                        oribus, laborum at! Quae amet aspernatur laborum atq
                        ue facere quis, sunt quibusdam accusamus at rerum!
                    </p>
                </div>
                </div>
            </motion.section>
        </StyledAbout>
    )
}

export default About;