import desktop from './images/projects-view/jandf-clothing-home.JPG'
import products from './images/projects-view/jandf-clothing-products.JPG'
import products_tablet from './images/projects-view/jandf-clothing-products-tablet.JPG'

export const projects = [
    {
        projectname: "&Clothing",
        desc: "&Clothing / J & F is a clothing line that uses waste materials, useless or unwanted products by upcycling and with our local designers, they can showcase their designs and help the massive waste problem cause by clothing industry.",
        image: {
            desktop_view: desktop,
            tablet_view: "../images/projects-view/jandf-clothing-home.jpg",
            other: "../images/projects-view/jandf-clothing-home.jpg"
        },
        liveviewlink: "https://jandf-clothing.vercel.app/",
        viewcodelink: "https://github.com/frankbejo/jandf-clothing",
        status: "online",
        deployment: "vercel",
        stack: ["styled-components","reactjs","react-router","redux","nodejs","express","mongodb","vercel"]
    },
    {
        projectname: "Kanban Board",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus dolor culpa provident aliquid eveniet dignissimos inventore cupiditate! Impedit, quaerat sed!",
        image: {
            desktop_view: products,
            tablet_view: "/static/media/jandf-clothing-products.4698b9dc845751e829f2.JPG",
            other: "/static/media/jandf-clothing-products-tablet.3ef3e3b0f5eff2d36064.JPG"
        },
        liveviewlink: "",
        viewcodelink: "",
        status: "building",
        deployment: "vercel"
    },
    {
        projectname: "Complete the Sentence Mini Game",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus dolor culpa provident aliquid eveniet dignissimos inventore cupiditate! Impedit, quaerat sed!",
        image: {
            desktop_view: products_tablet,
            tablet_view: "/static/media/jandf-clothing-products.4698b9dc845751e829f2.JPG",
            other: "/static/media/jandf-clothing-products-tablet.3ef3e3b0f5eff2d36064.JPG"
        }
        ,
        liveviewlink: "",
        viewcodelink: "",
        status: "online",
        deployment: "vercel"
    }
] 


export const container = {
    hidden: { opacity: 1},
    visible: {
        opacity: 1,
        transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
        }
        }
    };

export const item = {
        hidden: { x: -10, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1
            }
        };

export const Projectitem = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1
            }
        };

