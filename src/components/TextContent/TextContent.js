import "./textcontent.css";
import { useContext } from "react";
import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";

const TextContent = ({ header, body, links, footer }) => {
  const { setLoad, mode } = useContext(MyContext);
  const navigate = useNavigate();

  const handleX = (link) => {
    setLoad(true);
    setTimeout(() => setLoad(false), 2000);
    if(link === 'START THE EXPERIENCE'){
      navigate(`/${mode}/experience`);
    }
    
  };

  return (
    <div className='textcontent'>
      <h2 className='tcHeader'>{header}</h2>
      <p className='tcBody'>{body}</p>
      <div className='tcLinks'>
        {links.map((link, index) => (
          <div className='tcLink' key={index} onClick={()=>handleX(link)}>
            {link}
          </div>
        ))}
      </div>
      <h3 className='tcFooter'>{footer}</h3>
      <p className='smallFooter'>PALACE D' ALMA</p>
    </div>
  );
};

export default TextContent;
