// import React from 'react'

// function Risk() {
//   return (
// <div className="max-w-screen-xl items-center justify-center mx-auto mt-10 md:mt-0">
//   <div className="md:px-10 px-5">
//     <div className="max-w-screen-xl mx-auto">
//         <div className='md:items-center pb-20'>
//             <div className='max-w-screen-md justify-center mx-auto'>
//                 <div className='text-center'>
//                     <h1 className="third md:text-7xl text-4xl text-[#000000] font-light">
//                         Compliance and Risk Management
//                     </h1>
//                 </div>

//                 <div className="md:mt-16 mt-8 max-w-screen-md mx-auto">
//                     <p className="fourth md:text-xl text-lg text-[#2F3239] text-center">
//                         Hilal ESG Holdings LTD will establish and implement robust internal controls, compliance monitoring, frameworks, and risk management strategies to ensure:
//                     </p>
//                 </div>
//             </div>
//                 <div className="mt-8 md:mt-0 md:flex grid-cols-4 gap-5">
//                     {/* Card 1 */}
//                     <div className="bg-[#F0F5F6] py-5 px-5 mt-16 max-w-screen-xl">
                        // <div className="flex items-center p-4">
                        //     <i className="fas fa-shield-alt text-[#1FB689] text-4xl"></i> {/* AML Icon */}
                        // </div>
//                         <h3 className="text-lg font-semibold text-[#2F3239]">
//                             Anti-money Laundering (AML) & KYC
//                         </h3>
//                         <p className="text-sm text-[#2F3239] mt-2">
//                             Strict adherence to AML and know-your-customer (KYC) regulations.
//                         </p>
//                     </div>

//                     {/* Card 2 */}
//                     <div className="bg-[#F0F5F6] py-5 px-5 md:mt-16 mt-5 max-w-screen-xl">
                        // <div className="flex items-center p-4">
                        //     <i className="fas fa-file-contract text-[#1FB689] text-4xl"></i> {/* Audit Icon */}
                        // </div>
//                         <h3 className="text-lg font-semibold text-[#2F3239]">
//                             Financial Audits
//                         </h3>
//                         <p className="text-sm text-[#2F3239] mt-2">
//                             Regular audits and financial disclosures in accordance with regulatory mandates.
//                         </p>
//                     </div>

//                     {/* Card 3 */}
//                     <div className="bg-[#F0F5F6] py-5 px-5 md:mt-16 mt-5 max-w-screen-xl">
                        // <div className="flex items-center p-4">
                        //     <i className="fas fa-chart-line text-[#1FB689] text-4xl"></i> {/* Risk Management Icon */}
                        // </div>
//                         <h3 className="text-lg font-semibold text-[#2F3239]">
//                             Risk Management
//                         </h3>
//                         <p className="text-sm text-[#2F3239] mt-2">
//                             Ongoing assessment and monitoring of investment portfolios to mitigate risks and maximize returns.
//                         </p>
//                     </div>

//                     {/* Card 4 */}
//                     <div className="bg-[#F0F5F6] py-5 px-5 md:mt-16 mt-5 max-w-screen-xl">
                        // <div className="flex items-center p-4">
                        //     <i className="fas fa-check-circle text-[#1FB689] text-4xl"></i> {/* Compliance Icon */}
                        // </div>
//                         <h3 className="text-lg font-semibold text-[#2F3239]">
//                             Other Compliance
//                         </h3>
//                         <p className="text-sm text-[#2F3239] mt-2">
//                             Compliance with local and international regulations to safeguard the business.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>

//   )
// }

// export default Risk



// import React from 'react'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// function Blog() {
//     const settings = {
//         dots: true,
//         infinite: true,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         pauseOnHover: true,

