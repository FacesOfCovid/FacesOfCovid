import React from 'react';

// STYLESHEETS
import './submitButton.css';

const SubmitButton = ({label}) => {
    return (
        <button className="submit-button">
            {label}
        </button>
    );
};

export default SubmitButton;