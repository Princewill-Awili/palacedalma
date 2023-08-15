import './rooftop.css'
import Slider from '../../components/Slider/Slider'
import TextContent from '../../components/TextContent/TextContent'
import { roofTxt } from '../../static'

const Rooftop = () => {
  return (
    <div className='rooftop'>
      <Slider roof/>
      <TextContent header={'Encounters at Sunset'} body={roofTxt} links={['ASK FOR INFO','START THE EXERIENCE']} footer={'Rooftop'}/>
    </div>
  )
}

export default Rooftop