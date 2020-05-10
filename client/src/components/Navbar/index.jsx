import React from "react";

//COMPONENTS
import "./navbar.css";

const Nav = () => {
    return (
        <nav className="nav">
            <a href="/" className="project-name navbar-brand">
                {/* <img className="logo" src="#" alt="Logo" /> */}
                Faces of Covid
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


        // <Navbar bg="light" expand="lg">
        //     <Navbar.Brand href="/">Faces of Covid</Navbar.Brand>
        //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //     <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav className="mr-auto">
        //             <Nav.Link href="/feed">Feed</Nav.Link>
        //             <Nav.Link href="/profile">Profile</Nav.Link>
        //             <Nav.Link href="/about">About Us</Nav.Link>
        //             <Nav.Link href="/logout">Logout</Nav.Link>
        //         </Nav>
        //     </Navbar.Collapse>
        // </Navbar>
    );
}

export default Nav;