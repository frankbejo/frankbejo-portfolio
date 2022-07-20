import pic from '../images/projects-view/jandf-clothing-products-tablet.JPG'

const Item = (projects) => {
    const {projectname, image, desc} = projects;
    console.log(pic)
    return(
        <li>
            <div className="image-container">
            <img src={image.desktop_view} alt="adawdawd" />
            </div>
            <div className="project-tittle">
                <span>{projectname}</span>
                <p>{desc}</p>
            </div>
            <div className="bottom-links">
                <div className="view-code">
                    viewcode
                </div>
                <div className="view-live">
                    viewlive
                </div>
            </div>
        </li>
    )
}

export default Item;