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
        width: 5px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: ${(props) => props.theme.smallText};
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
    background-color: ${(props) => props.theme.navColor};
    padding: 10px 10px;
}

.side-nav{
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    position: fixed;
    height: 100vh;
    width: 60px;
    padding: 10px;
    background-color: ${(props) => props.theme.navColor};
    z-index: -1;
}

.menu-list{
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 10px;
    
}

.brand-logo img{
    width: 50px;
    height: auto;
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
    align-items: center;
    background-color: ${(props) => props.theme.fontColor};
    border-radius: 20px;
    transition: 300ms ease-in-out;
}

.toggle-theme.light{
    justify-content: end;
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
        padding-left: 60px;
        width: 80%;
        gap: 20px;
        margin-top: 20px;
    }

    .introduction{
        display: flex;
        justify-content: center;
        color: ${(props) => props.theme.smallText};
        text-align: justify;
        width: 100%;
        font-size: 16px;
        font-family: serif;
    }

    .socials{
        display: flex;
        width: 100%;
        justify-content: left;
    }

    .socials .social-list{
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

    .seemore{
        display: flex;
        width: 100%;
        justify-content: right;
        color: ${(props) => props.theme.fontColor};
    }

    .seemore-button{
        display: flex;
        align-items: center;
        gap: 10px;
        border-radius: 5px;
        padding: 6px;
        overflow: hidden;
        border: 1px solid ${(props) => props.theme.fontColor};
    }

    .seemore-button span{
        font-family: serif;
    }

    .seemore-button svg{
        width: 15px;
        height: 15px;
    }

    svg{
    width: 20px;
    height: 20px;
}

`

export const StyledProjects = styled.div`

    .projects{
        display: flex;
        gap: 40px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-left: 60px;
        padding-top: 120px;
        padding-bottom: 120px;
        width: 100%;
    }

    .title-page{
        width: 80%;
        color: ${(props) => props.theme.fontColor};
    }

    .title-page .little-text{
        margin-left: -14px;
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
        justify-content: center;
        padding-bottom: 20px;
        border-bottom: 2px solid ${(props) => props.theme.componenctBack};
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
        width: 600px;
        height: 300px;
        background-color:${(props) => props.theme.componenctBack};
        border: 1px solid ${(props) => props.theme.fontColor};
        border-radius: 10px;
        overflow: hidden;
    }

    .item-right{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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
    }

    .project-tittle p{
        display: -webkit-box;
        overflow : hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
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

    .bottom-links{
        display: flex;
        justify-content: end;
        gap: 20px;
        
    }

    .bottom-links div{
        padding: 5px;
        border: 1px solid ${(props) => props.theme.componentColor};
        font-family: serif;
        font-weight: 600;
    }

    .bottom-links .view-live{
        color: ${(props) => props.theme.backgroundColor};
        background-color: ${(props) => props.theme.fontColor};
        border-radius: 3px;
    }

    .bottom-links .view-code{
        color: ${(props) => props.theme.fontColor};
        background-color: ${(props) => props.theme.componenctBack};
    }

    /* media quieries */
    @media screen and (max-width: 1160px) {

    .project-list{
        grid-template-columns: repeat(2, 40%);
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
        width: 100%;
        height: 100%;
    }
    }

    @media screen and (max-width: 800px) {

    .project-list{
        grid-template-columns: repeat(1, 95%);
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
        width: 100%;
        height: 100%;
    }

    }
`