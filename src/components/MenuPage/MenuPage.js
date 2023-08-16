import "./menupage.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../App";
import Img from '../../assets/acquaSection.jpg'
import LuceImg from '../../assets/luceSectionImage.jpg'
import RoofImg from '../../assets/rooftopSectionImage.jpg'
import HotelImg from '../../assets/hotelSectionImage.webp'

const MenuPage = () => {
  const {showMenu,setShowMenu,setLoad} = useContext(MyContext);
  const navigate = useNavigate();

  const loadPage = (page) => {
    setLoad(true);
    setTimeout(() => setLoad(false), 1000);
    setShowMenu(!showMenu)
    navigate(`/${page}`);
  }

  return (
    <div className='menuPage'>
      <ul className='menuPageList'>
        <li
          className='menuPageLink'
          onClick={()=> loadPage('luce')}
        >
          LUCE <span className='desc'>2ND FLOOR</span>
          <img src={LuceImg} alt='snapshot' className='linkImage' />
        </li>
        <li
          className='menuPageLink'
          onClick={()=>loadPage('acqua')}
        >
          ACQUA<span className='desc'>GROUND FLOOR</span>
          <img src={Img} alt='snapshot' className='linkImage' />
        </li>
        <li
          className='menuPageLink'
          onClick={()=> loadPage('rooftop')}
        >
          ROOFTOP<span className='desc'>TOP FLOOR</span>
          <img src={RoofImg} alt='snapshot' className='linkImage' />
        </li>
        <li
          className='menuPageLink'
          onClick={()=> loadPage('hotel')}
        >
          HOTEL<span className='desc'>3RD FLOOR</span>
          <img src={HotelImg} alt='snapshot' className='linkImage' />
        </li>
      </ul>
      <div className='menuPageFooter'>
        <span className='tier'>
          ©PALACE D' ALMA 2023 By{" "}
          <span className='smallFooterTxt'>Princewill Awili</span>
        </span>
        <span className='tier'>FACEBOOK/INSTAGRAM</span>
        <span className='tier'>PRIVACY / COOKIES</span>
      </div>
    </div>
  );
};

export default MenuPage;
