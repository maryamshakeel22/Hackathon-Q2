import React from 'react'
import Image from "next/image";

const SecTwo = () => {
  return (
    <div>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-16 mx-auto">
    <div className="flex flex-col">
      {/* <div className="h-1 bg-gray-200 rounded overflow-hidden">
        <div className="w-24 h-full bg-indigo-500" />
      </div> */}
      <div className="sm:flex-row flex-col   py-3 mb-12">
        <h1 className='text-center justify-center font-medium text-[30px] text-black'>
        Browse The Range
        </h1>
        <p className='text-center justify-center text-[666666]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
    <div className="flex flex-wrap text-center sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg w-full overflow-hidden">
          <Image
            alt="content"
            className="object-cover object-center h-full w-full"
            src={'/one.png'}
            width={381}
            height={480}
          />
        </div>
        <h2 className="text-sm text-center font-semibold title-font text-gray-900 mt-5">
          Diving
        </h2>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
      <div className="rounded-lg w-full overflow-hidden">
          <Image
            alt="content"
            className="object-cover object-center h-full w-full"
            src={'/two.png'}
            width={381}
            height={480}
          />
        </div>
        <h2 className="text-sm text-center font-semibold title-font text-gray-900 mt-5">
          Living
        </h2>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
      <div className="rounded-lg w-full overflow-hidden">
          <Image
            alt="content"
            className="object-cover object-center h-full w-full"
            src={'/three.png'}
            width={381}
            height={480}
          />
        </div>
        <h2 className="text-sm text-center font-semibold title-font text-gray-900 mt-5">
          Bathroom
        </h2>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default SecTwo