import React from "react";

import "./navbar.css";

const Navbar = () => {
    return (
        <nav className="nav">
            <a href="/" className="project-name">
                {/* <img className="logo" src="#" alt="Logo" /> */}
                Faces of Covid
            </a>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" for="menu-btn">
                <span className="nav-icon"></span>
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