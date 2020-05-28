import React from 'react';

// STYLESHEETS
import './memorialHeader.css';

const MemorialHeader = ({ title, name }) => {
    return (
        <div className="memorial-header">
            <div className="memorial-sub">
                {title}
            </div>
            <div className="memorial-name">
                {name}
            </div>
        </div>
    );
};

export default MemorialHeader;