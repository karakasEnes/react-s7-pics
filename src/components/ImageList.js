import "./ImageList.css";
import React from "react";

const ImageList = (props) => {

    const imagesUrl = props.images.map(({id, description, urls}) => {
        return <img key={id} alt={description} src={urls.regular} />
    })
    
    return <div className="image-list">{imagesUrl}</div>

}

export default ImageList;