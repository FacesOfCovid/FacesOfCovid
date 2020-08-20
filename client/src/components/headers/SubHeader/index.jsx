import React from 'react';

// STYLESHEETS
import './subHeader.css';

const SubHeader = ({ title }) => {
    return (
        <div className="sub-header">
            {title}
        </div>
    );
};

export default SubHeader;