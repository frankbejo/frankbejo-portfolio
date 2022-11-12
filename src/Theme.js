import styled, { createGlobalStyle } from 'styled-components'
export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inknut Antiqua', serif;
        line-height: 22px;
    }

    body{
        background-color: ${(props) => props.theme.backgroundColor};
    }

    ::-webkit-scrollbar{
        width: 3px;
        height: 3px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: ${(props) => props.theme.smallText};
        border: 1px solid ${(props) => props.theme.fontColor};
    }

    ::-webkit-scrollbar-track{
        background-color: ${(props) => props.theme.componenctBack};
    }
    `

export const lightmode = {
    fontColor: "#4B72AF",
    backgroundColor: "#F5F5F5",
    navColor: "#DFE5EC",
    componentColor: "#4B72AF",
    smallText: "#71A0D7",
    componenctBack: "#DFE5EC"
}

export const darkmode = {
    fontColor: "#729DE3",
    backgroundColor: "#212121",
    navColor: "#2B2E34",
    componentColor: "#729DE3",
    smallText: "#7691BC",
    componenctBack: "#2B2E34"
}

export const StyledSocials = styled.div`
    .social-list{
        display: flex;
        list-style: none;
        gap: 20px;
    }

    .social-list li, a{
        color:  ${(props) => props.theme.componentColor};
        display: flex;
        justify-content: center;
        align-items: center;
    }


    .social-list li::after{
        content: "";
        position: absolute;
        width: 30px;
        height: 30px;
        background-color: ${(props) => props.theme.componenctBack};
        border-radius: 20px;
        z-index: -1;
    }

    svg{
    width: 20px;
    height: 20px;
}
`

export const StyledNavbar = styled.div`

nav{
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 100;
}

.top-nav{
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    background-color: ${(props) => props.theme.backgroundColor};
    /* backdrop-filter: blur(20px); */
}

.side-nav{
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    position: fixed;
    height: 100vh;
    width: 60px;
    z-index: -1;
    margin-left: 0;
    background-color: ${(props) => props.theme.backgroundColor};
    transition: margin 300ms ease-in-out;
}

.brand-logo img{
    width: 50px;
    height: 40px;
    opacity: 100%;
    margin-left: 10px;
}

.menu-list{
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 10px;
    
}

.menu-list li a.active svg path{
    fill: ${(props) => props.theme.fontColor};
    transition: 300ms ease-in-out;
}

svg{
    width: 20px;
    height: 20px;
}

svg path{
    stroke: ${(props) => props.theme.fontColor};
    fill: ${(props) => props.theme.backgroundColor};
    stroke-width: 20;
}

.toggle-theme{
    width: 35px;
    height: 20px;
    display: flex;
    padding: 1px;
    margin-right: 15px;
    margin-left: 15px;
    align-items: center;
    background-color: ${(props) => props.theme.fontColor};
    border-radius: 20px;
    transition: 300ms ease-in-out;
}

.toggle-theme.light{
    justify-content: end;
}

.top-nav .left{
    position: fixed;
}

.bar{
    display: none;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    gap: 3px;
    transform: rotate(90deg);
}

.bar .top, .mid, .bot{
    content: "";
    width: 2px;
    height: 20px;
    border-radius: 20px;
    background-color: ${(props) => props.theme.fontColor};
}



@media screen and (max-width: 800px) {

        .bar{
            display: flex;
        }

        .top-nav .left{
            position: relative;
        }

        .side-nav.show{
            margin-left: 0;
        }

        .side-nav.hide{
            margin-left: -60px;
}

    }
`

export const StyledHome = styled.div`

    .home{
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
    }

    .title-page{
        color: ${(props) => props.theme.fontColor};
    }

    .title-page .little-greet{
        position: absolute;
        margin-left: 33px;
        margin-top: -17px;
    }

    .title-page .big-name{
        font-size: 40px;
    }

    .landing-home-page{
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: center;
        width: 50%;
        gap: 20px;
        margin-top: 80px;
    }

    .introduction{
        display: flex;
        justify-content: center;
        color: ${(props) => props.theme.smallText};
        text-align: justify;
        font-family: serif;
        line-height: 1.2;
    }

    .socials{
        display: flex;
        width: 100%;
        justify-content: left;
    }

    .seemore{
        display: flex;
        width: 100%;
        justify-content: right;
    }

    .seemore-button{
        position: relative;
        display: flex;
        align-items: center;
        gap: 10px;
        border-radius: 5px;
        padding: 6px;
        overflow: hidden;
        border: 1px solid ${(props) => props.theme.fontColor};
    }

    .seemore a{
        text-decoration: none;
        color: ${(props) => props.theme.fontColor};
    }

    .seemore-bg{
        position: absolute;
        width: 20%;
        height: 100%;
        background-color: ${(props) => props.theme.componenctBack};
        margin-left: -6px;
        z-index: -1;
        transition: width 300ms ease;
    }

    .seemore-button:hover .seemore-bg{
        width: 100%;
    }

    .seemore-button span{
        font-family: 'Inknut Antiqua', serif;
        font-weight: 600;
        font-size: 13px;
    }

    .seemore-button svg{
        width: 15px;
        height: 15px;
    }

    svg{
    width: 20px;
    height: 20px;
}

