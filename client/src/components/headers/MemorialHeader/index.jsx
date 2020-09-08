import React from 'react';

// STYLESHEETS
import './memorialHeader.css';

const MemorialHeader = ({ name, cityOfResidence, stateOfResidence }) => {
    return (
        <div className="memorial-header">
            <div className="memorial-name">
                {name}
            </div>
            <div className="residence">
                {cityOfResidence}, {stateOfResidence}
            </div>
        </div>
    );
};

export default MemorialHeader;