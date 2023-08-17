import Experience from '../../components/Experience/Experience'
import './hotelx.css'

const HotelX = () => {
  return (
    <div className='hotelx'>
      <Experience
        mode='hotel'
        landingTitle={"Midnight Dream"}
        epilogue={"A story to be lived with open eyes."}
        story={{
          title: "Live the Moment",
          content:
            "We love being around people and being inspired by life. We are immersed in the beauty of the Lagos Island Skyline, its splendor, the serene and breezy atmostphere . On our rooftop you will be greeted by the slow effect of the harbour of Eko Atlantic, its flow and reflow, the chatter, the laughter, the bubbly, and the slow flow of the sea of cheerful people ready to celebrate with selected drinks and preparations chosen by our chefs.",
        }}
      />
    </div>
  );
}

export default HotelX