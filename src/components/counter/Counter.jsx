

import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowUp } from "react-icons/md";


import "./Counter.css";
import { useState } from "react";
const Counter = () => {
  const [count , setCount ] = useState(1);
   
  // increment
  const handleIncrement = () => {
      setCount((prevState) => prevState + 1);  

  }; 

  // decrement
  const handleDescrement = () => {
    if (count > 1 ) {
      setCount((prevState) => prevState - 1);
    }
  }; 

  return (
    <>
       <div className="counter d-flex align-items-center">
         <h1> { count } </h1>
            <button className='upper' onClick={handleIncrement} > <MdKeyboardArrowUp /> </button>
             <button className='lower' onClick={handleDescrement}> <IoIosArrowDown /> </button>
        </div>
    </>
  )
}

export default Counter

