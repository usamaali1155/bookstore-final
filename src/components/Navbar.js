import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "1%", width: "98%" }}>
      <ul style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", gap: "20px" }}>
        <li>
          <Link style={{ fontFamily: "fantasy", fontStyle: "normal", fontSize: "2rem", textDecoration: "none", color: "#00B2FF" }} to="/">Books</Link>
        </li>
        <li>
          <Link style={{ fontFamily: "fantasy", fontStyle: "normal", fontSize: "2rem", textDecoration: "none", color: "#00B2FF" }} to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
