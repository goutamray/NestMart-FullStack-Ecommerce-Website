
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { CiHeart, CiShuffle } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";
import Rating from '@mui/material/Rating';

import { Link } from "react-router-dom";

import "./ProductBest.css"; 
const ProductBest = (props) => {
   
  return (
    <>
         <div className="productThumb my-2">
        {
          props.tag !== null && props.tag !== undefined &&  
           <span className={`badge ${props.tag}`}> {props.tag} </span>
        }
      
        <Link > 
          <div className="product-image">      
             <img style={{width: "100%"}} src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-2-2.jpg" alt="" />

             <div className="overlay">
                <ul className="list list-inline">
                    <li className="list-inline-item">
                      <a href="#"> <MdOutlineRemoveRedEye /> </a>
                     
                    </li>
                    <li className="list-inline-item">
                      <a href="#" > <CiHeart /> </a>
                     
                    </li>
                    <li className="list-inline-item" >
                      <a href="#" > <CiShuffle /> </a>
                     
                    </li>
                </ul>
             </div>
         </div>
         </Link>
         
         <div className="info-part">
           <h4 className="category"> Snack</h4>
           <div className="title">
              <a href="#"> Seeds of Change Organic Quinoa, Brown, & Red Rice</a>
           </div>
           <div className="review">
               <Rating name="read-only" value={5} readOnly size="small"/>
           </div>
           <div className="product-card-bottom">
            <div className="product-price">
                <span> $54.85 </span> <span className="old-price"> $55.8 </span>
            </div>
           </div>
           <div className="cart-btn">
            <a> <FaCartArrowDown /> Add To Cart </a>
           </div>
         </div>
      </div>
      
    </>
  )
}

export default ProductBest














