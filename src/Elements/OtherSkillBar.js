import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const SkillBar = ({ name, width, icon }) => {
  return (
    <div className="skill-bar">
      <div className="skill-bar-container d-flex">
        <div className="skill-bar-inner m-1 d-flex justify-content-end align-items-center" style={{ '--width': `${width}%` }}>
            <span className="ms-1 me-2 mb-0" style={{fontSize:20, color:"White"}}>{name + ' - ' + width + '%'}
            </span>
            <FontAwesomeIcon icon={faCircle} style={{ color: "#ecb643", height:15,marginRight:'10px'}} />

        </div>

      </div>
    </div>
  );
};

export default SkillBar;
