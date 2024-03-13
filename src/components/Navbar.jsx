import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a href="#" className="logo">Logo</a>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Services</a></li>
                <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
