// import React from 'react'
// import Countdown from '../../countdown';

// function intro() {
//   return (
//     <div className='max-w-screen-xl overflow-hidden items-center justify-center mx-auto'>
//         <div className='md:pt-80 md:px-20 px-5 pt-10'>
//             <h1 className='third md:text-6xl text-4xl text-[#1FB689] font-light pt-3'>
//                 Introduction
//             </h1>
//             <div className='md:mt-16 mt-8 max-w-screen-lg border-b border-[#000033] pb-10 md:pb-20'>
//                 <p className='fourth md:text-xl text-lg text-[#2F3239]'>
//                     Hilal ESG Holdings LTD is in process of obtaining an advisory license for asset management services. This license will enable the company to provide financial guidance and manage client assets in accordance with the applicable regulatory standards. We will put a countdown of 90 days showing our process that our application is submitted to the regulator.
//                 </p>
//                 <div className="pt-3">
//                     <Countdown/>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default intro

import React from "react";
import Countdown from "./countdown";

function Description() {
  return (
    <>
    <div className="max-w-screen-xl md:px-10 px-5 mx-auto">
      <div className="md:pt-60 pt-16">
        <div>
          <h1 className="md:text-4xl font-light text-2xl text-[#444444]">
            What is the Hilal ESG?
          </h1>
        </div>

        <div className="max-w-screen-lg pt-5 md:pt-8 text-[#777]">
          <p className="md:text-lg text-sm">
            Hilal ESG Holdings LTD is in process of obtaining an advisory license for asset management services. This license will enable the company to provide financial guidance and manage client assets in accordance with the applicable regulatory standards.
            <br/><br/>
            We will put a countdown of 90 days showing our process that our application is submitted to the regulator.
          </p>
        </div>
      </div>
      <Countdown/>
      <div className="border-b md:pb-10 pb-5"/>
    </div>
    </>
  );
}

export default Description;