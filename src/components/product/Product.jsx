
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { CiHeart, CiShuffle } from "react-icons/ci";

import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';

import "./Product.css"


const Product = (props) => {

  console.log(props.item);
  

  return (
          <>

      <div className="productThumb my-2">
  
          {
            props.item?.tag?.length > 0 ?
             <span className={`badge ${props.item?.tag}`}> 
            {props.item?.tag }  
           </span> : null
          }
      
        <Link > 
          <div className="product-image">      
          <div className="custom-photo-box">
                 <img style={{width: "100%"}} src={props?.item?.photo[0]} alt="product-photo" />
            </div>

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
         
         <div className="info-custom">
           <h4 className="category"> {props?.item?.brand} </h4>
           <div className="title"> 
           <Link to={`/product/${props?.item?._id}`} >
                  {props?.item?.name.length > 35 ? props?.item?.name?.substring(0, 30) + ". . ."  : props?.item?.name } 
              </Link>
          </div>
           <div className="review">
           <Rating name="read-only" value={props?.item?.rating} readOnly size="small"/>
           </div>
           <div className="author">
              <p> By <a href="#"> NestFood </a></p>
           </div>
           <div className="product-card-bottom">
            <div className="product-price">
                <span> {props?.item?.oldPrice} </span> 
                <span className="old-price"> {props?.item?.price} </span>
            </div>
            <div className="product-cart">
            <Link to={`/product/${props?.item?._id}`} > 
                <IoCartOutline className="cart" /> Add 
             </Link>
            </div>
           </div>
         </div>
      </div>
      
    </>
  )
}

export default Product






