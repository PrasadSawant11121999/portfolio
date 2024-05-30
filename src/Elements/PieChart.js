import React, { useEffect, useState } from 'react';
import './Element.css'; // Import CSS file for styling

const PieChart = ({ id, percentage, skillName }) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);

  useEffect(() => {
    const circle = document.getElementById(`${id}-pie-chart-circle`);
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percentage / 100) * circumference;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;

    const animateOffset = () => {
      circle.style.transition = 'stroke-dashoffset 1.5s ease-in-out';
      circle.style.strokeDashoffset = offset;
    };

    const animateCount = () => {
      let start = 0;
      const duration = 1500;
      const increment = percentage / (duration / 20);

      const timer = setInterval(() => {
        start += increment;
        if (start >= percentage) {
          start = percentage;
          clearInterval(timer);
        }
        setCurrentPercentage(Math.round(start));
      }, 20);
    };

    animateOffset();
    animateCount();
  }, [id, percentage]);

  return (
    <div className="">
      <svg className="pie-chart-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle className="pie-chart-circle" id={`${id}-pie-chart-circle`} cx="50" cy="50" r="40" strokeWidth="10" />
        <text x="50%" y="50%" className="pie-chart-text" transform="rotate(90, 50, 50)">{currentPercentage}%</text>
      </svg>
      <div className="skill-name">{skillName}</div>
    </div>
  );
};

export default PieChart;
