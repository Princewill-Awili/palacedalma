import './textcontent.css'

const TextContent = ({header,body,links, footer}) => {
  return (
    <div className='textcontent'>
      <h2 className='tcHeader'>{header}</h2>
      <p className='tcBody'>{body}</p>
      <div className='tcLinks'>
        {links.map((link, index) => (
          <div className='tcLink' key={index}>{link}</div>
        ))}
      </div>
      <h3 className='tcFooter'>{footer}</h3>
      <p className="smallFooter">PALACE D' ALMA</p>
    </div>
  );
}

export default TextContent