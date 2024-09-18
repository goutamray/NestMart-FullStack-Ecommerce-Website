
// react icons
import { RiDeleteBin6Fill } from "react-icons/ri"

import { Link } from "react-router-dom"
import Rating from '@mui/material/Rating';

import { useEffect } from "react";


import "./Wishlist.css"
const WishList = () => {


 useEffect(() => {
  window.scrollTo(0, 0);
 }, []);

  return (
    <>
    
      <div className="section wishlist-section">
        <div className="container">
          <div className="row">
            <div className="col">
               <div className="top-part-cart">
                    <h1 className="head-cart"> Your WishList </h1>
                    <p> There are 
                      <span> (5)  </span>
                       products in your wishList 
                    </p>                    
              </div>
            </div>
          </div>



   
          <div className="row my-cart-row">
            <div className="col-md-12">
                    {/* cart body start  */}
                    <div className="cart-body">
                      <div className="table-responsive cart-product">
                      <table className="table">
                            <thead>
                                <tr> 
                                    <th> Product </th>
                                    <th> Unit Price </th>
                                    <th> Remove </th>
                                </tr>           
                            </thead>
                            <tbody>   
                             <tr>
                                  <td> 
                                    <div className="table-box d-flex align-items-center">
                                        <div className="image">
                                            <Link to=""> 
                                                <img src="" alt="" />
                                            </Link>  
                                        </div>
                                        <div className="product-content">
                                        <Link to="">
                                             <h5> this is title  </h5> 
                                          </Link>  
                                          <Rating name="half-rating" value={5}  readOnly  size="small" />               
                                        </div>
                                    </div>
                                  </td>
                                  <td className="product-price"> Tk 5 </td>
                                  <td className="delete-product"> 
                                      <span >  <RiDeleteBin6Fill  /> 
                                      </span>
                                  </td>
                                </tr> 
                                     
                            </tbody>
                        </table>
                      </div>
                    </div>
                 </div>
          </div> 
          
          {/* <div className="empty-cart">
             <img src={emptyCart} alt="emptyCart" />
            <h2> Your Cart is currently empty </h2>
          
  
               <Link to="/">  <span> <FaHome /> </span>  Continue Shipping  </Link> 
        
        </div> */}
     

        </div>
      </div>

     
    </>
  )
}

export default WishList





