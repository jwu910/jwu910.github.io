import React from 'react';

import NavBar from './navigation/NavBar';

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <NavBar />
      </div>
    )
  }
}

export default Header;