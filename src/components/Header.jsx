import React from 'react'
import "./Header.css";
import {motion} from "framer-motion";
import {SocialMedia} from "./socialMedia";
import {Banner} from "./";
import h_bg from '../assets/hero-img.svg'
import { Typewriter } from 'react-simple-typewriter'
import { useState, useEffect } from 'react';
import {urlFor, client} from '../client';

function Header() {
const [des, setDes] = useState([])

useEffect(() => {
  const query = `*[_type == "header"][0]{
    societyLogo,
    societyDesc,
  }`;
  client.fetch(query)
  .then((data)=>{
  setDes(data)
})
  .catch(console.error); 
}, []);

  return (
    <div className='h_main' id='l_header'>
      <SocialMedia/><Banner/>
   <div className="out_c">
        <motion.div
          whileInView={{ y: [60, 0], opacity: [0, 1] }}
          transition={{
            duration: 1
          }}
          className="right_content">

            <h1 className='first_title_line'>&lt;OUR SOCIETY&gt;</h1>
            <div className="typo">
            <Typewriter words={['Computer Science Society']}
                loop={true} 
                cursor
                cursorStyle='_'
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000} />
            </div>
          </motion.div>
          <div className="left_right">
    <div className="left_c">
    <div className="content max-w-4xl xl:items-center">
    <motion.div
  whileInView={{ scale: [0, 1], opacity: [0, 1] }}
    transition={{
      duration: 1
    }} className='society_logo'>
{des.societyLogo && (<div className="s_img"><img src={urlFor(des.societyLogo).url()} alt="society_img"/></div>)}
      </motion.div>
      </div> 
   
    </div>

    <motion.div className="right_c"  whileInView={{ y: [70, 0], opacity: [0, 1] }}
    transition={{
      duration: 1, type:'tween'
    }}>
    <motion.div className="description"
 whileInView={{ x: [-20, 0], opacity: [0, 1] }}
    transition={{
      duration: 1
    }}>
      {des.societyDesc}
   </motion.div> <div className="header_img"><img src={h_bg} alt="header_img" /></div>
    </motion.div>
    </div>
    </div>
    </div>
  );
}

export default Header;
