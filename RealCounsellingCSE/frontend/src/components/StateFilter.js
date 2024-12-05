import React, { useState } from 'react';

// Example list of colleges (you can replace with real data)
const collegesData = {
  'Andhra Pradesh': [
    { name: 'College of Engineering, Andhra University', url: 'https://www.audoa.ac.in/' },
    { name: 'NIT Warangal', url: 'https://www.nitw.ac.in/' },
  ],
  'Maharashtra': [
    { name: 'Indian Institute of Technology Bombay', url: 'https://www.iitb.ac.in/' },
    { name: 'VJTI Mumbai', url: 'https://www.vjti.ac.in/' },
  ],
  'Karnataka': [
    { name: 'Indian Institute of Science, Bangalore', url: 'https://www.iisc.ac.in/' },
    { name: 'NIT Surathkal', url: 'https://www.nitk.ac.in/' },
  ],
  // Add more states and colleges here...
};

const StateFilter = () => {
  const [selectedState, setSelectedState] = useState('');
  const [colleges, setColleges] = useState([]);

  const states = Object.keys(collegesData);

  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    setColleges(state ? collegesData[state] : []);
  };

  return (
    <div className="state-filter">
      <h2>Filter CSE Colleges by State</h2>
      <label htmlFor="state">Select State: </label>
      <select id="state" value={selectedState} onChange={handleStateChange}>
        <option value="">--Select a State--</option>
        {states.map((state, index) => (
          <option key={index} value={state}>
            {state}
          </option>
        ))}
      </select>

      <div className="colleges-list">
        {colleges.length > 0 ? (
          <ul>
            {colleges.map((college, index) => (
              <li key={index}>
                <a href={college.url} target="_blank" rel="noopener noreferrer">
                  {college.name}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No colleges available for the selected state.</p>
        )}
      </div>
    </div>
  );
};

export default StateFilter;
