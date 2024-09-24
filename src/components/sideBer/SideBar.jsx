// material ui 
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio'; 
import RadioGroup from '@mui/material/RadioGroup'; 
import Rating from '@mui/material/Rating';  

import banner11 from "../../assets/img/banner/banner-11.png"

import { IoClose } from "react-icons/io5";
import { useContext, useEffect, useState } from "react"
import { useParams } from 'react-router-dom';


// range slider 
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

import { MyContext } from "../../App"

import "./SideBar.css";
const SideBar = (props) => {
   const [value, setValue] = useState([20, 90000]);
   const [radioData, setRadioData] = useState();

   const [categoryId, setCategoryId] = useState(""); 

  const context = useContext(MyContext)
  const { id } = useParams(); 

  
   // Handle category selection
   const handleChange = (event) => {
      const selectedCategory = event.target.value;
       setRadioData(selectedCategory);
       setCategoryId(selectedCategory);
   
       // Immediately filter by the selected category and price range
       props.filterByPrice(value, selectedCategory);

   };


   // Set category ID from URL parameters
   useEffect(() => {
      setCategoryId(id); 
   }, [id]);

   // // Trigger filtering by price range and category ID
   useEffect(() => {
   if (categoryId) {
      props.filterByPrice(value, categoryId);
   }
   }, [value, categoryId]);



   // rating change filter 
   const onRatingChange = (newRating) => {
      props.filterByRating(newRating, categoryId); // Pass the selected rating and current category ID
      props.openSideBarData(); 
    }; 

    SideBar.defaultProps = {
      filterByPrice: () => {},
    };

  return (
    <>
      <div className={`sidebar-left ${props?.isOpenSideBar === true ? "openSidebar" : ""}`}>
        <div className="card-box">
         <div className="cat-part">
           <h2> Category </h2>
           <button onClick={props?.openSideBarData}> <IoClose />  </button>
         </div>

           <div className="catList">

            <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={radioData}
                  onChange={handleChange}
                  >
                     {
                        context?.categoryData?.length !== 0 &&
                        context?.categoryData?.map((item, index) => {
                           return <li key={index} > 
                           <FormControlLabel value={item?._id}  control={<Radio />} label={item?.name} />
                        </li>
                        })
                     } 
                  </RadioGroup>

          
           </div>
        </div>

      {/* Fill by price */}
        <div className="card-box">
           <h2 > Fill by price </h2>
              <div className="filterBox mb-2">
                <RangeSlider min={20} max={90000}  step={5} value={value} onInput={setValue} />
                  <div className="d-flex pt-2 pb-2 priceRange">
                     <span> From: <strong className='text-dark'>Tk : {value[0]} </strong> </span>
                     <span className='ml-auto second-price'> From: <strong className='text-dark'>Tk : {value[1]} </strong> </span>
                  </div>
               </div>
       
          <div className="customer-checkbox">
             <h2> Color </h2>
             <ul>
                     <li onClick={() => onRatingChange(5)} >
                        <Rating 
                           name="read-only" 
                           value={5} 
                           readOnly 
                           size="small" 
                           
                        />
                     </li>
                     <li onClick={() => onRatingChange(4)}>
                        <Rating 
                           name="read-only" 
                           value={4} 
                           readOnly 
                           size="small" 
                          
                        />
                     </li>
                     <li onClick={() => onRatingChange(3)}>
                        <Rating 
                           name="read-only" 
                           value={3} 
                           readOnly 
                           size="small" 
                        
                        />
                     </li>
                     <li onClick={() => onRatingChange(2)}>
                        <Rating 
                           name="read-only" 
                           value={2} 
                           readOnly 
                           size="small" 
                        
                        />
                     </li>
                     <li onClick={() => onRatingChange(1)}>
                        <Rating 
                           name="read-only" 
                           value={1} 
                           readOnly
                           size="small" 
                          
                        />
                     </li>
                </ul>

          </div>
        </div>

      {/* New products*/}
        <div className="card-box-img">
             <img src={banner11} alt="" />
        </div>
      </div>
    </>
  )
}

export default SideBar














