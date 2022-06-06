import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div className='container'>
            <div className='row main-container'>
                <div className='col-12 col-md-12 col-lg-6 fist-col'>
                    <h1> Solve your problem with us </h1>
                    <p> “If I were given one hour to save the planet, I would spend 59 minutes defining the problem and one minute resolving it,” Albert Einstein said. </p>
                </div>
                <div className='col-12 col-md-12 col-lg-6 second-col'>
                    <img className='banner-img' src="https://i.ibb.co/tCQhg0W/1-1.png" alt="" />
                    </div>
                
            </div>
            
        </div>
    );
};

export default Banner;