//         cssEase: "linear",
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 3,
//               infinite: true,
//               dots: true
//             }
//           },
//           {
//             breakpoint: 600,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 2,
//               initialSlide: 2
//             }
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1,
//               dots: true,
//             }
//           }
//         ]
//       };
//   return (
//     <>
//     <div className='mx-0 px-5 items-center md:py-28'>
//       <div data-aos="zoom-in-up" data-aos-delay="300" className='max-w-screen-2xl items-center mx-auto overflow-hidden'>
//         <h1 className='md:text-4xl text-3xl text-[#403f68]'>Know Before You Go</h1>
//         <Slider {...settings} className='flex grid-cols-4 items-center pt-5 text-[#000]'>
//           <a href='/' 
//             className='py-5 justify-center items-center px-5 bg-[#f1f1f1] shadow-2xl'>
//             <img src='./saudi-arabian-architecture-mobile.jpg'/>
//             <h1 className='text-base font-semibold pt-5'>
//               About Saudi
//             </h1>
//             <br/>
//             <div className='border-y py-3 mt-5 font-semibold mx-2 border-opacity-20 border-[#403f68] hover:text-[#403f68]'>
//               <a href=''>
//                 Learn More
//               </a>
//             </div>
//           </a>
//           <a href='/' 
//             className='py-5 justify-center items-center px-5 bg-[#f1f1f1] shadow-2xl'>
//             <img src='./saudi-arabian-architecture-mobile.jpg'/>
//             <h1 className='text-base font-semibold pt-5'>
//               About Saudi
//             </h1>
//             <br/>
//             <div className='border-y py-3 mt-5 font-semibold mx-2 border-opacity-20 border-[#403f68] hover:text-[#403f68]'>
//               <a href=''>
//                 Learn More
//               </a>
//             </div>
//           </a>
//           <a href='/' 
//           className='py-5 justify-center items-center px-3'>
//             <img src='./saudi-arabian-architecture-mobile.jpg'/>
//             <h1 className='text-base font-semibold pt-5'>
//               About Saudi
//             </h1>
//             <p className='md:w-80 pt-3 text-sm text-[#000]'>
//               Arabic is the official language of Saudi Arabia and the primary language used in all dealings and public transactions.
//             </p>
//           </a>
//           <a href='/' 
//           className='py-5 justify-center items-center px-3'>
//             <img src='./saudi-arabian-architecture-mobile.jpg'/>
//             <h1 className='text-base font-semibold pt-5'>
//               About Saudi
//             </h1>
//             <p className='md:w-80 pt-3 text-sm text-[#000]'>
//               Arabic is the official language of Saudi Arabia and the primary language used in all dealings and public transactions.
//             </p>
//           </a>
//         </Slider>
//       </div>
//     </div>
//     </>
//   )
// }

// export default Blog;


// import React from 'react'

