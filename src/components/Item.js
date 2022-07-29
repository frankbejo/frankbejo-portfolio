const Item = ({index, image, projectname, desc}) => {
    
    return(
        <li className={(index %= 2) === 1 ? "reverse":""}>
            <div className="image-container">
                <img src={image.desktop_view} alt={image.desktop_view} />
            </div>
            <div className="item-right">
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
            </div>
        </li>
    )
}

export default Item;