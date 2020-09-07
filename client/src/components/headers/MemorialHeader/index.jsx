import React from 'react';

// STYLESHEETS
import './memorialHeader.css';

const MemorialHeader = ({ name, dateOfBirth, dateOfPassing }) => {
    return (
        <div className="memorial-header">
            <div className="memorial-name">
                {name}
            </div>
            <div className="memorial-age">
                {dateOfBirth} - {dateOfPassing}
            </div>
        </div>
    );
};

export default MemorialHeader;