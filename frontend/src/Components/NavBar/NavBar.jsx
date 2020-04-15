import React from "react";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
   
    <nav className="navbar navbar-dark shadow bg-dark"  role="navigation" aria-label="main navigation">
      <div className=" px-5">
        <Link className="text-warning" to="/">
          Human Resource portal
        </Link>
        <Link className="px-5 text-info" to="/Search">
          Search
        </Link>
        <Link className="px-5 text-info" to="/Hire">
          Hire New
        </Link>
      </div>
    </nav>
    
  );
};

export default NavBar;
