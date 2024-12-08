import React from 'react'
import Image from 'next/image'
import { FaGreaterThan } from 'react-icons/fa6'
const Contact = () => {
  return (
    <><div>
          <div className='relative'>
              <Image src={'/bgshop.png'}
                  alt='bgshop'
                  width={1440}
                  height={316}
                  className='' />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg text-center py-6 md:px-10 md:py-8 lg:w-1/2">
                  <h3 className="text-xl md:text-3xl font-bold  leading-snug mt-2">
                      Contact
                  </h3>
                  <h6 className="text-lg font-semibold leading-relaxed flex justify-center text-center items-center gap-2 p-3">Home <FaGreaterThan className='' /><span className='font-light text-gray-700'>Contact</span> </h6>
              </div>
          </div>
          <div className="sm:flex-row flex-col pt-20 mb-12">
              <h1 className='text-center justify-center font-medium text-[30px] text-black'>
                  Get In Touch With Us
              </h1>
              <p className="text-center text-gray-500">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
          </div>
      </div><section
          id="contact"
          className="grid md:grid-cols-2 my-12 md:my-12 py-24 px-8 gap-4 relative"
      >
              <div className="z-10">
                  <h5 className="text-xl font-bold my-2">
                      Let&apos;s Connect
                  </h5>
                  <p className="text-[#ADB7BE] mb-4 max-w-md">
                      {" "}
                      I&apos;m currently looking for new opportunities, my inbox is always
                      open. Whether you have a question or just want to say hi, I&apos;ll
                      try my best to get back to you!
                  </p><br />
                  <div className="pb-10 text-white">
                      {/* <span className="bold"><p><MdEmail size={26} />Email: fatimaaparveen985@gmail.com</p> <br /></span>
    <span className="bold"><FaPhone size={26} />Phone no:</span> 0327 1733985 */}
                  </div>
              </div>
              <div>
                  {/* <form ref={form} onSubmit={sendEmail} className="flex flex-col "> */}
                  <div className="mb-6">
                      <label
                          htmlFor=""
                          className="text-black block mb-2 text-sm font-medium"
                      >
                          Your Name
                      </label>
                      <input
                          name="name"
                          type="text"
                          id="example"
                          required
                          className="bg-white border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                          placeholder="Name" />
                  </div>
                  <div className="mb-6">
                      <label
                          htmlFor="email"
                          className="text-black block text-sm mb-2 font-medium"
                      >
                          Email
                      </label>
                      <input
                          name="email"
                          type="email"
                          id="exampleInput91"
                          required
                          className="bg-white border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                          placeholder="abc@gmail.com" />
                  </div>
                  <div className="mb-6">
                      <label
                          htmlFor="message"
                          className="text-black block text-sm mb-2 font-medium"
                      >
                          Message
                      </label>
                      <textarea
                          name="message"
                          id="message"
                          className="bg-white border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                          placeholder="Let's talk about..." />
                  </div>
                  <button
                      type="submit"
                      className=" text-black font-medium py-2.5 px-5 rounded-lg w-full"
                  >
                      Send Message
                  </button>
                  {/* <ToastContainer />
  </form> */}
              </div>
          </section><hr /></>
  )
}

export default Contact