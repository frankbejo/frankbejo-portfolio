import { useState, useRef } from "react";
import { StyledContacts } from "../Theme";
import Socials from '../components/Socials';
import {faPaperPlane, faCheckSquare, faTimesSquare} from '@fortawesome/free-solid-svg-icons'
import {motion} from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactInputs from "../components/ContactInputs";
// import emailjs from '@emailjs/browser';

const Contacts = () => {
    const form = useRef();
    const [isSent, setIsSent] = useState("errorsending");
    const [values, setValues] = useState({
        name: "",
        email: "",
        message: ""
    })

    const inputdata = [
        {
            id: "name",
            name: "name",
            type: "text",
            placeholder: "name",
            errorMessage: "enter a valid email",
            pattern: "[^0-9@#!^&({})=+-]*",
            label:"your name"
        }, 
        {
            id: "email",
            name: "email",
            type: "email",
            placeholder: "email",
            label:"your email"
        } 
    ]

    //set timer for isSent state 
    const IsSentTimer = () => {
        setTimeout( () => {
            setIsSent("")
        }, 5000)
    }

    
    
    const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm('service_xbf8nh5', 'template_uo9jjlf', form.current, 'NqV1pveVGlyH5A_os')
    //     .then((result) => {
    //         setIsSent("sent")
    //          IsSentTimer()
    //          setValues({
    //          name: "",
    //          email: "",
    //          message: ""
    // })
    //     }, (error) => {
    //         setIsSent("errorsending")
    //         IsSentTimer()
    //         console.log(isSent)
    //     });
    
            setIsSent("sent")
            IsSentTimer()
    };

    const OnChangeValue = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
        console.log(values)
    }
    
    const MessageChecker = (e) => {
        setValues({...values, message: e.target.value})
        values.message.length <= 30 ? console.log("yes"):console.log("not")
    }

    return(
        <StyledContacts>
            <motion.section 
            className="contacts"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}>
                <div id="isSent" className={isSent}>
                    <div className="sent">
                        <FontAwesomeIcon icon={faCheckSquare} />
                        <span>email sent</span>
                    </div>
                    <div className="errorsending">
                        <FontAwesomeIcon icon={faTimesSquare} />
                        <span>error sending mail</span>
                    </div>
                </div>
                <div className="contact-form-container">
                <div className="title-page">
                    <span>contacts</span>
                </div>
                <div className="contact-form">
                    <div className="email-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="inputs">
                                {
                                    inputdata.map( (item) => {
                                        return <ContactInputs {...item} key={item.id} value={values[item.id]} onchange={OnChangeValue}/> 
                                    })
                                }
                                <label htmlFor="message">message</label>
                                <br />
                                <textarea name="message" id="message" spellCheck="false" value={values.message} onChange={MessageChecker} required/>
                                </div>
                            
                            <div className="button-container">
                                
                                <button type="submit" id="submit" onClick={() => {console.log(values)}}>
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