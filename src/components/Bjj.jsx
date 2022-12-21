import React from 'react'
import bjj from '../img/bjj.jpg';
import mma from '../img/mma.jpg';
import grappling from '../img/grappling.jpg';

const Bjj = () => {
    return (
        <section className="py-10 bg-[#191919] sm:py-16 lg:py-24" >
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-full " data-aos='fade-left' data-aos-delay='400'>
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-6xl leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">CLASSES DESIGNED</h1>
                    <h2 className="max-w-7xl font-bold mx-auto mt-4 text-7xl text-white">FOR YOU</h2>
                </div>

                <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-4 md:mt-16 lg:gap-x-12 ">
                    <div className=' transition duration-500 hover:scale-105'>
                        <a href=""><img src={mma} alt="" className='w-full  md:h-96 ' data-aos='fade-left' data-aos-delay='600' /></a>
                    </div>

                    <div className=' transition duration-500 hover:scale-105'>
                        <a href="/Bjj"><img src={bjj} alt="" className=' w-full md:h-96' data-aos='fade-left' data-aos-delay='500' /></a>
                    </div>

                    <div className=' transition duration-500 hover:scale-105'>
                        <a href=""><img src={grappling} alt="" className='w-full md:h-96' data-aos='fade-left' data-aos-delay='400' /></a>
                    </div>

                    <div className=' transition duration-500 hover:scale-105'>
                        <a href=""><img src={grappling} alt="" className='w-full md:h-96' data-aos='fade-left' data-aos-delay='300' /></a>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Bjj;