import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <div>
      {/* <nav className="white-mynav">
        <ul className="mynav-list">
          <li className="mynav-item">Groceries</li>
          <li className="mynav-item">Wears</li>
          <li className="mynav-item">Sports</li>
          <li className="mynav-item">Electronics</li>
        </ul>
      </nav> */}
      <nav className="black-mynav">
        <ul className="mynav-list">
          <li className="mynav-item" id="mynav-item-main"><NavLink to="/">Home</NavLink></li>
          <li className="mynav-item">Favorites</li>
          <li className="mynav-item">Find Friends</li>
        </ul>
        <ul className="mynav-list">
          <li className="mynav-item"><NavLink to="/pictures">My Album</NavLink></li>
          <li className="mynav-item"><NavLink to="/pictures/new">Add New Picture</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
