import React from 'react';

// STYLESHEETS
import './pageHeader.css';

const PageHeader = ({title}) => {
    return (
        <div className="page-header">
            {title}
        </div>
    );
};

export default PageHeader;