import React from "react";
import "./Footer.css";
import {AiOutlineCopyright} from 'react-icons/ai';
import { useState, useEffect } from 'react';
const Footer = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('https://api.countapi.xyz/hit/CSS/e836c750-afd4-4020-aeed-e435967be954')
          .then(response => response.json())
          .then(data => setCount(data.value))
          .catch(error => console.error(error));
      }, []);
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="item">This Page has&nbsp; <div id="visit_count">{Math.round(count/4)}</div>&nbsp;views</div>
                <div className="item">
                    <span style={{ paddingRight: 5 }}>Copyright</span>
                    <AiOutlineCopyright/>
                    <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()}, NIT Mizoram
                    </span>
                </div>
              </div>
        </footer>
    );
};

export default Footer;