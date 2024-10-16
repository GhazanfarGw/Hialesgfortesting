import { Transition } from '@headlessui/react'
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="header">
      <Logo isScrolled={isScrolled} />
      {/* Add your navigation items here */}
    </div>
  );
}

function Logo({ isScrolled }) {
  const [open, setOpen] = useState(false);
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      {isScrolled ? (
            <header onClick={handleScrollToTop} className="fixed z-10 md:px-10 px-3 w-full duration-500 mx-auto items-center bg-[#ffffff] md:py-2 md:border-b">
              <div className="mx-auto items-center duration-500">
                <div className="flex items-center">
                  <div className="flex items-center max-w-screen-xl justify-between mx-auto w-full">
                    <div className="z-20 flex-shrink-0 md:py-2 py-3 items-center duration-500">
                      <a href="/">
                        <img width={90} className='hidden md:block lg:block items-center duration-500' src='./Hilal1000.png' alt='favicon.png'/>
                        <img width={80} className='block md:hidden lg:hidden items-center duration-500' src='./Hilal1000.png' alt='favicon.png'/>
                      </a>
                    </div>
                    <div className="z-20 text-3xl md:hidden pt-3 px-3" onClick={() => setOpen(!open)}>
                      <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
                    </div>
                    <div className="hidden lg:block w-full duration-500 scroll-smooth">
                      <div className="items-center flex flex-row space-x-2 justify-end duration-500">
                        <div className='flex pl-8 items-center'>
                          <a
                            href="/"
                            className="
                            
                            items-center text-base md:text-sm md:hover:border-b border-[#000000] relative h-8 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#777777] hover:text-black font-semibold tracking-wide"
                          >
                            Home
                          </a>
                          <a
                            href="/"
                            className="
                            
                            items-center text-base md:text-sm md:hover:border-b border-[#000000] relative h-8 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#777777] hover:text-black font-semibold tracking-wide"
                          >
                            Philosophy
                          </a>
                          <a
                            href="/"
                            className="
                            
                            items-center text-base md:text-sm md:hover:border-b border-[#000000] relative h-8 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#777777] hover:text-black font-semibold tracking-wide"
                          >
                            Gallery
                          </a>
                          
                          <a
                            href="/"
                            className="
                            
                            items-center text-base md:text-sm md:hover:border-b border-[#000000] relative h-8 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#777777] hover:text-black font-semibold tracking-wide"
                          >
                            Team Expertise
                          </a>
                          <a
                            href="/"
                            className="
                            
                            items-center text-base md:text-sm md:hover:border-b border-[#000000] relative h-8 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#777777] hover:text-black font-semibold tracking-wide"
                          >
                            News & Insight
                          </a>
                          <a
                            href="/register"
                            className="
                            items-center text-base md:text-sm hover:bg-[#403f68] rounded-full border-[#000000] border relative h-10 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#777777] hover:text-black font-semibold tracking-wide"
                          >
                            Contact Us
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Mobile nav */}
              <ul className={`md:hidden bg-[#fff] fixed w-full top-0 overflow-y-auto bottom-0 py-20 duration-500 ${open ? "left-0" : "left-[-100%]"}
                `}
              >
                <li>
                  <Link to="/" className="tracking-wider hover:bg-[#f1f1f1] px-8 py-3 flex flex-row items-center duration-200 border-b hover:text-[#A39896] text-[#403f68] border-[#403f68] border-opacity-10 text-sm font-semibold">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/" className="tracking-wider hover:bg-[#f1f1f1] px-8 py-3 flex flex-row items-center duration-200 border-b hover:text-[#A39896] text-[#403f68] border-[#403f68] border-opacity-10 text-sm font-semibold">
                    Philosophy
                  </Link>
                </li>
                <li>
                  <Link to="/" className="tracking-wider hover:bg-[#f1f1f1] px-8 py-3 flex flex-row items-center duration-200 border-b hover:text-[#A39896] text-[#403f68] border-[#403f68] border-opacity-10 text-sm font-semibold">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/" className="tracking-wider hover:bg-[#f1f1f1] px-8 py-3 flex flex-row items-center duration-200 border-b hover:text-[#A39896] text-[#403f68] border-[#403f68] border-opacity-10 text-sm font-semibold">
                    Team Expertise
                  </Link>
                </li>
                <li>
                  <Link to="/" className="tracking-wider hover:bg-[#f1f1f1] px-8 py-3 flex flex-row items-center duration-200 border-b hover:text-[#A39896] text-[#403f68] border-[#403f68] border-opacity-10 text-sm font-semibold">
                    News & Insight
                  </Link>
                </li>
                  <p className='text-sm px-8 text-[#403f68] pt-8'>
                    Start your journey today with us, and discover how we are driving positive change through sustainable investments,
                  </p>
                <li> 
                  <Link to="/contact-us" className="hover:bg-[#A39896] border border-[#A39896] items-center relative h-10 mt-8 tracking-wider duration-200 mx-10 justify-center flex rounded-sm">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </header>
      ) : (
        <header className="fixed z-10 md:px-10 px-3 w-full duration-500 mx-auto items-center md:pb-2">
      <div className="mx-auto items-center duration-500 md:pt-8">
        <div className="flex items-center">
          <div className="flex items-center max-w-screen-xl justify-between mx-auto w-full">
            <div className="z-30 flex-shrink-0 items-center duration-500 pb-2 md:py-0 py-3">
              <a href="/">
                <img width={120} className='hidden md:block lg:block items-center duration-500' src='./Hilal1000.png' alt='favicon.png'/>
                <img width={90} className='block md:hidden lg:hidden items-center duration-500' src='./Hilal1000.png' alt='favicon.png'/>
              </a>
            </div>
            <div className="z-20 text-3xl md:hidden pt-3 px-3 text-black" onClick={() => setOpen(!open)}>
              <ion-icon className="" name={`${open ? "close" : "menu"}`}></ion-icon>
            </div>
            <div className="hidden lg:block w-full duration-500 scroll-smooth z-40">
              <div className="items-center flex flex-row space-x-2 justify-end duration-500">
                <div className='flex items-center'>
                  <a
                    href="/"
                    className="
                    
                    items-center text-base md:text-sm md:hover:border-b border-[#A39896] relative h-8 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#fff] font-semibold tracking-wide"
                  >
                    Home
                  </a>
                  <a
                    href="/"
                    className="
                      items-center text-base md:text-sm md:hover:border-b border-[#000000] relative h-8 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#fff]  hover:text-black font-semibold tracking-wide"
                    >
                      About
                  </a>
                  <a
                    href="/"
                    className="
                    
                    items-center text-base md:text-sm md:hover:border-b border-[#A39896] relative h-8 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#fff]  hover:text-black font-semibold tracking-wide"
                  >
                    Fund
                  </a>
                  <a
                    href="/"
                    className="
                    
                    items-center text-base md:text-sm md:hover:border-b border-[#A39896] relative h-8 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#fff] hover:text-black font-semibold tracking-wide"
                  >
                    Our Portfolio
                  </a>
                  <a
                    href="/"
                    className="
                    
                    items-center text-base md:text-sm md:hover:border-b border-[#A39896] relative h-8 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#fff] hover:text-black font-semibold tracking-wide"
                  >
                    News
                  </a>
                  <a
                    href="/register"
                    className="
                    items-center text-base md:text-sm bg-black bg-opacity-10 hover:bg-opacity-5 rounded-full border-[#A39896] relative h-10 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#fff] hover:text-black font-semibold tracking-wide"
                  >
                    Contact Us
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile nav */}
      <ul className={`md:hidden bg-[#fff] fixed w-full top-0 overflow-y-auto bottom-0 py-20 duration-500 ${open ? "left-0" : "left-[-100%]"}
                `}
              >
                <li>
                  <Link to="/" className="tracking-wider hover:bg-[#f1f1f1] px-8 py-3 flex flex-row items-center duration-200 border-b hover:text-[#A39896] text-[#403f68] border-[#403f68] border-opacity-10 text-sm font-semibold">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/" className="tracking-wider hover:bg-[#f1f1f1] px-8 py-3 flex flex-row items-center duration-200 border-b hover:text-[#A39896] text-[#403f68] border-[#403f68] border-opacity-10 text-sm font-semibold">
                    Philosophy
                  </Link>
                </li>
                <li>
                  <Link to="/" className="tracking-wider hover:bg-[#f1f1f1] px-8 py-3 flex flex-row items-center duration-200 border-b hover:text-[#A39896] text-[#403f68] border-[#403f68] border-opacity-10 text-sm font-semibold">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/" className="tracking-wider hover:bg-[#f1f1f1] px-8 py-3 flex flex-row items-center duration-200 border-b hover:text-[#A39896] text-[#403f68] border-[#403f68] border-opacity-10 text-sm font-semibold">
                    Team Expertise
                  </Link>
                </li>
                <li>
                  <Link to="/" className="tracking-wider hover:bg-[#f1f1f1] px-8 py-3 flex flex-row items-center duration-200 border-b hover:text-[#A39896] text-[#403f68] border-[#403f68] border-opacity-10 text-sm font-semibold">
                    News & Insight
                  </Link>
                </li>
                  <p className='text-sm px-8 text-[#403f68] pt-8'>
                    Start your journey today with us, and discover how we are driving positive change through sustainable investments,
                  </p>
                <li> 
                  <Link to="/contact-us" className="hover:bg-[#A39896] border border-[#A39896] items-center relative h-10 mt-8 tracking-wider duration-200 mx-10 justify-center flex rounded-sm">
                    Contact Us
                  </Link>
                </li>
              </ul>
    </header>
      )}
    </>
  )};
export default Navbar;
