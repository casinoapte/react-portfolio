import React from 'react'
import { Link, useLocation } from "react-router-dom";


function Footer() {
    const location = useLocation();

    return (
        <div className="row">
            <div className="col-12">


                <ul className="footer">
                    <li className="footer">
                        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                            Home
                    </Link>
                    </li>
                    <li className="footer">
                        <Link to="/projects" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                            Projects
                    </Link>
                    </li>
                    <li className="footer">
                        <Link to="/pictures" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                            Pictures
                    </Link>
                    </li>
                    <li className="footer">
                        <Link to="/contact" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                            Contact
                    </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;