// function blog() {
//   return (
//     <>
//     <div className='md:px-10 items-center mx-auto justify-center px-5 py-20'>
//       <div className='max-w-screen-2xl mx-auto justify-center'>
//         <h1 className='lg:text-4xl text-2xl font-displace'>
//             Compliance and Risk Management
//         </h1>
//         <p className="fourth md:text-xl text-lg text-[#2F3239] pt-5">
//             Hilal ESG Holdings LTD will establish and implement robust internal controls, compliance monitoring, frameworks, <br/> and risk management strategies to ensure:                     
//         </p>
//          <div className='flex lg:grid-cols-4 pb-5 mt-10 overflow-x-scroll xl:overflow-hidden mx-auto gap-5 md:gap-10 justify-between items-center'>
//           <a href='/about-saudi' className='justify-center hover:bg-[#f1f1f1] border-[#403f68] border-opacity-20 border rounded-xl shadow-xl'>
//             <div className='px-3 py-4 items-center w-72 lg:w-[22rem]'>
//                 <div className="flex items-center p-4">
//                     <i className="fas fa-shield-alt text-[#1FB689] text-4xl"></i> {/* AML Icon */}
//                 </div>
//                 <div className='pt-5 px-5'>
//                 <h1 className='font-semibold pb-5 lg:text-lg text-base'>
//                     Anti-money Laundering (AML) & KYC
//                 </h1>
//                 <p className='lg:text-base text-sm pt-3 border-t border-[#403f68] border-opacity-20 hover:text-[#403f68]'>
//                     Strict adherence to AML and know-your-customer (KYC) regulations.
//                 </p>
//               </div>
//             </div>
//           </a>
//           <a href='/travel-safety-tips' className='justify-center hover:bg-[#f1f1f1] border-[#403f68] border-opacity-20 border rounded-xl shadow-xl'>
//             <div className='px-3 py-4 items-center w-72 lg:w-[22rem]'>
//             <div className="flex items-center p-4">
//                 <i className="fas fa-file-contract text-[#1FB689] text-4xl"></i> {/* Audit Icon */}
//             </div>
//               <div className='pt-5 px-5'>
//                 <h1 className='font-semibold pb-5 lg:text-lg text-base'>
//                     Financial Audits
//                 </h1>
//                 <p className='lg:text-base text-sm pt-3 border-t border-[#403f68] border-opacity-20 hover:text-[#403f68]'>
//                     Regular audits and financial disclosures in accordance with regulatory mandates.
//                 </p>
//               </div>
//             </div>
//           </a>
//           <a href='/useful-contacts' className='justify-center hover:bg-[#f1f1f1] border-[#403f68] border-opacity-20 border rounded-xl shadow-xl'>
//             <div className='px-3 py-4 items-center w-72 lg:w-[22rem]'>
//                 <div className="flex items-center p-4">
//                     <i className="fas fa-chart-line text-[#1FB689] text-4xl"></i> {/* Risk Management Icon */}
//                 </div>
//               <div className='pt-5 px-5'>
//                 <h1 className='font-semibold pb-5 lg:text-lg text-base'>
//                     Risk Management
//                 </h1>
//                 <p className='lg:text-base text-sm pt-3 border-t border-[#403f68] border-opacity-20 hover:text-[#403f68]'>
//                     Ongoing assessment and monitoring of investment portfolios to mitigate risks and maximize returns.
//                 </p>
//               </div>
//             </div>
//           </a>
//           <a href='/road-trip-essentials' className='justify-center hover:bg-[#f1f1f1] border-[#403f68] border-opacity-20 border rounded-xl shadow-xl'>
//             <div className='px-3 py-4 items-center w-72 lg:w-[22rem]'>
//                 <div className="flex items-center p-4">
//                     <i className="fas fa-check-circle text-[#1FB689] text-4xl"></i> {/* Compliance Icon */}
//                 </div>
//               <div className='pt-5 px-5'>
//                 <h1 className='font-semibold pb-5 lg:text-lg text-base'>
//                     Other Compliance
//                 </h1>
//                 <p className='lg:text-base text-sm pt-3 border-t border-[#403f68] border-opacity-20 hover:text-[#403f68]'>
//                     Compliance with local and international regulations to safeguard the business.
//                 </p>
//               </div>
//             </div>
//           </a>
//         </div>
//         <div className='lg:flex bg-[#403f68] items-center justify-between lg:mt-28 mt-20 rounded-md'>
//           <div className='max-w-screen-2xl lg:text-base text-sm lg:px-20 text-white px-5 py-10'>
//             <p>
//               You're Almost There
//             </p>
//             <h1 className='lg:pt-5 pt-3 lg:text-2xl text-xl font-semibold'>
//                 Let's Talk About Our Team
//             </h1>
//             <a
//               href="/register"
//               className="
//               items-center lg:text-base text-sm bg-white rounded-full w-44 border-[#403f68] relative h-10 duration-200 mt-5 lg:px-8 md:px-4 px-4 flex flex-row text-[#403f68] font-semibold tracking-wide"
//             >
//               Contact Us
//             </a>
//           </div>
//           <div>
//             <img className='lg:h-72' src='./Apply-Today.png' alt='images'/>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   )
// }

// export default blog



import React from 'react'

