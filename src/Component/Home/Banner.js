import React, { useState, useEffect } from "react";
import '../Component.css';
import photo from '../../asset/myprofile.png';
import python from '../../asset/PythonLogo.png';
import excel from '../../asset/ExcelLogo.png';
import sql from '../../asset/sql.png';
import powerBI from '../../asset/powerBi.png';
import { motion } from "framer-motion";

const Banner = ()=>{
    const [text, setText] = useState("ML Developer");
    const phrases = ["Fullstack Web Developer", "Data Analyst", "ML Developer"];

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            setText(phrases[currentIndex]);
            currentIndex = (currentIndex + 1) % phrases.length;
        }, 4000); 

        return () => clearInterval(interval);
    }, []);

    
    return (        
        <div className="container banner">            
            <div className="row pt-5">                
                <div className="col-md-5 p-2 ps-2">                        
                    <div className="postion-relative">
                        <div className="Circle Circle-1"></div>
                        <div className="Circle Circle-2"></div>
                        <div className="Circle Circle-3"></div>
                        <motion.div className="greeting"
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                        >HELLO !</motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 ,delay:0.3}}
                            >
                            <h2>
                                <span className="initials">I'm</span><span className="name">Prasad</span>
                                <div><span className="name">Sawant</span></div>
                            </h2>
                        </motion.div>
                        <div className="typewriter">  
                            <p className="typing-erase profession">{text}</p>
                        </div>
                        <div className='mt-4 mb-2'>
                            <a className="hireme-btn">HIRE ME</a>
                            <a className="mywork-btn">MY WORKS</a>
                        </div>
                    </div>  
                </div>
                <div className="col-md-7 p-0">
                    <div className="d-flex justify-content-center position-relative">
                        <div className="Image-Back-figure"></div>
                        <img id="banner-img" src={photo}/>      
                    </div>
                </div>
            </div>   
            <div className=" row banner-bottom-skill">
                <div className="col-md-3 d-flex align-items-center justify-content-center bottom-bar-skill">
                    <img src={excel} className="skill me-2"/><span className="text-white skill-name">MS Excel</span>
                </div>
                <div className="col-md-3 d-flex align-items-center justify-content-center bottom-bar-skill">
                    <img src={sql} className="skill me-2"/><span className="text-white skill-name">PL/SQL</span>
                </div>
                <div className="col-md-3 d-flex align-items-center justify-content-center bottom-bar-skill">
                    <img src={powerBI} className="skill me-2"/><span className="text-white skill-name">Power BI</span>
                </div>
                <div className="col-md-3 d-flex align-items-center justify-content-center bottom-bar-skill">
                    <img src={python} className="skill me-2"/><span className="text-white skill-name">Python</span>
                </div>

            </div> 
        </div>
        
    );
};

export default Banner;