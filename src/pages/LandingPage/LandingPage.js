import { useContext } from "react";
import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";
import "./landing.css";
import LinkList from "../../components/LinkList/LinkList";
import Moon from "../../components/Moon/Moon";

const LandingPage = () => {
  const { showMenu,setShowMenu, mode, setLoad } = useContext(MyContext);

  const handleModes = () => {
    if (mode === "acqua") {
      return "landingPage acquaPage";
    } else if (mode === "rooftop") {
      return "landingPage rooftopPage";
    } else if (mode === "luce") {
      return "landingPage lucePage";
    } else if (mode === "hotel") {
      return "landingPage hotelPage";
    }
    return "landingPage homePage";
  };

  const handleHeadings = () => {
    if (mode === "acqua") {
      return "Acqua";
    } else if (mode === "rooftop") {
      return "Rooftop";
    } else if (mode === "luce") {
      return "Luce";
    } else if (mode === "hotel") {
      return "Hotel";
    }
    return "Palace D' Alma";
  };

  const myMode = handleModes();
  const navigate = useNavigate();

  const handleRoutes = (modeText) =>{
    setLoad(true);
    setTimeout(()=> setLoad(false),2000);
    if(modeText === 'home'){
      setShowMenu(!showMenu);
    }
    navigate(`/${modeText}`)
  }

  return (
    <div className={myMode}>
      <div className='mainArea'>
        {showMenu === false && (
          <div className='moonHolder'>
            <Moon txt='ACQUA' inverted />
            <Moon txt='ROOFTOP' inverted />
            <Moon txt='LUCE' />
            <Moon txt='HOTEL' />
          </div>
        )}

        <h3 className='logo'>{handleHeadings()}</h3>
        <div className='mainLinks'>
          <LinkList title='OPENINGS' items={["Open 24/7"]} />
          <LinkList
            title='RAPID LINKS'
            items={["Virtual Tour", "Book now", "Experiences", "Meeting Room"]}
          />
          <LinkList
            title='CONTACTS'
            items={[
              "108A, Muiz Banire Close",
              "Lekki Phase 1, Lekki",
              "(+234) 01 23 5432",
            ]}
          />
        </div>
        <p className='experience' onClick={()=> handleRoutes(mode)}>START THE EXPERIENCE</p>
      </div>
    </div>
  );
};

export default LandingPage;
