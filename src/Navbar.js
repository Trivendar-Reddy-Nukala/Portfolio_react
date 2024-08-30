import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container-fluid">
                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/About">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/Blogs">Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/Skill">Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/Projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/Certificates">Certifications</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/Contact">Contact Me</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
