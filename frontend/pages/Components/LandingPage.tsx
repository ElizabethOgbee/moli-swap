import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Lottie from "lottie-react";
import wallet from "../asset/wallet.json";

function LandingPage() {
  return (
    <section  className="relative bg-[url(../pages/asset/bbbg.avif)] bg-no-repeat bg-center bg-cover w-full h-full px-4 py-5 flex lg:py-10 lg:px-1  md:h-screen">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      {/**Left-Item **/}
          <div className="mt-20 grid  items-center justify-items-center z-[1] gap-32 lg:grid-cols-2">
            <div className="">
            <h2 className='text-center text-3xl mb-6 md:text-5xl mt-9 bg-gradient-to-tr from-purple-400 to-green-300 block text-transparent bg-clip-text text-bold'>MoliSwap</h2>
            <p className='text-gray-300 text-center text-xl px- md:text-2xl'>Swap tokens with 0 STX <br />
            Transfer any token with 0 STX <br />
            Zero loss of funds for failed transactions
               </p>
            {/**Buttton */}
            <div className="flex mt-4 justify-center ">
            <Link href="https://www.linkedin.com/in/ogbe-elizabeth-b07275149/" className='text-gray-300  text-bolder px-4 py-2 m-auto text-md border-2 font-sm md:font-lg  border-gold rounded-full hover:text-navyBlue hover:bg-gold md:m-0 hover:bg-gradient-to-tr from-purple-400 to-green-300 hover:text-blue-900'>Swap</Link>
            </div>
      </div>
        <div className="">
        <Lottie animationData={wallet} loop={true} className="mt-5 h-80 w-80 object-cover lg:w-[500px] lg:h-[400px] z-20 rounded-3xl items-center" />
        </div>
        </div>
        </section>
  
  )
}

export default LandingPage

