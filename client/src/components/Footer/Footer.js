import React from 'react';

// STYLESHEETS
import './footer.sass';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>© {currentYear}</footer>
    );
};

export default Footer;