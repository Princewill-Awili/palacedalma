import "./ordersection.css";
import Card from "../Card/Card";
import { getDrinks, rooms } from "../../static";


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
          {mode === "roof" && (
            <>
              Sip on elixirs that ignite the soul as you're cradled between the
              cosmos and the city's heartbeat. With panoramic views and gentle
              breezes, conversations and laughter become stardust in the night.
              Here, time slows, and worries fade into the moonlit abyss,
              inviting you to a voyage of spirit and connection. Welcome to the
              epitome of grandeur at our rooftop in "Palace D' Alma."
            </>
          )}
          {mode === "hotel" && (
            <>
              Welcome to "Hotel - Palace D' Alma," where every room is a chapter in a
              symphony of luxury and elegance, each note more enchanting than
              the last. Step into a realm of opulence where the past and present
              converge. Majestic Suites are a tapestry of history and modernity,
              adorned with regal furnishings and adorned with contemporary
              comforts. Here, you'll discover the perfect harmony between
              timeless grace and modern indulgence.
            </>
          )}
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
        {mode === "hotel" && (
          <>
            {rooms.map((room, index) => (
              <Card key={index} src={room.image} title={room.category} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default OrderSection;
