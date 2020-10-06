import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-header">
      <div className="navbar-header__wrap container">
        <Link to="/" className="navbar-header__wrap__home">
          Event Schedule
        </Link>
        <ul className="navbar-header__wrap__menu">
          <li className="navbar-header__wrap__menu__item">
            <Link to="/event-form">Add Event</Link>
          </li>
          <li className="navbar-header__wrap__menu__item">
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
