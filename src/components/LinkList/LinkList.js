import React from 'react'
import './linklist.css'
//import { Link } from 'react-router-dom'

const LinkList = ({title,items}) => {
  return (
    <ul className='linklist'>
      <p className='linklistTitle'>{title}</p>

      {items.map((item, index) => (
        
          <li key={index} className='linklistItem'>
            {item}
          </li>
        
      ))}
    </ul>
  );
}

export default LinkList