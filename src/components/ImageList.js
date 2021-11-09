import React from "react";

const ImageList = (props) => {

    const imagesUrl = props.images.map(({id, description, urls}) => <img key={id} alt={description} src={urls.regular} /> )
    return <div>{imagesUrl}</div>

}

export default ImageList;