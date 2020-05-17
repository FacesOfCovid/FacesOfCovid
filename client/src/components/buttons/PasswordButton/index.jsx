import React from 'react';

// STYLESHEETS
import './passwordButton.css';

const PasswordButton = (props) => {
    return (
        <button className="change-pw-button">
            {props.label}
        </button>
    );
};

export default PasswordButton;