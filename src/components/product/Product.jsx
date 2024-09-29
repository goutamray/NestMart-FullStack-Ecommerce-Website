
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { CiHeart, CiShuffle } from "react-icons/ci";

import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';

import "./Product.css"
import { createWishListData } from "../../utils/api";
import createToast from "../../utils/toastify";


const Product = (props) => {

  // add to wish list 
  const addToWishList = (id) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user !== undefined && user !== null && user !== "")  {
      const data = {
        productTitle : props?.item?.name,
        image : props?.item?.photo[0],
        rating : props?.item?.rating,
        price : props?.item?.oldPrice,
        productId : id,
        userId : user?.userId,
      }
  
      createWishListData(`/`, data).then((res) => {
  
        if (res.status === true) {
          // Product Wishlist added successfully
          createToast("Product Added Wish List", "success");
          return;
  
        } else if (res.status === false) {
          // Product already in the cart or some other issue
          return createToast("Product Already Wish List Added");
        } else {
          // Handle unexpected statuses
          return createToast("An unexpected error occurred", "error");
        }
      }).catch((error) => {
        // Handle any network or other errors
        console.error("Error adding product to cart:", error);
        createToast("Product Already Wish Listed", );
        return;
      });

    }else{
      createToast("Please Login Your Account");
    }

  }

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
                    <li 
                       className="list-inline-item second-wish"
                        onClick={() => addToWishList(props?.item?._id)}
                        >
                      <a href="#" > <CiHeart /> </a>
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






