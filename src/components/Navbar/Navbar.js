import React from 'react'
import './navbar.css'
import { HiOutlineMenuAlt4 as MenuIcon } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className='navbar'>
     <h3 className="logo">Palace D' Alma</h3>
     <div className="menuContainer">
          <p className="region">NG</p>
          <div className="menu">
               <span className="MenuTxt">
                    Menu
               </span>
               <MenuIcon/>
          </div>
     </div>
    </div>
  )
}

export default Navbar