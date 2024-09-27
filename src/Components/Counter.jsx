import React, { useEffect, useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);

  async function increaseCount() {
    const intervalId = setInterval(() => {
      setNumber((prev) => {
        if (prev >= 6000) {
          clearInterval(intervalId);
          return 6000; 
        }
        return prev + 10;
      });
    }, 20); 
  }

  useEffect(()=>{
    increaseCount();
  },[])

  return (
    <div className='Counter-div'>
      <p>Browse <span>{number}+ </span>products</p>
    </div>
  );
}

export default Counter;
