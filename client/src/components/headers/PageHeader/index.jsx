import React from 'react';

// STYLESHEETS
import './pageHeader.css';

const PageHeader = (props) => {
    return (
        <div className="page-header">
            {props.title}
        </div>
    );
};

export default PageHeader;