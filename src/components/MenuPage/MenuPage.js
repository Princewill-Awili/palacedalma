import React from 'react'
import './menupage.css'

const MenuPage = () => {
  return (
    <div className='menuPage'>
      <ul className='menuPageList'>
        <li className='menuPageLink'>
          LUCE <span className='desc'>2ND FLOOR</span>
        </li>
        <li className='menuPageLink'>
          ACQUA<span className='desc'>GROUND FLOOR</span>
        </li>
        <li className='menuPageLink'>
          ROOFTOP<span className='desc'>TOP FLOOR</span>
        </li>
        <li className='menuPageLink'>
          HOTEL<span className='desc'>3RD FLOOR</span>
        </li>
      </ul>
      <div className='menuPageFooter'>
        <span className='tier'>©PRINCEWILL AWILI 2023 (+234)-9010329721</span>
        <span className='tier'>FACEBOOK/INSTAGRAM</span>
        <span className='tier'>PRIVACY / COOKIES</span>
      </div>
    </div>
  );
}

export default MenuPage