import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ title, icon }) => (
  <nav className="navbar bg-primary">
    <h1>
      <i className={icon} style={{ display: "inline" }}>
        {" "}
      </i>
      {title}
    </h1>
    <ul>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </ul>
  </nav>
);

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};
export default Navbar;
