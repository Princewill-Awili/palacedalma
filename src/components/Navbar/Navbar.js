import React, {useState} from 'react'
import './navbar.css'
import { HiOutlineMenuAlt4 as MenuIcon } from "react-icons/hi";
import MenuPage from '../MenuPage/MenuPage';

const Navbar = () => {
     const [showMenu, setShowMenu] = useState(false);

     const toggleMenu = () =>{
          setShowMenu(!showMenu)
     }
  return (
    <div className={showMenu ? 'navbar menuOpen': 'navbar'} >
      <h3 className='logo'>Palace D' Alma</h3>
      <div className='menuContainer'>
        <p className='region'>NG</p>
        <div className={showMenu ? 'menu menuBorder' : 'menu'}>
          <span className='MenuTxt' onClick={toggleMenu}>Menu</span>
          <MenuIcon  onClick={toggleMenu}/>
        </div>
      </div>
      {showMenu && <MenuPage />}
    </div>
  );
}

export default Navbar