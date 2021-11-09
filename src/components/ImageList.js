import React from "react";

const ImageList = (props) => {

    const imagesUrl = props.images.map(image => <img src={image.urls.regular} /> )
    return <div>{imagesUrl}</div>

}

export default ImageList;