import Experience from '../../components/Experience/Experience'
import './roofx.css'

const RoofX = () => {
  return (
    <div className='roofx'>
      <Experience
        mode='roof'
        landingTitle={"Before Sunset"}
        epilogue={"Cherished Moments."}
        story={{
          title: "Live the Moment",
          content:
            "We love being around people and being inspired by life. We are immersed in the beauty of the Lagos Island Skyline, its splendor, the serene and breezy atmostphere . On our rooftop you will be greeted by the slow effect of the harbour of Eko Atlantic, its flow and reflow, the chatter, the laughter, the bubbly, and the slow flow of the sea of cheerful people ready to celebrate with selected drinks and preparations chosen by our chefs.",
        }}
      />
    </div>
  );
}

export default RoofX