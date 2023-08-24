import "./card.css";
import { useContext } from "react";
import { MyContext } from "../../App";

const Card = ({ src, title }) => {
  const { mode } = useContext(MyContext);

  const resolveCardOptions = () => {
    if (mode === "luce") {
      return ["ORDER A TAKEAWAY", "MAKE A RESERVATION"];
    } else if (mode === "acqua") {
      return ["MAKE A RESERVATION", "INQUIRIES"];
    } else if (mode === "rooftop") {
      return ["MAKE A RESERVATION"];
    } else if (mode === "hotel") {
      return ["BOOK A STAY"];
    } else {
      return [];
    }
  };

  console.log("mode from card:",mode);
  return (
    <div className='card' >
      <img src={src} alt='cardImg' className='cardImg' />
      <p className='cardTitle'>{title}</p>
      <div className='cardVeil'>
        {resolveCardOptions().map((option, index) => (
          <p className='cardOptions' key={index}>
            {option}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Card;
