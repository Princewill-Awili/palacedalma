import {useContext} from 'react'
import { MyContext } from '../../App';
import './navbar.css'
import { HiOutlineMenuAlt4 as MenuIcon } from "react-icons/hi";
import MenuPage from '../MenuPage/MenuPage';

const Navbar = () => {
     const {setMode,showMenu, setShowMenu} = useContext(MyContext);

     const toggleMenu = () =>{
          setShowMenu(!showMenu)
     }
  return (
    <div className={showMenu ? 'navbar menuOpen': 'navbar'} >
      <h3 className='logo' onClick={()=>setMode('home')}>Palace D' Alma</h3>
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