import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
     <div>
    <div className=''>
        <Image src={'/bghero.png'}
        alt='bghero'
        width={1440}
        height={1007.93}
        className=''/>
    <div className="heroText bg-[#FFF3E3] textr">
          <h6>New Arrival</h6>
          <h3>Discover Our <br className=''/> New Collection</h3>
          <p className='pt-5 pb-5'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <button className=" buyBtn mt-3 text-sm font-bold">BUY NOW</button>
        </div>
    </div>
    </div> 
  )
}

export default Hero

{/* <div>
    <div className=''>
        <Image src={'/bghero.png'}
        alt='bghero'
        width={1440}
        height={1007.93}
        className=''/>
    <div className="heroText bg-[#FFF3E3] textr">
          <h6>New Arrival</h6>
          <h3>Discover Our <br className=''/> New Collection</h3>
          <p className='pt-5 pb-5'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <button className=" buyBtn mt-3 text-sm font-bold">BUY NOW</button>
        </div>
    </div>
    </div> */}