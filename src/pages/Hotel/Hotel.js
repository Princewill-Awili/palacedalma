import './hotel.css'
import Slider from '../../components/Slider/Slider'
import TextContent from '../../components/TextContent/TextContent'
import { hotelTxt } from '../../static'
const Hotel = () => {
  return (
    <div className='hotel'>
      <Slider hotel/>
      <TextContent header={'Tender is the Night'} body={hotelTxt} links={['ASK FOR INFO','START THE EXPERIENCE','BOOK NOW' ]} footer={'Hotel'}/>
    </div>
  )
}

export default Hotel