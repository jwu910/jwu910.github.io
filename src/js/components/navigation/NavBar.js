import React from 'react';

import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="main-links" ref="navbar">
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-list-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-list-item">
              <Link className="nav-link" to="/portfolio">Portfolio</Link>
            </li>

            <li className="nav-list-item">
              <Link className="nav-link" to="/samples">Sample Sites</Link>
            </li>

            <li className="nav-list-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;