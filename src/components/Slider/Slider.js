import "./slider.css";
import img1 from '../../assets/lucecollectibles/luce1.jpg'
import img2 from '../../assets/lucecollectibles/dish3.jpg'
import img3 from "../../assets/lucecollectibles/guest1.jpg";
import img4 from "../../assets/lucecollectibles/chef2.jpg";


const Slider = () => {
  return (
    <div className='slider'>
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
        <img src={img4} alt='slideImg' className='slideImg' />
      </div>
    </div>
  );
};

export default Slider;
