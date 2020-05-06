import React from "react";

//COMPONENTS
import TitleLogo from '../TitleLogo';
import "./navbar.css";

const Navbar = () => {
    return (
        <nav className="nav">
            <a href="/" className="project-name navbar-brand">
                {/* <img className="logo" src="#" alt="Logo" /> */}
                <TitleLogo />
            </a>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" for="menu-btn">
                <span className="nav-icon navbar-collapse"></span>
            </label>
            <ul className="menu">
                <li><a href="/feed">Feed</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/logout">Logout</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;