import React from 'react'
import { Link, useLocation } from "react-router-dom";


function Navbar() {
    const location = useLocation();

    return (
        <div>
            <ul className="nav nav-bar">
                <li className="Home-nav">
                    <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        Home
                    </Link>
                </li>
                <li className="Home-nav">
                    <Link to="/projects" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        Projects
                    </Link>
                </li>
                <li className="Home-nav">
                    <Link to="/pictures" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        Pictures
                    </Link>
                </li>
                <li className="Home-nav">
                    <Link to="/contact" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;
