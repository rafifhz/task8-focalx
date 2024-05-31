import { faL } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { menu } from 'react-icons-kit/feather/menu';
import {x} from 'react-icons-kit/feather/x';

export default function Navbar() {
  const [toggle,setToggle]=useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  }
  return (

    <nav className={toggle ? 'navbar expanded' : 'navbar'}>
      <div className="logo">
        <img src={"./public/logo.svg"} style={{ width: "80px" }} />
        <p class="logotext">Digital marketing agency</p>
      </div>
      <div>
        <ul  className='links'>
          <li><a href="index.html" >Home </a></li>
          <li> <a href="index.html" >Services </a></li>
          <li> <a href="index.html">Portfolio </a></li>
          <li ><a href="index.html">Clients & Partners</a></li>
          <li> <a href="index.html">About Us</a></li>
          <li> <a href="index.html">Let's Talk</a></li>
         
        </ul>
        <div className="toggle-icon" onClick={handleToggle}>
            {toggle ? <Icon icon={x} size={28} /> : <Icon icon={menu} size={28}  />}
          
        </div>
      </div>
    </nav>
  );
}

