import React from 'react';

// STYLESHEETS
import './footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>
                © {currentYear}
                <a href='https://github.com/FacesOfCovid/FacesOfCovid'> Faces of Covid</a>
            </p>
        </footer>
    );
};

export default Footer;