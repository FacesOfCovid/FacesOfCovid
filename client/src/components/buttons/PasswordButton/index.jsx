import React from 'react';

// STYLESHEETS
import './passwordButton.css';

const PasswordButton = ({ label }) => {
    return (
        <button className="change-pw-button">
            {label}
        </button>
    );
};

export default PasswordButton;