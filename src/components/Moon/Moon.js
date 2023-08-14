import React from 'react'
import './moon.css'


const Moon = ({ txt,inverted}) => {
     if(inverted){
          return (
            <div className='moon tilted'>
              <span className='moontxt'>{txt}</span>
              <div className='moonShape'></div>
            </div>
          );
     }else{
         return (
           <div className='moon'>
             <span className='moontxt'>{txt}</span>
             <div className='moonShape'></div>
           </div>
         ); 
     }
}

export default Moon