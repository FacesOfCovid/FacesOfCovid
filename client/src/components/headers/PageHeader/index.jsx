import React from 'react';

// STYLESHEETS
import './pageHeader.css';

const PageHeader = ({title}) => {
    return (
        <h1 className="page-header">
            {title}
        </h1>
    );
};

export default PageHeader;