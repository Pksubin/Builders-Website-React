import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Brand */}
        <div className="brand">
          <span className="brand-mark">▢</span>
          <span className="brand-name">BuildCorp</span>
        </div>

        {/* Toggle */}
        <button
          className={`nav-toggle ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Links */}
        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/login" className="nav-cta">Login</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
