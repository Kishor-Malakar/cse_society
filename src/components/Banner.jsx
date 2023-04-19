import React from 'react'
import Marquee from "react-fast-marquee";
import './Banner.css'
import { useState, useEffect } from 'react';
import {client} from '../client';

function Banner() {

  const [banners, setBanners] = useState([])

useEffect(() => {
  const query = `*[_type == "banner"]{
    bannerContent,
    bannerLink,
    linkDesc,
  }`;
  client.fetch(query)
  .then((data)=>{
  setBanners(data)
})
  .catch(console.error); 
}, []);

  return (
    <div className='b_main'>
      <Marquee speed={50} gradient={false} pauseOnHover>
      <div className="banner_text">
        {banners.map((banner,index)=>(
            <span key={index}>{banner.bannerContent} <a href={banner.bannerLink} target='_blank' rel="noreferrer">{banner.linkDesc}</a></span>
        ))}
      </div>
      </Marquee>
    </div>
  )
}
export default Banner;
