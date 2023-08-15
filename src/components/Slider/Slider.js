import "./slider.css";
import img1 from '../../assets/lucecollectibles/luce1.jpg'
import img2 from '../../assets/lucecollectibles/dish3.jpg'
import img3 from "../../assets/lucecollectibles/guest1.jpg";


import aimg1 from '../../assets/acquacollectibles/poolrelax.jpg'
import aimg2 from '../../assets/acquacollectibles/pool5.jpg'
import aimg3 from "../../assets/acquacollectibles/pool3.jpg";
import aimg4 from "../../assets/acquacollectibles/poolrelax2.jpg";

import himg1 from '../../assets/hotelcollectibles/room1.jpg'
import himg2 from "../../assets/hotelcollectibles/balcony.jpg";
import himg3 from "../../assets/hotelcollectibles/bath.jpg";
import himg4 from "../../assets/hotelcollectibles/room4.jpg";






const Slider = ({luce,acqua,hotel}) => {
  return (
    <div className='slider'>
      {luce && (
        <>
          <div className='imgHolder'>
            <img src={img1} alt='slideImg' className='slideImg' />
            <img src={img2} alt='slideImg' className='slideImg' />
            <img src={img3} alt='slideImg' className='slideImg' />
            <img src={img1} alt='slideImg' className='slideImg' />
            <img src={img2} alt='slideImg' className='slideImg' />
            <img src={img3} alt='slideImg' className='slideImg' />
          </div>
          <div className='imgHolder'>
            <img src={img1} alt='slideImg' className='slideImg' />
            <img src={img2} alt='slideImg' className='slideImg' />
            <img src={img3} alt='slideImg' className='slideImg' />
            <img src={img1} alt='slideImg' className='slideImg' />
            <img src={img2} alt='slideImg' className='slideImg' />
            <img src={img3} alt='slideImg' className='slideImg' />
          </div>
        </>
      )}
      {acqua && (
        <>
          <div className='imgHolder'>
            <img src={aimg2} alt='slideImg' className='slideImg' />
            <img src={aimg4} alt='slideImg' className='slideImg' />
            <img src={aimg3} alt='slideImg' className='slideImg' />
            <img src={aimg2} alt='slideImg' className='slideImg' />
            <img src={aimg4} alt='slideImg' className='slideImg' />
            <img src={aimg3} alt='slideImg' className='slideImg' />
          </div>
          <div className='imgHolder'>
            <img src={aimg2} alt='slideImg' className='slideImg' />
            <img src={aimg4} alt='slideImg' className='slideImg' />
            <img src={aimg3} alt='slideImg' className='slideImg' />
            <img src={aimg2} alt='slideImg' className='slideImg' />
            <img src={aimg4} alt='slideImg' className='slideImg' />
            <img src={aimg3} alt='slideImg' className='slideImg' />
            <img src={aimg4} alt='slideImg' className='slideImg' />
          </div>
        </>
      )}
      {hotel && (
        <>
          <div className='imgHolder'>
            <img src={himg1} alt='slideImg' className='slideImg' />
            <img src={himg2} alt='slideImg' className='slideImg' />
            <img src={himg3} alt='slideImg' className='slideImg' />
            <img src={himg4} alt='slideImg' className='slideImg' />
            <img src={himg1} alt='slideImg' className='slideImg' />
            <img src={himg2} alt='slideImg' className='slideImg' />
            <img src={himg3} alt='slideImg' className='slideImg' />
            <img src={himg4} alt='slideImg' className='slideImg' />
          </div>
          <div className='imgHolder'>
            <img src={himg1} alt='slideImg' className='slideImg' />
            <img src={himg2} alt='slideImg' className='slideImg' />
            <img src={himg3} alt='slideImg' className='slideImg' />
            <img src={himg4} alt='slideImg' className='slideImg' />
            <img src={himg1} alt='slideImg' className='slideImg' />
            <img src={himg2} alt='slideImg' className='slideImg' />
            <img src={himg3} alt='slideImg' className='slideImg' />
            <img src={himg4} alt='slideImg' className='slideImg' />
          </div>
        </>
      )}
    </div>
  );
};

export default Slider;
