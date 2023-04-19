import React from "react";
import { motion } from "framer-motion";
import "./Members.css";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { useState, useEffect } from 'react';
import {urlFor, client} from '../client';
function Members() {
  const [sMembers, setSMembers] = useState([])
  const [jMembers, setJMembers] = useState([])

  useEffect(() => {
    const query = `*[_type == "sMembers"] | order(mIndex asc){
      memberPosition,
      memberName,
      memberImg,
      linkedinLink,
      instagramLink,
      bColour 
    }`;
    client.fetch(query) 
    .then((data)=>{ 
    setSMembers(data)
    })
    .catch(console.error); 
  }, []); 
  useEffect(() => {
    const query = `*[_type == "jMembers"] | order(mIndex asc){
      memberPosition,
      memberName,
      memberImg,
      linkedinLink,
      instagramLink,
      bColour
    }`;
    client.fetch(query)
    .then((data)=>{ 
    setJMembers(data)
    })
    .catch(console.error); 
  }, []); 
  return (
    <div
      id="M_Main"
    >
      <motion.h2
              whileInView={{y:[50,0], opacity: [0, 1] }}
              transition={{ duration:1 }}
              className="head-text">Meet Our Team: <span className="head_f">&lt;The Heart and Soul Behind the Success of Our Society&gt;</span></motion.h2>
     <div className="list_main">
     <div className="app__senior-container">
      <h4 className="head-second-text">SOCIETY HEADS</h4>
        <div className="app__list">
          {sMembers.map((sMember,index)=> 
            <motion.div 
            key={index}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration:1.5 }}
              className="app__item app__flexs"
            >
              <div
                className="app__flexs" 
                style={{backgroundColor: sMember.bColour}}
                > 
               {sMember.memberImg && ( <img src={urlFor(sMember.memberImg).url()} alt='Pic'/>)}
              </div>
          <div className="m_links"><div><a href={sMember.linkedinLink} target="_blank" rel="noreferrer"><BsLinkedin/></a></div><div><a href={sMember.instagramLink} target="_blank" rel="noreferrer"><BsInstagram/></a></div></div>
              <p
                className="p-text"
              >
        {sMember.memberName}
              </p>
              <p
                className="p-text-2"
              >
        {sMember.memberPosition}
              </p>
            </motion.div>
          )}

        </div>
      </div>
      <div className="app__junior-container">
      <h4 className="head-second-text">SOCIETY ASSOCIATES</h4>
        <div className="app__list">
        {jMembers.map((jMember,index)=>
            <motion.div
            key={index}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1.5 }}
              className="app__item app__flexs"
            >
              <div
                className="app__flexs" 
                style={{backgroundColor:jMember.bColour}}
              >
                {jMember.memberImg && ( <img src={urlFor(jMember.memberImg).url()} alt='Pic'/>)}
              </div>
              <div className="m_links"><div><a href={jMember.linkedinLink} target="_blank" rel="noreferrer"><BsLinkedin/></a></div><div><a href={jMember.instagramLink} target="_blank" rel="noreferrer"><BsInstagram/></a></div></div>
              <p
                className="p-text"
              >
         {jMember.memberName}
              </p>
              <p
                className="p-text-2"
              >
        {jMember.memberPosition}
              </p>
            </motion.div>
        )}
        </div>
      </div>
     </div>
    </div>
  );
}

export default Members;