import "./ordersection.css";
import Card from "../Card/Card";
import { getDrinks } from "../../static";

const myDrinks = getDrinks();


const OrderSection = ({ mode }) => {
  const resolveOrderIntro = (mode = "default") => {
    if (mode !== "default") {
      return `chapterPage ${mode}Chapter`;
    }
    return "chapterPage";
  };

  return (
    <div className='orderSection'>
      <div className={resolveOrderIntro(mode)}>
        <p className='cpTitle'>Our Offerings</p>
        <p className='cpContent'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
          fugiat atque corporis laboriosam consectetur. Omnis magni magnam eaque
          itaque porro sunt dicta iste ut nobis cumque! Labore, sapiente
          inventore. Facilis quis autem hic architecto, corrupti aspernatur at
          possimus necessitatibus consequuntur tenetur? Explicabo voluptates
          repellendus rem, quo eligendi necessitatibus. Excepturi, ipsam.
        </p>
        <p className='remarks'>You are Cherished - Palace D' Alma</p>
      </div>
      <div className='offerings'>
        {mode === "roof" && (
          <>
            {myDrinks.map((drink, index) => (
              <Card
                key={index}
                src={drink.drinkImage}
                title={drink.drinkName}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default OrderSection;
