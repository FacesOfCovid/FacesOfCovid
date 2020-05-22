import React from 'react';

// STYLESHEETS
import './subHeader.css';

const SubHeader = (props) => {
    return (
        <div className="sub-header">
            {props.title}
        </div>
    );
};

export default SubHeader;