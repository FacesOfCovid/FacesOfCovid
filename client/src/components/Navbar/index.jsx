import React, { useState } from "react";

// STYLES
import "./navbar.css";

// ICONS
import close from "../../assets/icons/close.svg";
import menu from "../../assets/icons/menu.svg";

const Nav = () => {
    const [ openNav, setOpenNav ] = useState(false);

    return (
        <nav>
            <a href="/" className="project-name">
                {/* <img className="logo" src="#" alt="Logo" /> */}
                Traces of Covid
            </a>
            {
                openNav
                ?
                <>
                <div className="menu-btn" onClick={() => setOpenNav(false)}>
                    <img src={close} alt="Close Menu" />
                </div>
                <div className="menu-dropdown">
                    <a href="/feed">Feed</a>
                    <a href="/profile">Profile</a>
                    <a href="/about">About Us</a>
                    <a href="/logout">Logout</a>
                </div>
                </>
                :
                <div className="menu-btn" onClick={() => setOpenNav(true)}>
                    <img src={menu} alt="Open Menu" />
                </div>
            }
        </nav>
    );
}

export default Nav;