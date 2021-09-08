import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <div className="container">
        <h2 className="logo">momen</h2>
        <nav>
          <ul className="list-links">
            <li>
              <NavLink to="/projects">projects</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
