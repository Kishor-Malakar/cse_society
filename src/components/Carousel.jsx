import React from 'react';
import './Carousel.css'
import { useState, useEffect } from 'react';
import {urlFor, client} from '../client';
import firstP from '../assets/codeGuru.jpg'
import secondP from '../assets/workshop.jpg'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import {Swiper, SwiperSlide} from "swiper/react"
import {EffectCoverflow, Pagination, Navigation} from 'swiper';
import {BsBoxArrowInRight, BsBoxArrowInLeft} from "react-icons/bs";
import {motion} from 'framer-motion';
function Carousel() {
  
  const [cimages, setCimages] = useState([]);  
  useEffect(() => {
    const query = `*[_type == "carousel"]{
     cImg,
    }`; 
    client.fetch(query)
    .then((data)=>{ 
    setCimages(data)
  })
    .catch(console.error); 
  }, []);
  return (
    <div className="c_container max-w-4xl xl:items-center" id='l_carousel'>
      <motion.div
         whileInView={{ x: [-200,0], opacity: [0, 1] }}
         transition={{
           duration: 1
          }}
      >
        
        <h1 className="heading">&lt;A Splash Of  &nbsp;<span className='text-black'>CSS</span>&gt;</h1>
      </motion.div>
   <div
       className="swiper_container"
   >
   <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={'auto'}

      pagination={{ el: '.swiper-pagination', clickable: true }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
     
    >
          <SwiperSlide >
     <img src={firstP} alt="firstImg" />
      </SwiperSlide>
        <SwiperSlide >
     <img src={secondP} alt="secondImg" />
      </SwiperSlide>
  
      {cimages.map((cimg,index)=>
        <SwiperSlide key={index} >
      {cimg.cImg && (<img src={urlFor(cimg.cImg).url()} alt="cPic" />)}
      </SwiperSlide>
          )}
    
      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <BsBoxArrowInLeft/>
        </div>
        <div className="swiper-button-next slider-arrow">
          <BsBoxArrowInRight/>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
   </div>
   <motion.div
     whileInView={{y: [100,0], opacity: [0, 1] }}
     transition={{
       duration: 1}}
   ><h1 className='bottom_text'>Joining the Computer Science Society is a great way to meet others who share your interests and goals. This can be especially valuable for students who are looking to build their professional network, grow and learn about potential career paths.</h1></motion.div>
   
  </div>
);
}

export default Carousel;