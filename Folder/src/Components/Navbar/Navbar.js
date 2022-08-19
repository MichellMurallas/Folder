import React from 'react';
import "./Navbar.css";

const Navbar = ({isScrolling}) => { 
  const toTheTo = () =>{
  window.scrollTo({ top: 0, left: 0, behavior: "smooth"})
};
return(
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null }`}>
    <div className="navbar-logo" onClick={toTheTo}  >
      Developer Fromt-End
    </div>
    </nav>
  )
}

export default Navbar
