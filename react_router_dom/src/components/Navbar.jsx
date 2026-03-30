import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">MyApp</h2>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Course</Link></li>
        <li><Link to="/contact">Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;