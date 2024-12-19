import { FaGreaterThan } from "react-icons/fa6";
import Frame from "../frame";
import CartTotals from "./sections/cartTotal";
import Image from 'next/image'
import { ImBin2 } from "react-icons/im";

export default function CartPage() {
  return (
    <>
    {/* Banner Section */}

    <section className="bg-[url('/bgshop.png')] bg-cover bg-center py-12 md:py-16">
            <div className="container mx-auto px-4 text-center">
              <div className="inline-block w-16 h-16 mb-4" >
              <Image src={'/logo.png'} alt='' width={77} height={77}/> </div>
              <h1 className="text-3xl md:text-4xl font-medium mb-4">Cart</h1>
              <div className="flex items-center justify-center gap-2 text-sm">
                <a href="#" className="font-bold">
                  Home
                </a>
                <span>
                  <FaGreaterThan width={20} height={20}/>
                </span>
                <span>Cart</span>
              </div>
            </div>
          </section>
   

    {/* Middle Section */}
    <div className="w-full flex flex-col lg:flex-row gap-8 px-6 md:px-12 lg:px-24 mb-16">
      
      {/* Left Div - Cart Items */}
      <div className="w-full lg:w-[817px]">
        <div className="bg-[#f9f1e7] w-full h-14 px-4 flex items-center text-[16px] leading-[24px]">
          <p className="w-1/4 text-center">Product</p>
          <p className="w-1/4 text-center">Price</p>
          <p className="w-1/4 text-center">Quantity</p>
          <p className="w-1/4 text-center">SubTotal</p>
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center md:justify-between gap-4">
          <div className="flex items-center gap-4">
            <Image
              src="/Msofa.png"
              alt="cart2"
              width={108}
              height={105}
              className="max-w-full"
            />
            <p className="text-[#9f9f9f]">Asgaard sofa</p>
          </div>

          <p className="text-[#9f9f9f]">Rs. 250,000.00</p>

          {/* <Input 
            placeholder="1" 
            className="w-12 h-12 text-center text-[16px] leading-[24px]"
          /> */}

          <p className="text-[#9f9f9f]">Rs. 250,000.00</p>

          <ImBin2 size={28} fill="#b88e2f" />
        </div>
      </div>

      {/* Right Div - Image */}
      <div className="w-full lg:w-[393px]">

        <CartTotals/>
       
      </div>
    </div>

    <Frame />
  </>
  );
}