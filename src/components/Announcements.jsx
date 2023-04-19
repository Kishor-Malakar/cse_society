import React from 'react';
import './Announcements.css';
import {motion} from 'framer-motion';
import {HiOutlineExternalLink} from 'react-icons/hi';
import {Banner} from "./";
import { useState, useEffect } from 'react';
import {urlFor, client} from '../client';
function Announcements() {
  const [bulletin, setBulletin] = useState([])

useEffect(() => {
  const query = `*[_type == "bulletin"]{
    postImg,
    postLink,
    linkText,
  }`;
  client.fetch(query)
  .then((data)=>{ 
  setBulletin(data)
})
  .catch(console.error); 
}, []); 
  return (
    <>
    <Banner/>
    <div className='an_main'><motion.h1 whileInView={{y: [100,0] ,opacity: [0,1]}}
    transition={{duration: 1, type: 'tween'}} className="an_heading">&lt;Bulletin&gt;</motion.h1>
     <div className="relative w-full flex items-center overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track scrollbar-track-gray-400/20 scrollbar-thumb-[#ee4266]/80">
        <div className="announcement_cards">
       {bulletin.map((bulletins,index)=>
        <article key={index} className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 snap-center"> <motion.div whileInView={{ x: [100,0], opacity: [0, 1] }}     transition={{duration: 1.5, type: 'tween' }} className="a_post a_img"><div>{bulletins.postImg &&(<img src={urlFor(bulletins.postImg).url()}  alt='bulletin'></img>)}</div><div className='link_text'>{bulletins.linkText}<a href={bulletins.postLink} target='_blank' rel='noreferrer'><HiOutlineExternalLink/></a></div></motion.div></article>)}
      </div>
      </div>
      </div>
    </>
  )
}
export default Announcements;
