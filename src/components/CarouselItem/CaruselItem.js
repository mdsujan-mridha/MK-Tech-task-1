import React, { useRef, useState } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './CaruselItem.css';

const CaruselItem = () => {
    return (
        <>
              <h1 className='text-center mt-5 pb-5 h1'> Our Services </h1>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
      
          <SwiperSlide> 
              <div>
               <div className='card-item'>
                   <div className='card-img-part'>
                       <img className='slider-img' src="https://i.ibb.co/mNcvqvN/niclas-illg-6v-A8-GCbbt-L0-unsplash.jpg" alt="" />
                   </div>
                   <div className='card-content'>
                       <h1> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, totam. </h1>
                       <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusantium placeat atque totam dolores debitis commodi nisi dolorem animi natus! </p>
                       
                   </div>
                   
               </div>
          </div> </SwiperSlide>
          <SwiperSlide> 
              <div className='card-item'>
                   <div className='card-img-part'>
                       <img src="https://i.ibb.co/m8w98Gs/frederic-koberl-2836-IR07ocg-unsplash.jpg" alt="" />
                   </div>
                   <div className='card-content'>
                       <h1> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, totam. </h1>
                       <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusantium placeat atque totam dolores debitis commodi nisi dolorem animi natus! </p>
                       
                   </div>
                   
               </div> 
               </SwiperSlide>
          <SwiperSlide> 
          <div className='card-item'>
                   <div className='card-img-part'>
                       <img src="https://i.ibb.co/2sDHt85/marvin-meyer-SYTO3xs06f-U-unsplash.jpg" alt="" />
                   </div>
                   <div className='card-content'>
                       <h1> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, totam. </h1>
                       <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusantium placeat atque totam dolores debitis commodi nisi dolorem animi natus! </p>
                       
                   </div>
                   
               </div>
              
               </SwiperSlide>
          <SwiperSlide> <div className='card-item'>
                   <div className='card-img-part'>
                       <img src="https://i.ibb.co/nByQ7Jd/tim-kabel-FCr-Yd-P8gohg-unsplash.jpg" alt="" />
                   </div>
                   <div className='card-content'>
                       <h1> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, totam. </h1>
                       <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusantium placeat atque totam dolores debitis commodi nisi dolorem animi natus! </p>
                       
                   </div>
                   
               </div>
                </SwiperSlide>
          <SwiperSlide> <div className='card-item'>
                   <div className='card-img-part'>
                       <img src="https://i.ibb.co/Sn4yjcB/onur-binay-P3-Pp-D5k7jf-I-unsplash.jpg" alt="" />
                   </div>
                   <div className='card-content'>
                       <h1> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, totam. </h1>
                       <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusantium placeat atque totam dolores debitis commodi nisi dolorem animi natus! </p>
                       
                   </div>
                   
               </div> 
               </SwiperSlide>
          <SwiperSlide> <div className='card-item'>
                   <div className='card-img-part'>
                       <img src="https://i.ibb.co/t2p4pTX/samsung-memory-J8-Cfm4-W8gd8-unsplash.jpg" alt="" />
                   </div>
                   <div className='card-content'>
                       <h1> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, totam. </h1>
                       <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusantium placeat atque totam dolores debitis commodi nisi dolorem animi natus! </p>
                       
                   </div>
                   
               </div> 
               </SwiperSlide>
          <SwiperSlide> <div className='card-item'>
                   <div className='card-img-part'>
                       <img src="https://i.ibb.co/0rJM3sD/martin-katler-7w-Cxl-Bf-GMdk-unsplash.jpg" alt="" />
                   </div>
                   <div className='card-content'>
                       <h1> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, totam. </h1>
                       <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusantium placeat atque totam dolores debitis commodi nisi dolorem animi natus! </p>
                       
                   </div>
                   
               </div> 
               </SwiperSlide>
          <SwiperSlide> 
          <div className='card-item'>
                   <div className='card-img-part'>
                       <img src="https://i.ibb.co/HhDLtbc/alessio-zaccaria-n-T1-Umzg-FAXY-unsplash.jpg" alt="" />
                   </div>
                   <div className='card-content'>
                       <h1> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, totam. </h1>
                       <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusantium placeat atque totam dolores debitis commodi nisi dolorem animi natus! </p>
                       
                   </div>
                   
               </div>
              
               </SwiperSlide>
            <SwiperSlide> 
          <div className='card-item'>
                   <div className='card-img-part'>
                       <img src="https://i.ibb.co/kg9cf9M/How-to-install-a-motherboard.jpg" alt="" />
                   </div>
                   <div className='card-content'>
                       <h1> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, totam. </h1>
                       <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusantium placeat atque totam dolores debitis commodi nisi dolorem animi natus! </p>
                       
                   </div>
                   
               </div>
              
               </SwiperSlide>
        </Swiper>
      </>
    );
};

export default CaruselItem;