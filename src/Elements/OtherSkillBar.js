import React from 'react';

const SkillBar = ({ name, width, icon }) => {
  return (
    <div className="skill-bar">
      <div className="skill-bar-container d-flex">
        <div className="skill-bar-inner m-1 d-flex justify-content-end" style={{ '--width': `${width}%` }}>
            <span className="skill-name ms-1 me-2 mb-0">{name + ' - ' + width + '%'}</span>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
