import "./experience.css";
import { textArr } from "../../static";
import { FaRegEye as EyeIcon } from "react-icons/fa";

import spaImg1 from "../../assets/acquacollectibles/pool5.jpg";
import spaImg2 from "../../assets/acquacollectibles/spatreat2.webp";
import spaImg3 from "../../assets/acquacollectibles/pool3.jpg";

import lImg1 from "../../assets/lucecollectibles/chef2.jpg";
import lImg2 from "../../assets/lucecollectibles/dish3.jpg";
import lImg3 from "../../assets/lucecollectibles/luce1.jpg";

import rImg1 from "../../assets/roofcollectibles/rooftop.jpg";
import rImg2 from "../../assets/roofcollectibles/roof3.jpg";
import rImg3 from "../../assets/roofcollectibles/roof5.jpg";

import hImg1 from "../../assets/hotelcollectibles/room3.jpg";
import hImg2 from "../../assets/hotelcollectibles/bath.jpg";
import hImg3 from "../../assets/hotelcollectibles/room4.jpg";
import OrderSection from "../OrderSection/OrderSection";

const acquaArr = [spaImg1, spaImg2, spaImg3];
const luceArr = [lImg1, lImg2, lImg3];
const rArr = [rImg1, rImg2, rImg3];
const hArr = [hImg1, hImg2, hImg3];

console.log(textArr);

const resolveBg = (mode = "default") => {
  if (mode !== "default") {
    return `landingSection ${mode}Bg`;
  }
  return "landingSection";
};

const resolveChapters = (mode = "default") => {
  if (mode !== "default") {
    return `chapterPage ${mode}Chapter`;
  }
  return "chapterPage";
};

const Experience = ({ landingTitle, epilogue, story, mode }) => {
  return (
    <div className='xperience'>
      <section className={resolveBg(mode)}>
        <div className='lsPageOne'>
          <p className='presents'>PALACE D' ALMA PRESENTS</p>
          <h1 className='lsTitle'>{landingTitle}</h1>
          <p className='epilogue'>{epilogue}</p>
          <div className='guide'>
            <EyeIcon className='eye' />
            <div className='rotator'>
              {textArr.map((letter, index) => (
                <p
                  key={index}
                  className='letter'
                  style={{
                    transform: `rotateZ(${(360 / textArr.length) * index}deg)`,
                  }}
                >
                  {letter}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className='lsGallery'>
          <div className={resolveChapters(mode)}>
            <p className='cpTitle'>{story.title}</p>
            <p className='cpContent'>{story.content}</p>
            <p className='remarks'>You are Cherished - Palace D' Alma</p>
          </div>
          {mode === "acqua" && (
            <>
              {acquaArr.map((img, index) => (
                <img key={index} src={img} alt='lsImg' className='lsImg' />
              ))}
            </>
          )}
          {mode === "luce" && (
            <>
              {luceArr.map((img, index) => (
                <img key={index} src={img} alt='lsImg' className='lsImg' />
              ))}
            </>
          )}
          {mode === "roof" && (
            <>
              {rArr.map((img, index) => (
                <img key={index} src={img} alt='lsImg' className='lsImg' />
              ))}
            </>
          )}
          {mode === "hotel" && (
            <>
              {hArr.map((img, index) => (
                <img key={index} src={img} alt='lsImg' className='lsImg' />
              ))}
            </>
          )}
          <OrderSection mode={mode} />
        </div>
      </section>
    </div>
  );
};

export default Experience;
