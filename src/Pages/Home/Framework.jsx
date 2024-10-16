// import React from 'react'

// function Framework() {
//   return (
//     <div className='max-w-screen-2xl overflow-hidden items-center justify-center mx-auto md:pb-40'>
//         <div className='md:px-10 px-5'>
//             <div className='md:mt-16 mt-10 max-w-screen-xl border-b border-[#000033] pb-20'>
//                 <div className='items-center mx-auto'>
//                     <div className='md:max-w-lg md:border-[#403F68] md:border-8 md:py-10 md:px-10'>
//                         <h1 className='third md:text-7xl text-4xl text-[#000000] font-light'>
//                             Regulatory Framework
//                         </h1>
                        
//                     </div>
//                     <div className='max-w-3xl mt-8 md:mt-0'>
//                         <p className='fourth md:text-xl text-lg text-[#2F3239]'>
//                             The acquisition of this license is a demonstration of Hilal ESG Holdings LTD with the regulations established by the relevant jurisdiction. We are committed to upholding the highest levels of transparency, integrity, and client protection as required by our shareholders, board of directors, and regulatory authorities.
//                         </p>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Framework

import React from "react";
import Countdown from "./countdown";

function Description() {
  return (
    <>
    <div className="mx-auto justify-between pt-16 max-w-screen-xl md:px-10 px-5">
      <div className="">
        <div>
          <h1 className="md:text-4xl font-light text-2xl text-[#444444]">
            Regulatory Framework
          </h1>
        </div>

        <div className="max-w-screen-lg pt-5 md:pt-8 text-[#777]">
          <p className="md:text-lg text-sm">
            The acquisition of this license is a demonstration of Hilal ESG Holdings LTD with the regulations established by the relevant jurisdiction. We are committed to upholding the highest levels of transparency, integrity, and client protection as required by our shareholders, board of directors, and regulatory authorities.
          </p>
        </div>
      </div>
      <div className="border-b md:pb-10 pb-5"/>
    </div>
    </>
  );
}

export default Description;