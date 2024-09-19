
import thumb1 from "../../assets/img/thumbnail/thumbnail-1.jpg"
import Rating from '@mui/material/Rating';

import "./TopProduct.css";

const TopProduct = (props) => {
  return (
    <>
       <div className="topSellingbox ">
         <h2> {props.title}</h2>

         <div className="item d-flex align-items-center">
           <div className="item-image">
               <img src={thumb1} alt="" />
           </div>
           <div className="item-text">
               <h6> <a href="#"> Nestle Original Coffee-Mate Coffee Creamer </a></h6>
               <div className="review">
                   <Rating name="read-only" value={5} readOnly size="small"/>
               </div>
               <div className="product-card-bottom">
                  <span className="salePrice"> $32.85 </span> <span className="regularPrice"> $33.8 </span>
               </div>
           </div>
         </div>
         
         <div className="item d-flex align-items-center">
           <div className="item-image">
               <img src={thumb1} alt="" />
           </div>
           <div className="item-text">
               <h6> <a href="#"> Nestle Original Coffee-Mate Coffee Creamer </a></h6>
               <div className="review">
                  <Rating name="read-only" value={5} readOnly size="small"/>
              </div>
               <div className="product-card-bottom">
                  <span className="salePrice"> $32.85 </span> <span className="regularPrice"> $33.8 </span>
               </div>
           </div>
         </div>

         <div className="item d-flex align-items-center">
           <div className="item-image">
               <img src={thumb1} alt="" />
           </div>
           <div className="item-text">
               <h6> <a href="#"> Nestle Original Coffee-Mate Coffee Creamer </a></h6>
               <div className="review">
                   <Rating name="read-only" value={5} readOnly size="small"/>
               </div>
               <div className="product-card-bottom">
                  <span className="salePrice"> $32.85 </span> <span className="regularPrice"> $33.8 </span>
               </div>
           </div>
         </div>
       </div>
    </>
  )
}

export default TopProduct
















