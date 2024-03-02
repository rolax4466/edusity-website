import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Programs from './components/Programs/Programs.jsx'
import Title from './components/Title/Title.jsx'
import About from './components/About/About.jsx'
import Campus from './components/Campus/Campus.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import Videoplayer from './components/Videoplayer/Videoplayer.jsx';

const App = () => {
   const[playState,setPlayState]=useState(false)

 return (
    <div>
    <Navbar/>
    <Hero />
    <div className='container'>
    <Title subTitle='Our PROGRAM' title='What We Offer'/>
    <Programs/>
    <About setPlayState={setPlayState}/>
    <Title subTitle='Gallery' title='campus photos'/>
    <Campus/>
    <Title subTitle='Testimonials' title='what Student says'/>
    <Testimonials/>
    <Title subTitle='Contact us' title='Get in touch'/>
    <Contact/>
    <Footer/>

    </div>
   <Videoplayer playState={playState} setPlayState={setPlayState}/>
    </div>
 );
};

export default App;
