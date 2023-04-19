import React from 'react';
import './Eventss.css';
import {motion} from 'framer-motion';
import { useState, useEffect } from 'react';
import {urlFor, client} from '../client';
export default function Eventss()  {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const query = `*[_type == "events"]{
      eventDesc,
      eventImg,
      eventName,
    }`;
    client.fetch(query)
    .then((data)=>{ 
    setEvents(data)
    })
    .catch(console.error); 
  }, []); 
  return (
    <div className="e_main">
      <div className="e_content">
        <motion.div className="e_heading" whileInView={{opacity: [0,1]}}
            transition={{duration: 1, type: 'tween'}}><h3>As a new team of CSS, we welcome you to this page. Our new vision and most awaited surprises will leave you wide-eyed.
        We will be conducting Hackathons, quizzes, and workshop programs for students of different
        Institutes of India.</h3></motion.div>
        <div id='aboutMain'>
    <motion.div 
     whileInView={{x: [-200,0] ,opacity: [0,1]}}
     transition={{duration: 1, type: 'tween'}}
     className="head_text">&lt;EVENTS&gt;</motion.div>
      <div className="app__cards" >
        {events.map((eventss,index)=>
          <motion.div
            key={index}
            whileInView={{y:[100,0] ,opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 1, type: 'tween'}}
            className="app__cards-item"
            >
            <div> {eventss.eventImg && ( <img src={urlFor(eventss.eventImg).url()} alt="chandu"/> )} </div>
              <div className="event_details">
            <h2>{eventss.eventName}</h2>
            <p>{eventss.eventDesc}</p>
              </div>

          </motion.div>
        )}
      </div>
    </div>
      </div>
    </div>
  )
}
