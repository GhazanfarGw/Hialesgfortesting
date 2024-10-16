import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#111316]'>
            <div className='max-w-screen-xl mx-auto justify-center md:pt-20 md:px-10 py-10'>
                <h1 className='text-[#aaa] md:text-base text-sm justify-center pb-5 px-5 '>
                    Website last updated: October 14, 2024
                </h1>
                <div className="py-2 md:px-0 px-2">
                    <a href="/">
                        <img src='./Hilal1000.png' className='w-24' alt='Logo'/>
                    </a>
                </div>
                <div className='md:grid md:grid-cols-4 gap-x-20 max-w-8xl mx-auto justify-center py-5 text-white px-7'>
                    <div className=''>
                        <h1 className='text-[#bebebe] text-sm justify-center font-semibold'>
                            Shaping the Future of Sustainable Investments
                        </h1>
                        <p className='text-sm text-[#C3CDD3] md:pt-4 pt-3'>
                            Start your journey today with us, and discover how we are driving positive change through sustainable investments, 
                        </p>
                    </div>
                    <div className='md:pt-0 pt-10'>
                        <h1 className='text-[#bebebe] text-base justify-center font-semibold'>
                            Contact Us
                        </h1>
                        <p>
                            <a className='text-[#0C6E33] text-base md:pt-4 pt-2' href="mailto:admin@hilalesg.com">admin@hilalesg.com</a>
                        </p>
                        <p className='text-sm text-[#C3CDD3] pt-2'>
                            Tel: +971 50 378 5404
                        </p>
                    </div>
                    <div className='md:pt-0 pt-10'>
                        <h1 className='text-[#bebebe] text-base justify-center font-semibold'>
                            Address
                        </h1>
                        <p className='text-sm text-[#C3CDD3] md:pt-4 pt-2'>
                            ADGM, 2474 Al Sila Tower 24th Floor, Abu Dhabi, UAE
                        </p>
                    </div>
                    <div className='md:pt-0 pt-10'>
                        <h1 className='text-[#bebebe] text-base justify-center font-semibold'>
                            Community
                        </h1>
                        <div className="flex flex-row gap-7 pt-5">
                            <a 
                                target="_black" href="https://www.linkedin.com/company/hilalesg/" 
                                className="text-[#ffffff]
                                items-center text-sm relative h-8 pt-0.5 uppercase duration-200 flex justify-center flex-row hover:text-[#0C6E33]"
                                rel="noreferrer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=" fill-current stroke-current h-7 w-7"
                                    viewBox="0 0 50 50"
                                >
                                    <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z"/>
                                </svg>
                            </a>
                            <a 
                                target="_black" href="https://maps.app.goo.gl/FgDZ2b5QzdamTLo49" 
                                className="items-center text-sm relative h-8 pt-0.5 uppercase duration-200 flex justify-center flex-row hover:text-[#0C6E33]"
                                rel="noreferrer">
                                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                    width="19.000000pt" viewBox="0 0 100.000000 100.000000"
                                    preserveAspectRatio="xMidYMid meet">
                                    <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
                                    fill="#fff" stroke="none">
                                    <path d="M492 989 c-18 -5 -50 -27 -72 -49 -80 -80 -78 -185 5 -350 37 -73
                                    120 -190 135 -190 15 0 84 97 128 180 98 183 92 314 -18 386 -43 29 -125 39
                                    -178 23z m123 -154 c50 -49 15 -135 -55 -135 -41 0 -80 39 -80 80 0 41 39 80
                                    80 80 19 0 40 -9 55 -25z"/>
                                    <path d="M5 867 c-3 -6 -4 -176 -3 -376 l3 -364 129 -65 130 -65 120 60 119
                                    60 129 -60 128 -59 117 64 118 63 3 369 c1 218 -2 374 -7 379 -6 6 -44 -9 -99
                                    -39 l-90 -48 -11 -56 c-14 -71 -67 -181 -133 -276 -56 -81 -78 -99 -113 -90
                                    -52 13 -193 251 -216 365 l-11 60 -28 -14 c-27 -14 -34 -12 -148 45 -66 33
                                    -123 60 -126 60 -4 0 -9 -6 -11 -13z"/>
                                    </g>
                                </svg>
                            </a>
                        </div>
                        
                    </div>
                </div>
                <div className='justify-center mx-auto md:text-center px-5'>
                    <div className='border-b border-[#0C6E33] py-3'/>
                    <p className='text-sm text-[#C3CDD3] md:pt-5 pt-5'>
                        Hilal ESG Holdings Ltd &copy; 2024. All right reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
