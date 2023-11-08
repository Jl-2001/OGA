import "./NavbarStyles.css";

import React, {useState} from 'react';
import { Link } from "react-router-dom";

import {FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);


  return (
    <div className="header">
        <Link to="/">
            <h1> Office Genie</h1>
        </Link>
        <ul className={click ? "nav-menu active" :
        "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/About">About</Link>
            </li>
            <li>
                <Link to="/Pricing">Pricing</Link>
            </li>
            <li>
                <Link to="/Solution">Solution</Link>
            </li>
        </ul>
        <div className="hamburger" onClick=
        {handleClick}>
            {click ? (
                <FaTimes size={20} style={{color: "#fff"}}/>)
                 :(
                <FaBars size={20} style={{color: "#fff"
            }}/>
            ) }
        </div>
    </div>
  );
};

export default Navbar;