import React from "react";
import Image from 'next/image';
import { FaGreaterThan } from "react-icons/fa";
import Frame from "../frame";

function OurBlogs() {
  return (
    <>
     <div className='relative'>
        <Image src={'/bgshop.png'}
        alt='bgshop'
        width={1440}
        height={316}
        className=''/>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg text-center py-6 md:px-10 md:py-8 lg:w-1/2">
        <h3 className="text-xl md:text-3xl font-bold  leading-snug mt-2">
          Blog
        </h3>
        <h6 className="text-lg font-semibold leading-relaxed flex justify-center text-center items-center gap-2 p-3">Home <FaGreaterThan className=''/><span className='font-light text-gray-700'>Blog</span> </h6>
      </div>
      </div>
      <div className="py-24 px-10">
        <div className="text-cener justify-center items-center">
      <Image src={'/blog.png'}
        alt='bgshop'
        width={817}
        height={500}
        className=''/>
        <h1 className="font-bold text-xl py-10">Going all-in with millennial design</h1>
        <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
        </div>
      </div>
      <Frame />
    </>
  );
}

export default OurBlogs;