import React from "react";
import '../Component.css';
import PieChart  from '../../Elements/PieChart.js';
import SkillBar from '../../Elements/OtherSkillBar.js';
import { motion } from "framer-motion";

const SkillSection=()=>{

    return(
      <div className='skill-container container-fluid pb-1'>  
        <div className='container'>
          <div className='row'>
            <div className='col-md-7'>
              <div>
                <div className='position-relative'>
                  <div className='position-absolute watermark'>M</div>
                  <motion.div className="position-absolute section-title"
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}>
                  MY SKILLS</motion.div>
                </div>
              </div>               
            </div> 
            <div className='col-md-5'>
              <p className='skill-content'>
              "Unlock the potential of your data with my proficiency in Python, SQL, Power BI, Excel, and advanced analytical techniques, delivering actionable insights for informed decision-making."
              </p>
            </div> 
          </div>
            
                      
          <div className='row pt-2'>
            <div className="col-md-9">
              <div className="row">                
                <div className='col-md-3 col-sm-6 mt-2 p-1 d-flex justify-content-center'>
                    <PieChart id="Statistics" percentage={94} skillName="Statistics" />
                </div>
                <div className='col-md-3 col-sm-6 mt-2 p-1 d-flex justify-content-center'>
                    <PieChart id="Algebra" percentage={92} skillName="Linear Algebra" />
                </div>
                <div className='col-md-3 col-sm-6 mt-2 p-1 d-flex justify-content-center'>
                    <PieChart id="Excel" percentage={90} skillName="Adv. MS Excel" />
                </div>  
                <div className='col-md-3 col-sm-6 mt-2 p-1 d-flex justify-content-center'>
                  <PieChart id="sql" percentage={90} skillName="PL/SQL" />
                </div>
                <div className='col-md-3 col-sm-6 mt-2 p-1 d-flex justify-content-center'>     
                    <PieChart id="PowerBI" percentage={75} skillName="Power BI" />
                </div>
                <div className='col-md-3 col-sm-6 mt-2 p-1 d-flex justify-content-center'>
                    <PieChart id="Python" percentage={80} skillName="Python" />
                </div>
                <div className='col-md-3 col-sm-6 mt-2 p-1 d-flex justify-content-center'>
                    <PieChart id="ML" percentage={70} skillName="Machine Learning" />
                </div>
                <div className='col-md-3 col-sm-6 mt-2 p-1 d-flex justify-content-center'>
                    <PieChart id="DL" percentage={50} skillName="Deep Learning" />
                </div>
              </div>              
            </div>
            <div className="col-md-3">
              <div>
                  <h2 className="softskill-title">Soft Skills</h2>
                  <ul className="softskill-list">
                    <motion.li 
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1,delay:0.1 }}>
                      Communication Skills
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1 ,delay:0.2}}>
                      Problem Solving
                      </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1 ,delay:0.3}}>
                    Collaboration and Teamwork
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1 ,delay:0.4}}>
                    Curiosity and Eagerness to Learn
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1 ,delay:0.5}}>
                    Attention to Detail
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1 ,delay:0.6}}>
                    Business Acumen
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1 ,delay:0.7}}>
                    Adaptability
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1 ,delay:0.8}}>
                    Critical Thinking
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1 ,delay:0.9}}>
                    Time Management
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1 ,delay:1.0}}>
                    Storytelling with Data
                    </motion.li>
                  </ul>
              </div>
            </div>             
          </div>

          <div className="row p-1 m-1 pb-3 otherSkills-container">
            <div className="row ">
              <h2 className="text-left otherSkills">Other Skills / Experties</h2>
            </div>
            <div className="row">
              <SkillBar name="HTML5" width={90} />
              <SkillBar name="CSS3" width={85}/>
              <SkillBar name="JavaScript" width={87}/>
              <SkillBar name="JQuery" width={88}/>
              <SkillBar name="ASP.NET MVC" width={82}/>
            </div>            
          </div>
        </div>
      </div>
    );

};

export default SkillSection;