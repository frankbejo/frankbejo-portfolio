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
    `

export const lightmode = {
    fontColor: "#4B72AF",
    backgroundColor: "#F5F5F5",
    navColor: "#DFE5EC",
    componentColor: "#4B72AF"
}

export const darkmode = {
    fontColor: "#729DE3",
    backgroundColor: "#212121",
    navColor: "#2B2E34",
    componentColor: "#729DE3"
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
    width: 40px;
    height: auto;
}

.menu-list li a.active svg path{
    fill: ${(props) => props.theme.fontColor};
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

    .landing-home-page{
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: center;
        padding-left: 60px;
        width: 80%;
        gap: 10px;
    }

    .introduction{
        display: flex;
        justify-content: center;
        color: ${(props) => props.theme.fontColor};
        text-align: justify;
        width: 100%;
    }

    .socials{
        display: flex;
        width: 100%;
        justify-content: left;
    }

    .socials .social-list{
        display: flex;
        list-style: none;
        color: ${(props) => props.theme.fontColor};
        gap: 20px;
    }

    .social-list li{
        display: flex;
        justify-content: center;
        align-items: center;
    }


    .social-list li::after{
        content: "";
        position: absolute;
        width: 30px;
        height: 30px;
        background-color: ${(props) => props.theme.navColor};
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
        padding: 8px;
        overflow: hidden;
        border: 1px solid ${(props) => props.theme.fontColor};
    }

    .seemore-button:hover{
        
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
        width: 100%;
    }

    .title-page{
        width: 70%;
        color: ${(props) => props.theme.fontColor};
    }

    .title-page .little-text{
        margin-left: -5px;
    }

    .title-page .big-text{
        font-size: 48px;
    }

    .project-container{
        display: flex;
        justify-content: center;
    }

    .project-list{
        display: grid;
        grid-template-columns: repeat(1, 1000px);
        grid-gap: 30px;
        list-style: none;
        justify-content: center;
    }

    .project-list li{
        display: flex;
        gap: 20px;
        justify-content: center;
    }

    .image-container{
        width: 600px;
        height: 300px;
        background-color: ${(props) => props.theme.navColor};
        border: 1px solid ${(props) => props.theme.fontColor};
    }

    .item-right{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .image-container img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .project-tittle{
        display: flex;
        gap: 10px;
        flex-direction: column;
        color: ${(props) => props.theme.fontColor};
    }

    .project-tittle p{
        text-align: justify;
    }

    .project-tittle span{
        font-weight: bold;
    }

    .project-tittle p{
        font-weight: 300;
    }

    .bottom-links{
        display: flex;
        gap: 20px;
        color: ${(props) => props.theme.fontColor};
    }

    .bottom-links div{
        padding: 5px;
        border: 1px solid ${(props) => props.theme.componentColor};
    }
`