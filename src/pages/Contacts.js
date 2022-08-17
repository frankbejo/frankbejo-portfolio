import { useRef } from "react";
import { StyledContacts } from "../Theme";
import Socials from '../components/Socials';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import {motion} from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from '@emailjs/browser';

const Contacts = () => {

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xbf8nh5', 'template_uo9jjlf', form.current, 'NqV1pveVGlyH5A_os')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return(
        <StyledContacts>
            <motion.section 
            className="contacts"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}>
                <div className="contact-form-container">
                <div className="title-page">
                    <span>contacts</span>
                </div>
                <div className="contact-form">
                    <div className="email-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="inputs">
                                <label htmlFor="name">your name</label>
                                <br />
                                <input type="text" name="user_name" id="name" spellCheck="false"/>
                                <br />
                                <label htmlFor="email">your email</label>
                                <br />
                                <input type="email" name="user_email" id="email" spellCheck="false"/>
                                <br />
                                <label htmlFor="message">message</label>
                                <br />
                                <textarea name="message" id="message" spellCheck="false" />
                                </div>
                            
                            <div className="button-container">
                                
                                <button type="submit" id="submit">
                                    send <FontAwesomeIcon icon={faPaperPlane} />
                                    <div className="button-backdrop"></div>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="details">
                        <p className="detail-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Laborum, quos veniam. Praesentium debitis alias
                        pariatur amet sequi suscipit neque incidunt, in, hic 
                        esse aperiam. Beatae accusantium est velit consequatur
                        itaque eos consectetur eligendi iusto aperiam, omnis, 
                        atque cum quibusdam illo dignissimos perferendis libero 
                        porro rerum magnam natus molestiae. Nihil, repellendus?
                        </p>
                        <Socials />
                    </div>
                </div>
                </div>

            </motion.section>
        </StyledContacts>
    )
}

export default Contacts;