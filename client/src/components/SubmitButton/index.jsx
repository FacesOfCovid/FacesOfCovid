import React from 'react';

// STYLESHEETS
import './submitButton.css';

const SubmitButton = (props) => {
    return (
        <button className="submit-button">
            {props.label}
        </button>
    );
};

export default SubmitButton;