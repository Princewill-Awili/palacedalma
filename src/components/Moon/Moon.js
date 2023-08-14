import './moon.css'
import { MyContext } from '../../App';
import { useContext } from 'react';


const Moon = ({ txt,inverted}) => {

  const {mode,setMode} = useContext(MyContext);

    const modeTxt = txt.toLowerCase();
    console.log('modeTxt:',modeTxt)

     if(inverted){
          return (
            <div className='moon tilted' onClick={()=>setMode(modeTxt)}>
              <span className='moontxt'>{txt}</span>
              <div className='moonShape'></div>
            </div>
          );
     }else{
         return (
           <div className='moon' onClick={() => setMode(modeTxt)}>
             <span className='moontxt'>{txt}</span>
             <div className='moonShape'></div>
           </div>
         ); 
     }
}

export default Moon