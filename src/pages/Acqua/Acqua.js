import "./acqua.css";
import Slider from "../../components/Slider/Slider";
import TextContent from "../../components/TextContent/TextContent";
import { aquaTxt } from "../../static";

const Acqua = () => {
  return (
    <div className="acqua">
      <Slider acqua/>
      <TextContent header={'This Side of Paradise'}links={['ASK FOR INFO','START THE EXPERIENCE']} body={aquaTxt} footer={'Acqua'}/>
    </div>
  );
};

export default Acqua;