function blog() {
  return (
    <>
    <div className='max-w-screen-xl mx-auto md:px-10 px-5'>
      <div className='pb-10 pt-16'>
        <h1 className='md:text-4xl font-light text-2xl text-[#444444]'>
            Compliance and Risk Management
        </h1>
        <p className="fourth max-w-screen-lg pt-5 md:pt-8 text-[#777]">
            Hilal ESG Holdings LTD will establish and implement robust internal controls, compliance monitoring, frameworks, <br/> and risk management strategies to ensure:                     
        </p>
        <div className='md:grid md:grid-cols-4 gap-3 mx-auto pt-10'>
          <div className='justify-start hover:bg-[#f1f1f1] border-[#403f68] border-opacity-20 border rounded-xl shadow-xl hover:scale-105 duration-300'>
            <div className='px-3 py-4 items-center'>
              <div className="flex items-center p-4">
                <i className="fas fa-shield-alt text-[#0C6E33] text-4xl"></i> {/* AML Icon */}
              </div>
              <div className='p-3 px-3'>
                <h1 className='pb-5 text-[#444444] font-medium'>
                    Anti-money Laundering (AML) & KYC
                </h1>
                <p className='pt-3 border-t border-[#403f68] border-opacity-20 text-[#777] text-sm'>
                    Strict adherence to AML and know-your-customer (KYC) regulations.
                </p>
              </div>
            </div>
          </div>
          <div className='justify-start hover:bg-[#f1f1f1] border-[#403f68] border-opacity-20 border rounded-xl shadow-xl hover:scale-105 duration-300'>
            <div className='px-3 py-4 items-center'>
              <div className="flex items-center p-4">
                <i className="fas fa-file-contract text-[#0C6E33] text-4xl"></i> {/* Audit Icon */}
              </div>
              <div className='p-3 px-3'>
                <h1 className='pb-5 text-[#444444] font-medium'>
                  Financial Audits
                </h1>
                <p className='pt-3 border-t border-[#403f68] border-opacity-20 text-[#777] text-sm'>
                  Regular audits and financial disclosures in accordance with regulatory mandates.
                </p>
              </div>
            </div>
          </div>

          <div className='justify-start hover:bg-[#f1f1f1] border-[#403f68] border-opacity-20 border rounded-xl shadow-xl hover:scale-105 duration-300'>
            <div className='px-3 py-4 items-center'>
              <div className="flex items-center p-4">
                <i className="fas fa-chart-line text-[#0C6E33] text-4xl"></i> {/* Risk Management Icon */}
              </div>
              <div className='p-3 px-3'>
                <h1 className='pb-5 text-[#444444] font-medium'>
                  Risk Management
                </h1>
                <p className='pt-3 border-t border-[#403f68] border-opacity-20 text-[#777] text-sm'>
                  Ongoing assessment and monitoring of investment portfolios to mitigate risks and maximize returns.
                </p>
              </div>
            </div>
          </div>

          <div className='justify-start hover:bg-[#f1f1f1] border-[#403f68] border-opacity-20 border rounded-xl shadow-xl hover:scale-105 duration-300'>
            <div className='px-3 py-4 items-center'>
              <div className="flex items-center p-4">
                <i className="fas fa-check-circle text-[#0C6E33] text-4xl"></i> {/* Compliance Icon */}
              </div>
              <div className='p-3 px-3'>
                <h1 className='pb-5 text-[#444444] font-medium'>
                  Other Compliance
                </h1>
                <p className='pt-3 border-t border-[#403f68] border-opacity-20 text-[#777] text-sm'>
                  Compliance with local and international regulations to safeguard the business.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:flex border border-[#0C6E33] items-center justify-between lg:mt-28 mt-20 rounded-md'>
          <div className='max-w-screen-2xl lg:px-20 px-5 py-10'>
            <p className='text-[#777777]'>
              You're Almost There
            </p>
            <h1 className='lg:pt-5 pt-3 lg:text-2xl text-xl font-light text-[#444]'>
                Let's Talk About Our Team
            </h1>
            <a
              href="/register"
              className="
              items-center lg:text-base text-sm bg-black w-44 border-[#000] relative h-10 duration-200 mt-5 lg:px-8 md:px-4 px-4 flex flex-row text-[#fff] font-semibold tracking-wide"
            >
              Contact Us
            </a>
          </div>
          <div>
            <img className='lg:h-72' src='./Apply-Today.png' alt='images'/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default blog