import './luce.css'
import Slider from '../../components/Slider/Slider'
import TextContent from '../../components/TextContent/TextContent'
import { bodyTxt } from '../../static'

const Luce = () => {
  return (
    <div className='luce'>
      <Slider luce/>
      <TextContent header={"A Perfect Dinner"} body={bodyTxt} links={['ASK FOR INFO','START THE EXPERIENCE']} footer={"Luce"}/>
    </div>
  )
}

export default Luce