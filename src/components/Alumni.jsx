import React from 'react'
import './Alumni.css'
import {motion} from "framer-motion"; 
import { useState, useEffect } from 'react';
import {urlFor, client} from '../client';
import {BsLinkedin} from "react-icons/bs";
import Marquee from "react-fast-marquee";
function Alumni() {
  const [alumnis, setAlumnis] = useState([])

  useEffect(() => {
    const query = `*[_type == "alumni"]{
      linkedinLink,
      graduationYear,
      alumniName,
      alumniImg,
      alumniCompany
    }`;
    client.fetch(query)
    .then((data)=>{ 
    setAlumnis(data)
    })
    .catch(console.error); 
  }, []); 
  return (
    <div className='al_main'><motion.h1 whileInView={{opacity:[0,1], y:[100,0]}} transition={{duration:  1, type: 'tween'}} className="al_heading">&lt;Have Alumni On Your Way&gt;</motion.h1>
     <Marquee gradient={false} speed={60} pauseOnClick >
      <div
      className="app__work-portfolio">
        {alumnis.map((alumni, index)=>
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              {alumni.alumniImg && <img src={urlFor(alumni.alumniImg).url()} alt='chandu' />}
              <motion.div
              whileHover={{opacity: [0,1]}} 
              transition={{duration: 0.25, staggerChildren: 0.5, ease: 'easeInOut'}}
              className= "app__work-hover app__flex"
              >
                <a href={alumni.linkedinLink} target="_blank" rel='noreferrer'>
                  <motion.div
                  whileInView={{scale: [0,1]}}
                  whileHover={{opacity: [1,0.7]}}
                  transition={{duration: 0.25}}
                  className= "app__flex"
                  >
                    <BsLinkedin/>
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{alumni.alumniName}</h4>
              <h5>{alumni.alumniCompany}</h5>
              <div className='p_year'>{alumni.graduationYear}</div>
            </div>
            <div
              className= "app__work-hover-phone app__flex">
                <a href={alumni.linkedinLink} target="_blank" rel='noreferrer'>
                  <motion.div
                  whileInView={{scale: [0,1]}}
                  transition={{duration: 0.25}}
                  className= "app__flex"
                  >
                    <BsLinkedin/>
                  </motion.div>
                </a>
              </div>
          </div>
      )}
      </div>
      </Marquee>
    </div>
  )
}
export default Alumni;
