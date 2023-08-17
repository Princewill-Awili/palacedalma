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
          title: "The Art of Hospitality",
          content:
            "Its walls are carved into a noble palace of the late '700, but as soon as you pass the door you will feel in a building suspended between the past and the present. You will see the beauty entering through the windows and walls sparkle with light, with the colors of the faces painted by Apulian artists..",
        }}
      />
    </div>
  );
}

export default HotelX