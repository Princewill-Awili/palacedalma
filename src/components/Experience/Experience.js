import "./experience.css";
import { textArr } from "../../static";
import { FaRegEye as EyeIcon } from "react-icons/fa";

import spaImg1 from "../../assets/acquacollectibles/pool5.jpg";
import spaImg2 from "../../assets/acquacollectibles/spatreat2.webp";
import spaImg3 from "../../assets/acquacollectibles/pool3.jpg";

const acquaArr = [spaImg1,spaImg2,spaImg3];

console.log(textArr);

const Experience = ({ landingTitle, epilogue, story, acqua }) => {
  return (
    <div className='xperience'>
      <section className={acqua ? 'landingSection acquaBg' :'landingSection'}>
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
          <div className={acqua ? "chapterPage acquaChapter" : "chapterPage"}>
            <p className='cpTitle'>{story.title}</p>
            <p className='cpContent'>{story.content}</p>
            <p className='remarks'>You are Cherished - Palace D' Alma</p>
          </div>
          {acqua && (
            <>
              {acquaArr.map((img, index) => (
                <img key={index} src={img} alt='lsImg' className='lsImg' />
              ))}
            </>
          )}
          {}
          {}
        </div>
      </section>
    </div>
  );
};

export default Experience;
