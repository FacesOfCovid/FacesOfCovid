import React from 'react';

// STYLESHEETS
import './blackWhiteImage.css';

const BlackWhiteImage = ({ image }) => {
    return (
        <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
    );
};

export default BlackWhiteImage;