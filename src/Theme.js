import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Oswald', sans-serif;
    }

    body{
        background-color: ${(props) => props.theme.backgroundColor};
    }
    `

export const lightmode = {
    fontColor: "#000000",
    backgroundColor: "#FFFFFF",
    navColor: "#E9E9E9",
    componentColor: "#D9D9D9"
}

export const darkmode = {
    fontColor: "#FFFFFF",
    backgroundColor: "#131313",
    navColor: "#2D2D2D",
    componentColor: "#222222"
}


export const StyledNavbar = styled.div`

    nav{
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        background-color: ${(props) => props.theme.navColor};
        padding: 10px;
        position: fixed;
        top: 0;
        z-index: 1000;
        border-bottom: 1px solid ${(props) => props.theme.fontColor};
    }

    .menu, .theme-mode{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        background-color: ${(props) => props.theme.componentColor};;
    }

    img{
        width: 50px;
        height: 50px;
    }

    svg{
        width: 20px;
        height: 20px;
        color: ${(props) => props.theme.fontColor};
    }

    .side-menu{
        display: flex;
        position: fixed;
        width: auto;
        height: 100%;
        background-color: ${(props) => props.theme.navColor};
        transition: margin-left 300ms ease-in-out;
        margin-top: 80px;
        margin-left: -200px;
        z-index: 1000px;
    }

    .side-menu.show{
        margin-left: 0;
    }

    .menu-list{
        list-style: none;
        padding: 10px;
    }

    .menu-list li{
        padding: 10px 50px 10px 0;
    }

    .menu-list li a{
        color: ${(props) => props.theme.fontColor};
        text-decoration: none;
    }

    .menu-list li a.active{
        font-weight: bold;
    }

    .backdrop{
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: -1;
        margin-left: -100vw;
    }

    .backdrop.show{
        margin-left: 0;
    }
`

export const StyledHome = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    z-index: -2;

    .home{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        margin-top: 80px;
    }

    .title-page{
        color: ${(props) => props.theme.fontColor};
    }

    .little-greet{
        position: absolute;
        margin-left: 40px;
        margin-top: 6px;
    }

    .big-name span{
        font-weight: bold;
        font-size: 50px;
    }

    .introduction{
        width: 80%;
        text-align: justify;
        color: ${(props) => props.theme.fontColor};
        font-size: 15px;
    }

    .seemore{
        width: 80%;
    }

    .seemore-button{
        display: flex;
        gap: 15px;
        align-items: center;
        justify-content: space-between;
        width: 140px;
        padding: 10px;
        float: right;
        background-color: ${(props) => props.theme.navColor};
        color: ${(props) => props.theme.fontColor};
    }

    .socials{
        width: 80%;
    }

    .social-list{
        display: flex;
        gap: 20px;
    }

    .social-list li{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        border-radius: 20px;
        background-color: ${(props) => props.theme.navColor};
    }

    .social-list li svg{
        width: 20px;
        height: 20px;
        color: ${(props) => props.theme.fontColor};
    }
`;

export const StyledProjects = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    justify-content: center;
    z-index: -2;

    .projects{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        margin-top: 100px;
    }

    .title-page{
        color: ${(props) => props.theme.fontColor};
    }

    .little-text{
        position: absolute;
        margin-left: 8px;
        margin-top: 11px;
        font-size: 14px;
    }

    .big-text{
        font-size: 50px;
        font-weight: bold;
    }

    .project-container{
        display: flex;
    }

    .project-list{
        display: grid;
        grid-template-columns: repeat(1, 370px);
        gap: 20px;
        justify-content: center;
        padding-bottom: 100px;
    }

    .project-list li{
        display: flex;
        flex-direction: column;
        gap: 10px;
        list-style: none;
        background-color: ${(props) => props.theme.navColor};
        padding: 10px;
        color: ${(props) => props.theme.fontColor};
        border-radius: 10px;
        
    }

    .image-container{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .image-container img{
        width: 350px;
        height: 250px;
        object-fit: contain;
    }

    .project-tittle span{
        font-weight: bold;
    }

    .bottom-links{
        display: flex;
        justify-content: right;
        gap: 20px;
    }

    .bottom-links > *{
        padding: 10px;
    }

    .view-code{
        background-color: ${(props) => props.theme.fontColor};
        border-radius: 5px;
        color: ${(props) => props.theme.backgroundColor};
    }

    .view-live{
        background-color: skyblue;
        border-radius: 5px;
        color: ${(props) => props.theme.fontColor};
    }
`