import React from 'react'
// components
import Nav from '../components/Nav'
import Header from '../components/Header';
import Bjj from '../components/Bjj';
import Mestre from '../components/Mestre';
import Footer from '../components/Footer';
import Map from '../components/Map';
import Contact from '../components/Contact';
import Categorys from '../components/Categorys';
import Schedule from '../components/Schedule';



const Home = () => {
    return (
        <div className='App  overflow-x-hidden' >
            {/* <Nav /> */}
            <Header />
            <Mestre />
            <Bjj />
            <Schedule />
            {/* <Categorys /> */}
            <Map />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home