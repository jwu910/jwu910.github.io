import React from 'react';

import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <div className="main-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>

            <li>
              <Link to="/samples">Sample Sites</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;