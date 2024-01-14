import React from 'react';
import SearchMovie from './SearchMovie';
import Logo from './Logo';

function Navbar({children, onHandleSearch}) {
    
  return (
    <nav className="nav-bar">
      <Logo/>
      <SearchMovie onHandleSearch={onHandleSearch}/>
      {children}
    </nav>
    
  );
}

export default Navbar;
