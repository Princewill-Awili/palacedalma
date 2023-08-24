import "./ordersection.css";
import Card from "../Card/Card";
import { getDrinks, rooms, dishes, spaServices } from "../../static";

const myDrinks = getDrinks();

const OrderSection = ({ mode }) => {

  const resolveOrderIntro = (mode = "default") => {
    if (mode !== "default") {
      return `chapterPage ${mode}Chapter`;
    }
    return "chapterPage";
  };

  console.log(dishes);

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
              Welcome to "Hotel - Palace D' Alma," where every room is a chapter
              in a symphony of luxury and elegance, each note more enchanting
              than the last. Step into a realm of opulence where the past and
              present converge. Majestic Suites are a tapestry of history and
              modernity, adorned with regal furnishings and adorned with
              contemporary comforts. Here, you'll discover the perfect harmony
              between timeless grace and modern indulgence.
            </>
          )}
          {mode === "luce" && (
            <>
              Welcome to "Hotel - Palace D' Alma," where every room is a chapter
              in a symphony of luxury and elegance, each note more enchanting
              than the last. Step into a realm of opulence where the past and
              present converge. Majestic Suites are a tapestry of history and
              modernity, adorned with regal furnishings and adorned with
              contemporary comforts. Here, you'll discover the perfect harmony
              between timeless grace and modern indulgence.
            </>
          )}
          {mode === "acqua" && (
            <>
              Embark on a holistic journey of rejuvenation with our Wellness Spa
              Services.Indulge in blissful tranquility with our Tranquil
              Retreats. These services combine soothing massages, calming
              aromas, and gentle techniques to melt away stress and create a
              sense of profound relaxation. Whether you seek the embrace of
              water or the embrace of wellness, our hotel's swimming pool and
              spa services offer a myriad of experiences designed to pamper your
              senses, restore your spirit, and create unforgettable memories.
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
        {mode === "luce" && (
          <>
            {dishes.map((dish, index) => (
              <Card key={index} src={dish.image} title={dish.name} />
            ))}
          </>
        )}
        {mode === "acqua" && (
          <>
            {spaServices.map((service, index) => (
              <Card key={index} src={service.image} title={service.name} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default OrderSection;
