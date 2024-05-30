import React from "react";
import '../Component.css';
import { motion } from "framer-motion";

const ExperienceSection=()=>{

    return(
        <div className='Experience-container container-fluid pb-1'>  
            <div className='container'>
                <div className='row'>                   
                    <div className='col-md-5'>
                        <p className='Experience-content'>
                        "Dive into a detailed account of my career achievements and professional growth. This section showcases the diverse experiences that have built my skills and prepared me for future challenges."
                        </p>
                    </div> 
                    <div className='col-md-7'>
                        <div>
                        <div className='position-relative'>
                            <div className='position-absolute watermark' style={{}}>E</div>
                            <motion.div className="position-absolute section-title"
                                        initial={{ opacity: 0, x: 200 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 1 }}>
                            Experience</motion.div>
                        </div>
                        </div>               
                    </div> 
                </div>
            </div>
      </div>
    );

};

export default ExperienceSection;