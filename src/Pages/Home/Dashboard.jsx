import React from 'react'
export default function home() {
  return (
    <>
        <div className=''>
            <div className='-mt-40 h-96'>
                <video id='bg-video' loop autoPlay muted>
                    <source src='./ADQ - Homepage.mp4' type='video/mp4'/>
                </video>
                {/* <img className='w-full object-cover md:h-[50rem] h-[36rem]' src='./9.jpg' alt='image'/> */}
            </div>

            <div className='md:px-16 mx-auto justify-center overflow-hidden px-5 max-w-screen-xl pb-96'>
                <div className='text-white max-w-screen-m md:py-20 mt-48 md:mt-0 pb-32 md:pb-0'>
                    <h1 className='second md:text-8xl font-bold font-sans text-5xl pt-2 md:pt-0'>
                        Launching Soon in ADGM Abu Dhabi
                    </h1>
                    <p className='text-white'>
                        Hilal ESG Holdings LTD is in process of obtaining an advisory license for asset management services.
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}
