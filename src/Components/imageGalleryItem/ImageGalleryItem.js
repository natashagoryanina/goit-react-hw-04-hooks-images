import React from 'react';
import {ImageItemContainer} from './ImageGalleryItemStyled';

const ImageGalleryItem = ({imgUrl, imgAlt, imgId, onClick}) => {
    return (
        <ImageItemContainer>
            <img src={imgUrl} alt={imgAlt} key={imgId} id={imgId} onClick={onClick} className="ImageGalleryItem-image" />
        </ImageItemContainer>
    );
}

export default ImageGalleryItem;