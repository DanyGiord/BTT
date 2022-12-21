import React from 'react';
import img from '../img/schedule.jpg';

const Schedule = () => {
    return (
        <div className=' justify-center content-center bg-[#191919] pb-28'>
            <div className="max-w-4xl mx-auto text-center pb-10" data-aos='fade-right' data-aos-delay='400'>
                <h1 className="text-6xl leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">CLASSES DESIGNED</h1>
                <h2 className="max-w-7xl font-bold mx-auto mt-4 text-7xl text-white">FOR YOU</h2>
            </div>
            <div className='flex justify-center ' data-aos='fade-right' data-aos-delay='500'>
                <img src={img} alt='' className='lg:h-[700px] content-center object-fit' />
            </div>
        </div>
    )
}

export default Schedule;