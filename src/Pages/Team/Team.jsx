import React from 'react'
import Countdown from '../../countdown';

function Team() {
  return (
    <div className='bg-[#ffffff]'>
        <div className='max-w-screen-xl overflow-hidden items-center justify-center mx-auto md:pb-40 pb-20'>
            <div className='md:px-20 px-5 pt-10'>
                <div className='max-w-screen-lg'>
                    <h1 className='third md:text-6xl text-4xl text-[#2F3239] font-light md:pt-24'>
                        Team Expertise
                    </h1>
                    <div className='md:mt-16 mt-10 max-w-screen-lg'>
                        <p className='fourth md:text-xl text-lg text-[#2F3239]'>
                            Our team comprises of seasoned professionals with wealth of knowledge in asset management, investment advisory, and ESG-compliant solutions. This diverse skill set enhances our ability to offer tailored solutions aligned with client needs and regulatory standards.
                        </p>
                    </div>

                    <p className='pt-5 fourth md:text-xl text-lg text-[#2F3239]'>
                        For inquiries regarding our launch date, investor meetings, or any related information, kindly reach out to us at <a className='text-blue-700 px-1' href="mailto:admin@hilalesg.com">admin@hilalesg.com</a>
                    </p>
                    <p className='pt-5 fourth md:text-xl text-lg text-[#2F3239]'>
                        Your interest is paramount to us, and we ensure prompt and comprehensive responses.
                    </p>
                    <a href='./contact-us'>
                        <h1 className='bg-[#1FB689] text-white md:py-2 py-2 md:text-base text-sm md:px-5 px-3 font-semibold duration-300 w-52 mt-10'>
                            Contact & Support
                        </h1>
                    </a>
                </div>
                <Countdown/>
            </div>
            
        </div>
    </div>
  )
}

export default Team