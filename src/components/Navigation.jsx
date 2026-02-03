import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.css"; // We'll create this or just inline/module for now

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/admin">Admin Portal</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
