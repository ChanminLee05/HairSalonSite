import React from 'react';
import './NavBar.css';
import {HairSalon} from "../Model/HairSalon";
import {Link} from "react-router-dom";
import InstagramImg from "../Assets/instagram-icon.png";

type NavProps = & {
    info: HairSalon
}

const NavBar: React.FC<NavProps> = ({info}) => {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <p className="brand-title1">Shine</p>
                    <p className="brand-title2">Salon</p>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse shine-tab" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#about-us">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#service-page">Our Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.instagram.com/shine_0113/">Instagram</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#FAQ">FAQ</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/book">Book Now</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
