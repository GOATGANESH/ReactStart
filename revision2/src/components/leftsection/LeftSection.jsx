import Arrow from './Arrow'
import Hero from './Hero'
import 'remixicon/fonts/remixicon.css'

const LeftSection = ()=>{
    return (
        
        <div className='w-1/3 h-[80vh] flex flex-col justify-between text-white rounded-xl p-6'>
          <Hero/>
          <Arrow/>
        </div>
    )
}

export default LeftSection;