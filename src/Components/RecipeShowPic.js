import React from 'react';
import Image from 'react-bootstrap/Image'

const RecipeShowPic = ({imgUrl, name}) => {
    return (
        <div>
            <h3>{name}</h3>
            <Image src={imgUrl} rounded />
        </div>
    );
}

export default RecipeShowPic;
