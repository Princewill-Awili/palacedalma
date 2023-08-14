import "./menupage.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../App";

const MenuPage = () => {
  const {showMenu,setShowMenu} = useContext(MyContext);
  const navigate = useNavigate();
  return (
    <div className='menuPage'>
      <ul className='menuPageList'>
        <li
          className='menuPageLink'
          onClick={() => {
            setShowMenu(!showMenu);
            navigate("/luce");
          }}
        >
          LUCE <span className='desc'>2ND FLOOR</span>
        </li>
        <li
          className='menuPageLink'
          onClick={() => {
            setShowMenu(!showMenu);
            navigate("/acqua");
          }}
        >
          ACQUA<span className='desc'>GROUND FLOOR</span>
        </li>
        <li
          className='menuPageLink'
          onClick={() => {
            setShowMenu(!showMenu);
            navigate("/rooftop");
          }}
        >
          ROOFTOP<span className='desc'>TOP FLOOR</span>
        </li>
        <li
          className='menuPageLink'
          onClick={() => {
            setShowMenu(!showMenu);
            navigate("/hotel");
          }}
        >
          HOTEL<span className='desc'>3RD FLOOR</span>
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
