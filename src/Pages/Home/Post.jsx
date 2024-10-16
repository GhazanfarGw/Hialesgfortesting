import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Post() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: true,

        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
            }
          }
        ]
      };
  return (
    <>
    <div className='px-5 md:px-10 items-center md:py-28 max-w-screen-xl justify-start mx-auto'>
      <div data-aos="zoom-in-up" data-aos-delay="300" className='items-center mx-auto overflow-hidden text-[#000]'>
        <h1 className='md:text-4xl font-light text-2xl text-[#444444]'>Recent Updates</h1>
        <Slider {...settings} className='flex mx-auto items-center gap-4 pt-5 text-[#000]'>
          <a href='https://www.arabnews.com/node/2449796/corporate-news' 
          className='py-5 justify-center items-center px-3 hover:scale-105 duration-300'>
            <img src='https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2024/01/28/4201461-1747017710.jpg?itok=fzvh3E3m'/>
            <h1 className='font-light text-[#444444] pt-5'>
              Hilal ESG explores Saudi market, sees great potential
            </h1>
            <p className='md:w-80 pt-3 text-sm text-[#777]'>
              The founding partners of Hilal ESG Holding Limited, Zafar Sarashwala, Irshad Akhtar and Zaheer Muneer, recently held an interactive session on investment opportunities,
            </p>
          </a>
          <a href='https://timesofnris.com/hilal-esg-holds-business-seminar-and-explores-saudi-arabian-business/' 
            className='py-5 justify-center items-center px-3 hover:scale-105 duration-300'>
            <img src='https://timesofnris.com/wp-content/uploads/2024/01/hilal-1-1024x632.jpeg'/>
            <h1 className='font-light text-[#444444] pt-5'>
              Hilal ESG holds business seminar and explores Saudi Arabian business
            </h1>
            <p className='md:w-80 pt-3 text-sm text-[#777]'>
              JEDDAH – An exclusive interactive session was organized with the founding partners of Hilal ESG Holding Limited, Zafar Sareshwala, Irshad Akhtar and Zaheer Muneer,
            </p>
          </a>
          <a href='https://www.arabnews.com/node/2449796/corporate-news' 
          className='py-5 justify-center items-center px-3 hover:scale-105 duration-300'>
            <img src='https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2024/01/28/4201461-1747017710.jpg?itok=fzvh3E3m'/>
            <h1 className='font-light text-[#444444] pt-5'>
              Hilal ESG explores Saudi market, sees great potential
            </h1>
            <p className='md:w-80 pt-3 text-sm text-[#777]'>
              The founding partners of Hilal ESG Holding Limited, Zafar Sarashwala, Irshad Akhtar and Zaheer Muneer, recently held an interactive session on investment opportunities,
            </p>
          </a>
          <a href='https://timesofnris.com/hilal-esg-holds-business-seminar-and-explores-saudi-arabian-business/' 
            className='py-5 justify-center items-center px-3 hover:scale-105 duration-300'>
            <img src='https://timesofnris.com/wp-content/uploads/2024/01/hilal-1-1024x632.jpeg'/>
            <h1 className='font-light text-[#444444] pt-5'>
              Hilal ESG holds business seminar and explores Saudi Arabian business
            </h1>
            <p className='md:w-80 pt-3 text-sm text-[#777]'>
              JEDDAH – An exclusive interactive session was organized with the founding partners of Hilal ESG Holding Limited, Zafar Sareshwala, Irshad Akhtar and Zaheer Muneer,
            </p>
          </a>
          
        </Slider>
      </div>
      <div className="border-b md:pb-10 pb-5"/>
    </div>
    </>
  )
}

export default Post;