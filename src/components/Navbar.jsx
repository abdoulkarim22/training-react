import React from 'react';
import { Link } from 'react-router-dom'; // Importer Link depuis React Router
import './Navbar.css'; // Assurez-vous d'avoir un fichier CSS pour les styles

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/" className="logo">Logo</Link>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                <li className="nav-item"><Link to="/src/pages/Page.jsx" className="nav-link">About</Link></li>
                <li className="nav-item"><Link to="/src/pages/ProfilePage.jsx" className="nav-link">Services</Link></li>
                <li className="nav-item"><Link to="/src/pages/TaskDetailsPage.jsx" className="nav-link">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
