import React from "react";
import '../css/Header.css';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to="/">
                <div className="logo">
                    GRIGOM <br/> PICTURES
                </div>
            </Link>

            <nav>
                <ul className="nav_links">
                    <li>
                        <Link to="/">ABOUT</Link>
                    </li>
                    <li>
                        <Link to="/Works">WORKS</Link>
                    </li>
                    <li>
                        <Link to="/Brands">BRANDS</Link>
                    </li>
                    <li>
                        <Link to="/Contact">CONTACT</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
export default Header