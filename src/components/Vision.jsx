import React, { useState, useEffect } from "react";
import './Vision.css';
import {motion} from 'framer-motion';
import {urlFor, client} from "../client";

export default function Vision(){
const [hod_details, setHod_details] = useState([])       


useEffect(() => {
  const query = `*[_type == "hod"][0]{
    hodDesc,
    hodImg,
    hodName,
  }`;
  client.fetch(query)
  .then((data)=>{
  setHod_details(data)
}) 
  .catch(console.error); 
}, []);

  return (
    <div className='v_main'>
      <div>
      <motion.div 
      whileInView={{ x: [-100,0], opacity: [0, 1] }}
         transition={{
           duration: 1
          }}
      className="v_heading">
        &lt;THE CSS <span className='text-red-400'>VISION</span>&gt;
      </motion.div>
      </div>
      <div className='second_part'> 
      <motion.div
         whileInView={{ y: [100,0], opacity: [0, 1] }}
         transition={{
           duration: 1 
          }}
      className="v_container">
      <motion.div whileHover={{scale: 1.05}} transition={{duration: 0.5, type: 'tween'}}
       className="hod_img">
        {hod_details.hodImg && (<img src={urlFor(hod_details.hodImg).url()} alt="HOD"/>)}
      </motion.div>
      <div className="desc">{hod_details.hodName}</div>
      <div className="desc_2">{hod_details.hodDesc}</div></motion.div>
      <motion.div
         whileInView={{ y: [150,0], opacity: [0, 1] }}
         transition={{
           duration: 1
          }}
      className="hod_description">NIT Mizoram had witnessed changes in the 
        dynamic thoughts and concrete
        ideas of the young aspiring engineers.
        Our HOD with his amazing knowledge,
        helps us to grow better in our life. He 
        motivates us to work continuously 
        and for any kind of help, he stands 
        beside us. We have been to this society,
        only for 4 years, but his contribution made
        this society is 10 years old.
        CSS mentions full-hearted gratitude 
        to him.</motion.div>
      </div>
    </div>
  )
}
