import React from 'react'
import EmailForm from './email'

export default function Updates() {
  return (
    <>
    <div className=''>
        <div className='md:max-w-screen-xl justify-center mx-auto md:px-10 px-5 pb-20 pt-20'>
            <p className='uppercase text-[#444444]'>
                STAY UP TO DATE
            </p>
            <div className='text-[#444444] md:flex md:grid-cols-2 justify-between mx-auto pt-10'>
                <div>
                    <h1 className='md:text-4xl font-light text-2xl text-[#444444]'>
                        Get our latest insights and our launch date announcements
                    </h1>
                    <p className='pt-10 text-[#777]'>
                        For event updates, news, and exclusive insights, subscribe to our newsletter.
                    </p>
                    <EmailForm/>
                </div>
                <div className='max-w-md md:py-0 py-10'>
                    <img className='mx-auto' src='./customer.jpg' alt='logo'/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}