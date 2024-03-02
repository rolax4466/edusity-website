import React from 'react';
import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

const About = ({setPlayState}) => { // Corrected syntax
 return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt="About Image" className='about-img' />
            <img src={play_icon} alt="Play Icon" className='play-icon'onClick={()=>{setPlayState(true)}} />
        </div>
        <div className='about-right'>
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's leaders today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta accporibus aspernatur illo?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus eaque ipsum commodi.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, aspernatt, repudiandae nulla nam sapiente.</p>
        </div>
    </div>
 );
};

export default About;

