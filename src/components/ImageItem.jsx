import React from 'react';

const ImageItem = ({src}) => {
    return (
        <div className={'ImageItem'}>
            <img src={src} alt=""/>
        </div>
    );
};

export default ImageItem;
