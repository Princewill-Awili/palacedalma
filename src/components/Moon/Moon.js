import "./moon.css";
import { MyContext } from "../../App";
import { useContext } from "react";

const Moon = ({ txt, inverted }) => {
  const { mode, setMode, setLoad } = useContext(MyContext);

  const modeTxt = txt.toLowerCase();
  
  const handleMode = () => {
    setLoad(true);
    setTimeout(() => setLoad(false), 1000);
    setMode(modeTxt);
  };

  if (inverted) {
    return (
      <div className='moon tilted' onClick={handleMode}>
        <span
          className='moontxt'
          style={{ color: mode === modeTxt ? "white" : "" }}
        >
          {txt}
        </span>
        <div
          className='moonShape'
          style={{ backgroundColor: mode === modeTxt ? "white" : "" }}
        ></div>
      </div>
    );
  } else {
    return (
      <div className='moon' onClick={handleMode}>
        <span
          className='moontxt'
          style={{ color: mode === modeTxt ? "white" : "" }}
        >
          {txt}
        </span>
        <div
          className='moonShape'
          style={{ backgroundColor: mode === modeTxt ? "white" : "" }}
        ></div>
      </div>
    );
  }
};

export default Moon;
