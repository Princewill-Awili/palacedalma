import './loader.css'

const Loader = () => {
  return (
    <div className='loader'>
      <h1 className='loadTitle'>The Neverending Experience</h1>
      <div className="loadingCircle"></div>
      <div className="loadWord">Loading...</div>

      <h3 className='loadFooter'>Palace D' Alma</h3>
      <p className='loadSmallFooter'>PALACE D' ALMA</p>
    </div>
  );
}

export default Loader