import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './CountsCard.css';
const CountsCard = () => {
    return (
     
            <div className='counts-section'>
                   <h1 className='text-center pt-5 text-white h1'> Business Summary </h1>
                <div className='count-content-area'>
                      <div className='first-div'>
                          <div className='card-content'>
                          <h1 className='counts-title'> 1 BN+ </h1>
                          <p> Daily Impressions </p> 
                          </div>
                      </div>
                      <div className='second-div'>
                       <div className='card-content'>
                       <h1 className='counts-title'> $500K+ </h1>
                          <p> Paid </p>  
                       </div>
                      </div>
                      <div className='third-div'>
                      <div className='card-content'>
                      <h1 className='counts-title'> 8K+ </h1>
                          <p> Global Publishers </p>
                      </div>
                      </div>
                 </div>     
        </div>
  
    );
};

export default CountsCard;