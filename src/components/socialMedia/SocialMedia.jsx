import React from "react";
import "./SocialMedia.css";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { useState, useEffect } from 'react';
import {client} from '../../client';

import {motion} from "framer-motion";
const SocialMedia = () => {
  const [linkedin, setLinkedin] = useState([]);
  const [instagram, setInstagram] = useState([]);
  const [youtube, setYoutube] = useState([]);
  const [facebook, setFacebook] = useState([]);
  const [semail, setSemail] = useState([]);
  useEffect(() => {
    const query = `*[_type == "linkedin"][0]{
      link,
    }`;
    client.fetch(query)
    .then((data)=>{
    setLinkedin(data)
  })
    .catch(console.error); 
  }, []);
  useEffect(() => {
    const query = `*[_type == "instagram"][0]{
      link,
    }`;
    client.fetch(query)
    .then((data)=>{
    setInstagram(data)
  })
    .catch(console.error); 
  }, []);
  useEffect(() => {
    const query = `*[_type == "facebook"][0]{
      link,
    }`;
    client.fetch(query)
    .then((data)=>{
    setFacebook(data)
  })
    .catch(console.error); 
  }, []);
  
  useEffect(() => {
    const query = `*[_type == "youtube"][0]{
      link,
    }`;
    client.fetch(query)
    .then((data)=>{
    setYoutube(data)
  })
    .catch(console.error); 
  }, []);
  useEffect(() => {
    const query = `*[_type == "sEmail"][0]{
      link,
    }`;
    client.fetch(query)
    .then((data)=>{
    setSemail(data)
  })
    .catch(console.error); 
  }, []);
  
  return (
    <div className="main_box bg-black backdrop-blur-2xl z-10">
      <div className="main items-center max-w-7xl z-20 xl:items-center p-3 mx-auto">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1
        }}
      >
        <div className="app__social-left">
          <a
            href="https://www.nitmz.ac.in/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="nit_logo mr-3"></div>
          </a>
          <a
            href={linkedin.link}
            target="_blank"
            rel="noreferrer"
          >
            <div className="mr-3">
              <BsLinkedin />
            </div>
          </a>
          <a
            href={instagram.link}
            target="_blank"
            rel="noreferrer"
          >
            <div className="mr-3">
              <BsInstagram />
            </div>
          </a>
          <a
            href={facebook.link}
            target="_blank"
            rel="noreferrer"
          >
            <div className="mr-3">
              <BsFacebook />
            </div>
          </a>
          <a
            href={youtube.link}
            target="_blank"
            rel="noreferrer"
          >
            <div >
              <BsYoutube />
            </div>
          </a>
        </div>
      </motion.div>
      <motion.div className="app__social-right flex items-center cursor-pointer"
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1
        }}>
        <a
          href={semail.link}
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <AiOutlineMail />
          </div>
        </a>
        <p className="uppercase ml-3 hidden md:inline-flex mail_text" style={{fontSize: "0.8rem", fontWeight: "500"}}>Get in touch</p>
        </motion.div>
        </div>
    </div>
  );
};

export default SocialMedia;
