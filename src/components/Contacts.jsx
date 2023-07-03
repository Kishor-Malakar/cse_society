import './Contacts.css'
import { SlLocationPin} from 'react-icons/sl';
import { AiOutlineMail} from 'react-icons/ai';
import { FiPhoneCall} from 'react-icons/fi';
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { useState, useEffect } from 'react';
import {client} from '../client';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {AiOutlineCopyright} from 'react-icons/ai';

function Contacts() {
    const [emailJs, setEmailjs] = useState([]);
    const [linkedin, setLinkedin] = useState([]);
    const [instagram, setInstagram] = useState([]);
    const [youtube, setYoutube] = useState([]);
    const [facebook, setFacebook] = useState([]);
    const [semail, setSemail] = useState([]);
    const [stel, setStel] = useState([]);
    useEffect(() => {
        const query = `*[_type == "emailJs"][0]{
            publicKey,
            templateId,
            serviceId
        }`;
        client.fetch(query)
        .then((data)=>{
        setEmailjs(data)
      })
        .catch(console.error); 
      }, []);

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm((emailJs.serviceId), (emailJs.templateId), form.current, (emailJs.publicKey))
      .then(response => {
        
      });
      e.target.reset(e);
    };
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
      useEffect(() => {
        const query = `*[_type == "tel"][0]{
          link,
        }`;
        client.fetch(query)
        .then((data)=>{
        setStel(data)
      })
        .catch(console.error); 
      }, []);
  return (
    <div className='con_main'>
       <div className="con_container">
            <div className="contactInfo">
                <div className="heading_text">
                    Contact Info
                </div>
                <div className="c_address">
                    <span><SlLocationPin/></span>
               <span> PPXF+W39, Chaltlang Rd, Chaltlang Venglai, Aizawl, Mizoram 796012</span>
                </div>
                <div className="c_email">
                    <span><AiOutlineMail/></span>
            <span><a href={semail.link}>cse_society@nitmz.ac.in</a></span>
                </div>
                <div className="c_phone">
                    <span><FiPhoneCall/></span>
                    <span>{stel.link}</span>
                </div>
                <div className="social_m">
                    <div> <a
            href={linkedin.link}
            target="_blank"
            rel="noreferrer"
          ><BsLinkedin/></a>
          </div>
                    <div> <a
            href={instagram.link}
            target="_blank"
            rel="noreferrer"
          ><BsInstagram/></a>
          </div>
                    <div> <a
            href={facebook.link}
            target="_blank"
            rel="noreferrer"
          ><BsFacebook/></a>
          </div>
                    <div> <a
            href={youtube.link}
            target="_blank"
            rel="noreferrer"
          ><BsYoutube/></a>
          </div>
                </div>
          <div className="item">
                    <span style={{ paddingRight: 5 }}>Copyright</span>
                    <AiOutlineCopyright/>
                    <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()}, NIT Mizoram
                    </span>
                </div>
            </div>
            <div className="contactForm">
            <form ref={form} onSubmit={sendEmail}>
                <div className='app__flex contactForm_heading'>Send a Message</div>
               <div className="f_content">
               <div className="app__flex ">
                    <input type="text" name="from_name" required className="p-text f_item" placeholder='Name'/>
                </div>
                <div className="app__flex ">
                    <input type="email" name="from_email" required className="p-text f_item" placeholder='Email Address'/>
                </div>
                <div className="app__flex ">
                    <input type="text" name="from_mobile" required className="p-text f_item" placeholder='Mobile Number'/>
                </div>
                <div className="app__flex ">
                    <textarea type="text" name="message" required className="p-text f_item" placeholder='Write your message here... '/>
                </div>
                <div className="f_button">
                    <div><input type='submit' value="Send"/></div>
                </div>
               </div>
            </form>
            </div>
       </div>
    </div>
  )
}
export default Contacts;
    
