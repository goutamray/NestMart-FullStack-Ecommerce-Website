
import { useState } from "react";
import Slider from "react-slider"; 

 const MIN = 100;
 const MAX = 12000;


import "./Filter.css";
const Filter = () => {

     const [values, setValues ] = useState([MIN, MAX]);

  return (
    <>
      <div className="app my-3">
        <div className="box">
           <Slider className="slider" value={values} min={MIN} max={MAX} onChange={setValues}/> 
           <div className="colors"> 
               <span> From : </span > ${values[0]} 
               <span className="high-price"> To : </span > ${values[1]} 
           </div>
        </div>
      </div>
    </>
  )
}

export default Filter

















