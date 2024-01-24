
    import React from 'react';import test from "../pics/logoo.png";
    
// import { BiAtom } from 'react-icons/bi';
import "./nav.css";
// Import the image

function NavBar() {
  return (
    <div className='stic'>
      <div className='Header'>
        <div className='logoo'>
          {/* <BiAtom /> */}
          {/* Use the imported image */}
          <img className='picc' src={test} alt="Logo" />
        </div>
        <div>
          <ul className='nav'>
            <li className='lii'>Home</li>
            <li className='lii'>Posts</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
