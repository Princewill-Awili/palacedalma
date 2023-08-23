import  './card.css'

const Card = ({src,title}) => {
     console.log(title)
  return (
    <div className='card'>
      <img
        src={src}
        alt='cardImg'
        className='cardImg'
      />
      <p className="cardTitle">{title}</p>
    </div>
  );
}

export default Card