import "./experience.css";
import { textArr } from "../../static";
import {FaRegEye as EyeIcon} from 'react-icons/fa'

console.log(textArr);


const Experience = ({landingTitle,epilogue}) => {
  return (
    <div className='xperience'>
      <section className='landingSection'>
        <div className='lsPageOne'>
          <p className='presents'>PALACE D' ALMA PRESENTS</p>
          <h1 className='lsTitle'>{landingTitle}</h1>
          <p className='epilogue'>{epilogue}</p>
          <div className='guide'>
            <EyeIcon className="eye"/>   
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
      </section>
    </div>
  );
};

export default Experience;
