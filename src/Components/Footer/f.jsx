import React, { useEffect, useState } from 'react';

const CheckboxGroup = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [checked, setChecked] = useState(false);
  
  const options = ['Men', 'Women', 'Kids']; // Your checkbox options

  const handleCheckboxChange = (option) => {
    setSelectedOption(option === selectedOption ? null : option);
    if(option===selectedOption){
    setChecked(!checked);
    }
  };

  useEffect(()=>{
    if(selectedOption!=null){
     console.log(selectedOption);
    }
  })
  return (
    <>
    <div>
      {options.map((option) => (
        <div key={option}>
          <input
            type="checkbox"
            id={option}
            name={option}
            checked={selectedOption === option} 
            onChange={() => handleCheckboxChange(option)}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
    {checked && 
    <button>addd</button>}
    </>
  );
};

export default CheckboxGroup;
