import React from 'react';

// STYLESHEETS
import './memorialHeader.css';

const MemorialHeader = ({ name, residence }) => {
    return (
        <div className="memorial-header">
            <div className="memorial-name">
                {name}
            </div>
            <div className="residence">
                {residence}
            </div>
        </div>
    );
};

export default MemorialHeader;