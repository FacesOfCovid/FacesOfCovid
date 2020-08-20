import React from 'react';

// STYLES
import './blackWhiteImage.css';

const BlackWhiteImage = ({ src, alt }) => {
    return (
        <img className="b-w" src={src} alt={alt} />
    );
};

export default BlackWhiteImage;