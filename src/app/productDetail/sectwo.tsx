import React from 'react'
import Image from "next/image";
import Link from 'next/link';

const Sectwo = () => {
  return (
    <div>
        <hr />
        <div className='py-24 px-5'>
            <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
                <a className='mr-5 text-xl'>Description</a>
                <a className='text-gray-500 text-xl mr-5'>Additional Information</a>
                <a className='text-gray-500 text-xl mr-5'>Reviews [5]</a>
            </nav>
            <div className=' text-[#9F9F9F] px-20 mt-14'>
            <p className='mb-20'>Embodying the raw, wayward spirit of rock roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
            <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
            <div className='flex flex-wrap gap-4 mt-10 justify-between'>
                <Image src={'/cart.png'} alt="" width={505} height={348} />
                <Image src={'/cart.png'} alt="" width={505} height={348} />
            </div>
            </div>
        </div>
        <hr />
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-16 mx-auto">
  <div className="sm:flex-row flex-col py-3 mb-12">
        <h1 className='text-center justify-center font-medium text-[30px] text-black'>
        Related Product
        </h1>
      </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-[301] w-[285]  overflow-hidden ">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={'/p1.png'}
            width={285}
            height={301}
          />
          <span className="absolute top-2 right-0  text-white bg-red-400 text-xs px-1 text-center py-3 mr-2 rounded-full">
           <p className='text-xs'>-30%</p>
</span>
        </a>
        <div className="bg-[#F4F5F7] py-4 pl-3">
          <h2 className="text-gray-900 title-font text-lg font-medium">
          Syltherine
          </h2>
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          Stylish cafe chair
          </h3>
          <p className="mt-1 gap-2 text-black font-semibold flex ">Rp 2.500.000 <span className="text-[#B0B0B0] gap-1 pt-1 font-normal text-xs line-through decoration-gray-300">Rp 3.500.00</span></p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-[301] w-[285]  overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={'/p1.png'}
            width={285}
            height={301}
          />
        </a>
        <div className="bg-[#F4F5F7] py-4 pl-3">
          <h2 className="text-gray-900 title-font text-lg font-medium">
          Lolito
          </h2>
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          Luxury big sofa
          </h3>
          <p className="mt-1 text-black font-semibold flex">Rp 7.000.000 </p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-[301] w-[285]  overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={'/p2.png'}
            width={285}
            height={301}
          />
          <span className="absolute top-2 right-0  text-white bg-red-400 text-xs px-1 text-center py-3 mr-2 rounded-full">
           <p className='text-xs'>-50%</p>
</span>
        </a>
        <div className="bg-[#F4F5F7] py-4 pl-3">
          <h2 className="text-gray-900 title-font text-lg font-medium">
          Lolito
          </h2>
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          Luxury big sofa
          </h3>
          <p className="mt-1 text-black font-semibold gap-2 flex">Rp 7.000.000 <span className="text-[#B0B0B0] gap-1 pt-1 font-normal text-xs line-through decoration-gray-300">Rp 3.500.000</span></p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-[301] w-[285]  overflow-hidden">
          <Image
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={'/p3.png'}
            width={285}
            height={301}
          />
          <span className="absolute top-2 right-0  text-white bg-[#2EC1AC] text-xs px-1 text-center py-2 mr-2 rounded-full">
           <p className='text-xs'>New</p>
</span>
        </a>
        <div className="bg-[#F4F5F7] py-4 pl-3">
          <h2 className="text-gray-900 title-font text-lg font-medium">
          Respira
          </h2>
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          Outdoor bar table and stool
          </h3>
          <p className="mt-1 text-black font-semibold">Rp 500.000</p>
        </div>
      </div>
    </div>
    <div className='text-center justify-center items-center'>
    <Link href={'/shop'}><button className='text-center border border-[#B88E2F] text-sm font-semibold py-2 px-10 justify-center mt-9 text-[#B88E2F] items-center'>Show More</button></Link>
  </div>
  </div>
</section>
<hr />
    </div>
  )
}

export default Sectwo