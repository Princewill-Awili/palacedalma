import {useContext} from 'react'
import { MyContext } from '../../App';
import './navbar.css'
import { HiOutlineMenuAlt4 as MenuIcon } from "react-icons/hi";
import {AiOutlineClose as CloseIcon} from 'react-icons/ai'
import MenuPage from '../MenuPage/MenuPage';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
     const navigate = useNavigate();
     const {setMode,showMenu, setShowMenu, setLoad} = useContext(MyContext);

     const toggleMenu = () =>{
          setShowMenu(!showMenu)
     }

     const goHome = () => {
      setLoad(true);
      setMode("home");
      if (showMenu) {
        setShowMenu(!showMenu);
      }
      navigate("/");
      setTimeout(()=>{setLoad(false)},1000);
     }

     

  return (
    <div className={showMenu  ? "navbar menuOpen" : "navbar"}>
      <h3 className='logo' onClick={goHome}>
        Palace D' Alma
      </h3>
      <div className='menuContainer'>
        <p className='region'>NG</p>
        <div className={showMenu ? "menu menuBorder" : "menu"}>
          <span className='MenuTxt' onClick={toggleMenu}>
            {showMenu ? 'Close' : 'Menu'}
          </span>
          <>
            {showMenu ? (
              <CloseIcon onClick={toggleMenu} />
            ) : (
              <MenuIcon onClick={toggleMenu} />
            )}
          </>
        </div>
      </div>
      {showMenu && <MenuPage />}
    </div>
  );
}

export default Navbar