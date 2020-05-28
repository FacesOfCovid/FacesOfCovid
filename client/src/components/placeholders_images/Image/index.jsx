import React from 'react';

// STYLESHEETS
import './image.css';

const Image = ({ image }) => {
    return (
        <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
    );
};

export default Image;