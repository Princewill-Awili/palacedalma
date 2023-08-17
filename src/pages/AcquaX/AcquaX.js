import "./acquax.css";
import Experience from "../../components/Experience/Experience";

const AcquaX = () => {
  return (
    <div className='acquax'>
      <Experience
        mode='acqua'
        landingTitle={"The Art of Dreaming"}
        epilogue={"A STORY TO LIVE IN YOUR OWN SKIN."}
        story={{
          title: "Sensory Paths",
          content:
            "Inside, Acqua wellness center is a flourishing of soft lighting and warm temperatures. From the outside you will be captured by the colored specks of light in the harbor. But it is inside the spa that the show takes place: the showers in chromotherapy, the fumes of the Turkish bath, the warmth of the sauna and the thousand bubbles of the pool are so beautiful and relaxing that you will almost regret leaving.",
        }}
      />
    </div>
  );
};

export default AcquaX;
