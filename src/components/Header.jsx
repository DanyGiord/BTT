import React from 'react';
import Video from '../img/video1.mp4';
import Nav from './Nav';

const Header = () => {
    return (
        <>
            <Nav />
            <div class="flex items-center justify-center md:min-h-[820px] min-h-[700px]">
                <div
                    dangerouslySetInnerHTML={{
                        __html: `<video autoplay loop muted class="w-auto min-w-full h-full max-w-none ">
                        <source src=${Video} type="video/mp4" className='object-fill' />
                        Your browser does not support the video tag.
                        <video />`
                    }}
                />

                <div className='mx-auto text-center' data-aos='fade-down' data-aos-delay='600'>
                    <p className='text-white md:text-5xl md:block bold text-3xl flex flex-col font-bold tracking-wider'>
                        WILLKOMMEN IN DEN <br /><span className='md:text-7xl text-4xl font-extrabold'>BRAZILIAN TOP TEAM</span>
                    </p>
                    <a href='#' class="mr-5 mt-5 cursor-pointer inline-flex justify-center rounded-md border border-white bg-[#201E1F] px-8 py-3 text-base font-bold text-white shadow-sm hover:-translate-y-1 hover:scale-110 duration-300   sm:w-auto sm:text-sm">1 TAG TESTEN</a>
                    <a href='#' class="mt-5 cursor-pointer inline-flex justify-center rounded-md border border-white bg-[#201E1F] px-8 py-3 text-base font-bold text-white shadow-sm hover:-translate-y-1 hover:scale-110 duration-300   sm:w-auto sm:text-sm">KONTAKT</a>
                </div>
            </div>
        </>
    )
}

export default Header;