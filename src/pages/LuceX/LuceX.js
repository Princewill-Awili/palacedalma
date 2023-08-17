import "./lucex.css";
import Experience from "../../components/Experience/Experience";

const LuceX = () => {
  return (
    <div className='lucex'>
      <Experience
        mode='luce'
        landingTitle={"The Art of Taste"}
        epilogue={"A Cuisine with a story to tell."}
        story={{
          title: "Savoury Moments",
          content:
            "We at Luce restaurant think that food is a memory, a way to go back to distant places and see again people and loved ones. Therefore, we are reluctant to throw away parts of a food. Every waste contributes to the creation of new and delicious dishes. Fisheyes, for example, are used to prepare tasty crunchy waffles while the scales are left to candy for the pastry. Even a simple sprout can change the flavor of a dish, telling a new story.",
        }}
      />
    </div>
  );
};

export default LuceX;
