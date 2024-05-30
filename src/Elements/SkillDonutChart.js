// src/SkillDonutChart.js
import React from 'react';
import { Chart } from 'react-google-charts';

const SkillDonutChart = ({ percentage, skill }) => {
  const data = [
    ['Skill', 'Percentage'],
    [skill, percentage],
    ['Remaining', 100 - percentage],
  ];

  const options = {
    pieHole: 0.6,
    pieStartAngle: -90,
    legend: 'none',
    tooltip: { trigger: 'none' },
    slices: {
      0: { color: '#FFA726' },
      1: { color: '#333333', offset: 0.15 },
    },
    pieSliceText: 'none',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#333', padding: 20, borderRadius: '50%', width: 150, height: 150 }}>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={'100px'}
        height={'100px'}
      />
      <div style={{ position: 'absolute', color: '#FFA726', fontSize: 20, fontWeight: 'bold' }}>{`${percentage}%`}</div>
      <div style={{ color: '#ffffff', marginTop: 20 }}>{skill}</div>
    </div>
  );
};

export default SkillDonutChart;