@media screen and (max-width: 800px) {
    .landing-home-page{
        width: 70%;
        min-width: 230px;
    }
}

`

export const StyledProjects = styled.div`

    .projects{
        display: flex;
        gap: 40px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 120px;
        padding-bottom: 120px;
        width: 100%;
    }

    .title-page{
        color: ${(props) => props.theme.fontColor};
    }

    .title-page .big-text{
        font-size: 40px;
    }

    .project-container{
        display: flex;
        justify-content: center;
    }

    .project-list{
        display: grid;
        grid-template-columns: repeat(1, 80%);
        grid-gap: 20px;
        list-style: none;
        justify-content: center;
    }

    .project-list li{
        display: flex;
        gap: 20px;
        width: 100%;
        justify-content: center;
    }

    .project-list li.reverse{
        display: flex;
        flex-direction: row-reverse;
    }

    .project-list li.reverse .bottom-links{
        justify-content: start;
    }

    .project-list li.reverse span{
        text-align: right;
    }

    .image-container{
        width: calc(100vw / 2);
        height: calc(100vw / 4);
        background-color:${(props) => props.theme.componenctBack};
        border: 1px solid ${(props) => props.theme.fontColor};
        border-radius: 10px;
        overflow: hidden;
        position: relative;
    }

    .project-stack{
        display:flex;
        flex-direction: column;
        height: 100%;
    }

    .item-right{
        display: flex;
        width: 495px;
        flex-grow: 1;
        flex-direction: column;
        justify-content: space-between;
    }

    .image-container::before{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(transparent, 60% , ${(props) => props.theme.fontColor}90);
    }

    .image-container img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .project-tittle{
        display: flex;
        gap: 10px;
        flex-direction: column;
        color: ${(props) => props.theme.fontColor};
        justify-content: start;
    }

    .project-tittle p{
        display: -webkit-box;
        overflow : hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;  
        text-align: justify;
        line-height: 1.2;
        font-weight: 300;
        color: ${(props) => props.theme.smallText};
        font-family: serif;
    }

    .project-tittle span{
        font-weight: bold;
    }

    .tech-stack{
        margin-top: 10px;
        height: 100%;
    }

    .tech-list{
        width: 100%;
        display: flex;
        gap: 5px;
        flex-wrap: wrap;
        color: ${(props) => props.theme.smallText};
    }

    .tech-stack li.tech{
        cursor: default;
        font-size: 13px;
        width: fit-content;
        padding: 5px;
        display: flex;
        flex-grow: 1;
        background-color: ${(props) => props.theme.navColor};
        border-radius: 5px;
    }

    .bottom-links{
        display: flex;
        justify-content: end;
        gap: 5px;
    }

    .bottom-links div{
        padding: 5px;
        font-family: 'Inknut Antiqua', serif;
        font-weight: 600;
        font-size: 13px;
        border-radius: 3px;
    }

    .bottom-links .view-live{
        border: 1px solid ${(props) => props.theme.componentColor};
        background-color: ${(props) => props.theme.smallText};
    }

    .bottom-links .view-live a{
        color: ${(props) => props.theme.backgroundColor};
        text-decoration: none;
    }

    .bottom-links .view-code{
        display: flex;
        align-items: center;
        position: relative;
        overflow: hidden;
        border: 1px solid ${(props) => props.theme.componentColor};
    }

    .bottom-links .view-code a{
        color: ${(props) => props.theme.fontColor};
        text-decoration: none;
    }
    
    .view-code .viewcode-bg{
        position: absolute;
        margin-left: -5px;
        height: 100%;
        width: 0%;
        background-color: ${(props) => props.theme.componenctBack};
        z-index: -1;
        transition: width 300ms ease-in-out;
    }

    .view-code:hover .viewcode-bg{
        width: 100%;
    }


    /* media quieries */
    @media screen and (max-width: 1160px) {

    .project-list{
        grid-template-columns: repeat(2, 40%);
        grid-gap: 30px;
        list-style: none;
        justify-content: center;
    }

    .project-list li{
        height: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .project-list li.reverse{
        display: flex;
        flex-direction: column;
    }

    .project-list li.reverse .bottom-links{
        display: flex;
        justify-content: end;
    }

    .project-list li.reverse span{
        text-align: left;
    }

    .project-stack{
        display: flex;
        flex-basis: 0;
        gap: 5px;
    }

    .item-right{
        gap: 20px;
        width: 100%;
    }

    .bottom-links{
        display: flex;
    }

    .image-container{
        width: calc(100vw / 2.5);
        height: calc(100vw / 4);
    }

    .image-container img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    }

    @media screen and (max-width: 800px) {

    .project-list{
        grid-template-columns: repeat(1, 90%);
        grid-gap: 40px;
        list-style: none;
        justify-content: center;
    }

    .project-list li{
        flex-direction: column;
        align-items: center;
    }

    .project-list li.reverse{
        display: flex;
        flex-direction: column;
    }

    .project-list li.reverse .bottom-links{
        justify-content: end;
    }

    .project-list li.reverse span{
        text-align: left;
    }

    .item-right{
        gap: 20px;
    }

    .image-container{
        width: calc(100vw / 1.1);
        height: calc(100vw / 1.8);
    }
    }

`

export const StyledAbout = styled.div`
    section.about{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 120px;
        padding-bottom: 120px;
        width: 100%;
        min-height: 100vh;
    }

    .content-container{
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 60%;
    }

    .title-page span{
        font-size: 40px;
        color: ${(props) => props.theme.fontColor};
    }

    .about-container p img{
        width: calc(100vw / 5);
        height: calc(100vw / 5);
        min-width: 200px;
        min-height: 200px;
        background-color:${props => props.theme.componenctBack};
        border: 1px solid ${(props) => props.theme.fontColor};
        border-radius: 10px;
        overflow: hidden;
        position: relative;
        margin: 0 30px 0 0;
        display: block;
        float: left;
    }

    .about-container p img::before{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(transparent, 60% , ${(props) => props.theme.fontColor}90);
    }

    img{
        width: 100%;
        height: 100%;
        background-size: cover;
    }   

    .about-container p{
        font-size: 16px;
        width: 100%;
        height: 100%;
        font-family: serif;
        color: ${(props) => props.theme.smallText};
        text-align: justify;
    }

    .about-container p span:nth-child(2),.about-container span:nth-child(1){
        font-family: serif;
        margin-right: 20px;
    }
    
    .about-container p .hand{
        position: absolute;
        width: 22px;
        height: 22px;
        animation: wave 600ms infinite alternate; 
    }

    @keyframes wave{
        0%{
            rotate: 0deg;
        }
        100%{
            rotate: 80deg;
        }
    }

    @media screen and (max-width: 800px) {
        .content-container{
            width: 80%;
        }
    }

    @media screen and (max-width: 420px){
        .about-container p img{
            width: 100%;
            height: 100%;
            margin-bottom: 30px;
            display: block;
            float: none;
    }
    }

    .resume-button{
        display: flex;
        position: relative;
        margin-top: 20px;
        padding: 5px;
        float: right;
        border: 1px solid ${(props) => props.theme.fontColor};
        border-radius: 5px;
        overflow: hidden;

    }

    .about-container .resume-button a{
        text-decoration: none;
        color: ${(props) => props.theme.fontColor};
    }

    .about-container .resume-button .backdrop{
        content: "";
        margin: -5px;
        position: absolute;
        width: 20%;
        height: 100%;
        background-color: ${(props) => props.theme.navColor};
        z-index: -1;
        transition: width 200ms ease-in-out;
    }

    .resume-button:hover .backdrop{
        width: 100%;
    }
`

export const StyledContacts = styled.div`
    section.contacts{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: 100vh;
    }

    .contact-form-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    .title-page{
        margin-left: 25px;
        width: 100%;
    }

    .title-page span{
        font-size: 40px;
        color: ${(props) => props.theme.fontColor};
    }

    .contact-form{
        display: flex;
        justify-self: center;
        justify-content: space-between;
        max-width: 600px;
        height: 400px;
        padding: 20px;
        border-radius: 5px;
        gap: 20px;
    }

    .email-form{
        display: flex;
        justify-content: center;
        width: 60%;
    }

    .email-form label{
        font-size: 13px;
        color: ${(props) => props.theme.fontColor};
    }

    .email-form input{
        width: 100%;
        font-size: 16px;
        font-family: serif;
        border-radius: 5px;
        border: none;
        margin-bottom: 10px;
        padding-left: 10px;
        color: ${(props) => props.theme.smallText};
        outline: 1px solid ${(props) => props.theme.fontColor};
        background-color: ${(props) => props.theme.backgroundColor};
    }

    .email-form input:focus{
        outline: 1px solid ${(props) => props.theme.smallText};
    }

    .email-form form{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
    }

    .email-form textarea#message{
        border-radius: 5px;
        font-family: serif;
        font-size: 16px;
        text-align: justify;
        height: 120px;
        width: 100%;
        resize: none;
        line-height: 1.2;
        padding: 5px 10px;
        outline: 1px solid ${(props) => props.theme.fontColor};
        border: none;   
        color:  ${(props) => props.theme.smallText};
        overflow-y: scroll;
        background-color: ${(props) => props.theme.backgroundColor};
    }

    textarea#body:focus{
        outline: 1px solid ${(props) => props.theme.smallText};
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        -webkit-text-fill-color: ${(props) => props.theme.smallText};
        -webkit-box-shadow: 0 0 0px 100px ${(props) => props.theme.backgroundColor} inset;
}

    .contact-form .details{
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    p.detail-text{
        margin-bottom: 10px;
        font-family: serif;
        font-size: 16px;
        text-align: justify;
        color: ${(props) => props.theme.smallText};
        line-height: 1.2;
    }

    .social-list{
        position: relative;
        z-index: 1;
        display: flex;
        justify-content: right;
    }

    li.item::after{
        background-color: ${(props) => props.theme.componenctBack};
    }

    .button-container {
        display: flex;
        margin-top: 10px;
        position: relative;
        overflow: hidden;
    }

    .button-backdrop{
        position: absolute;
        width:10%;
        height: 100%;
        background-color: ${(props) => props.theme.componenctBack};
        z-index: -1;
        transition: width 1000ms ease;
        left: 0;
    }

    button#submit{
        display: flex;
        width: 100%;
        gap: 5px;
        border-radius: 5px;
        align-items:  center;
        justify-content: center;
        padding: 5px 10px;
        font-size: 13px;
        color: ${(props) => props.theme.fontColor};
        border: 1px solid ${(props) => props.theme.fontColor};
        background-color: transparent;
    }

    #submit:hover .button-backdrop{
        width: 150%;
    }

    #submit svg{
        width: 20px;
        height: 20px;
        color: ${(props) => props.theme.fontColor};
    }

    #isSent > *{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        position: fixed;
        padding: 5px 10px;
        border-radius: 5px;
        border: 1px solid ${(props) => props.theme.fontColor};
        z-index: 100;
        right: 0;
        margin-right: -200px;
        margin-top: -60px;
        background-color: ${(props) => props.theme.backgroundColor};
        font-size: 13px;
        color: ${(props) => props.theme.fontColor};
        transition: margin 300ms ease-in-out;
    }

    #isSent span{
        font-family: serif;
    }

    #isSent svg{
        width: 17px;
        height: 17px;
        color: ${(props) => props.theme.fontColor};
    }

    #isSent.errorsending .errorsending{
        margin-right: 5%;
    }

    #isSent.sent .sent{
        margin-right: 5%;
    }

    @media screen and (max-width: 800px) {
        section.contacts{
            padding-top: 140px;
            padding-bottom: 50px;
        }
        
        .contact-form{
            flex-direction: column;
            height: auto;
            width: 90%;
        }

        .contact-form .details{
            width: 100%;
        }

        .email-form{
            width: 100%;
        }

        .title-page{
        width: 90%;
        }

        button#submit{
        width: 100%;
        }

        .email-form textarea#body{
            height: 100px;
        }
    }

    @media screen and (min-width: 700px) and (min-height: 630px) {
        section.contacts{
            height: 100vh;
    }

    .contact-form-container{
        display: flex;
        justify-content: center;  
    }

    }

    @media screen and (min-height: 880px) {
        section.contacts{
            justify-content: center;
            width: 100%;
            height: 100vh;
    }

        .contact-form-container{
            display: flex;
            justify-content: center;  
    }
    }

`