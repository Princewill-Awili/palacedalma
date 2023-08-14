import './moon.css'
import { MyContext } from '../../App';
import { useContext } from 'react';


const Moon = ({ txt,inverted}) => {

  const {mode,setMode} = useContext(MyContext);

    const modeTxt = txt.toLowerCase();
    console.log('modeTxt:',modeTxt);


     if(inverted){
          return (
            <div className='moon tilted' onClick={() => setMode(modeTxt)}>
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
     }else{
         return (
           <div className='moon' onClick={() => setMode(modeTxt)}>
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
}

export default Moon