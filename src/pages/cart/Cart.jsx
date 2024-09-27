
import QuantityBox from "../../components/counter/quantityBox";

import { FaLongArrowAltLeft } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

import { useContext, useEffect, useState } from "react";

import "./Cart.css"; 
import { fetchCartDataFromApi } from "../../utils/api";
import { MyContext } from "../../App";

const Cart = () => {
  const [productQuantity, setProductQuantity] = useState(); 
  const [changeQuantity, setChangeQuantity] = useState(0); 
  const [cartData, setCartData] = useState([]); 

  const context = useContext(MyContext)

  useEffect(() => {
    fetchCartDataFromApi("/").then((res) => {
      setCartData(res.cartList); 
    });

    // real time data update 
    context.getCartData(); 

   }, [context]); 

  // quantity 
   const quantity = (val) => {
    setProductQuantity(val); 
    setChangeQuantity(val); 
  }

  // select item data 
  // const selectedItem = (item, quantityVal) => {

  //   if (changeQuantity !== 0) {
  //     setIsLoading(true);

  //     const user = JSON.parse(localStorage.getItem("user"));
      
  //     cartFields.productTitle = item?.productTitle
  //     cartFields.image = item?.image
  //     cartFields.rating = item?.rating
  //     cartFields.price = item?.price
  //     cartFields.quantity = quantityVal
  //     cartFields.subTotal = parseInt(item?.price * quantityVal) 
  //     cartFields.productId = item?.productId
  //     cartFields.userId = user?.userId
  
  //     // update cart data
  //     editcartData(`/${item?._id}`, cartFields).then(() => {
      
  //         setTimeout(() => {
  //           setIsLoading(false); 
  //         }, 1000);
  
  //         // refresh databse 
  //         fetchCartDataFromApi("/").then((res) => {
  //           setCartData(res.cartList); 
  //         });
  
  //     });

  //   }
  // }


  return (
    <>
 
    {/* Cart section  */}
    <div className="cart-section py-2">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 cart-part-left ">
            <div className="cart-header py-4">
                <div className="cart-left">
                  <h2 className="heading"> Your Cart </h2>
                  <div className="cart-clear">
                    <div className="left">
                      <p> There are <span> 1 </span> products in your cart </p>
                    </div>
                    <div className="right">
                      <p  > <span > <RiDeleteBin6Fill /> </span> Clear Cart  </p>
                    </div>                              
                  </div>
                </div>   
            </div>


            {/* cart body start  */}
              <div className="cart-body">
                <div className="table-responsive">
                <table className="table table-bordered ">
                      <thead>
                            <tr > 
                              <th> Product </th>
                              <th> Unit Price </th>
                              <th className="mobile-hide"> Quantity </th>
                              <th> Subtotal </th>
                              <th> Remove </th>
                            </tr>           
                      </thead>
                      <tbody>   
                          <tr >
                            <td> 
                              <div className="table-box d-flex align-items-center">
                                  <div className="image">
                                      <Link to={`/`}> 
                                          <img src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png" alt="cart-photo" />
                                      </Link>  
                                  </div>
                                  <div className="product-content">
                                    <Link to={``}> <h5> This is product name </h5> </Link>
                                    <p>  </p>
                                  </div>
                              </div>
                            </td>
                            <td className="product-price"> $ 20  </td>
                            <td className="mobile-hide"> 
                              <div className="cart-counter">
                                    <QuantityBox 
                                        //  value = {item?.quantity}
                                         quantity = {quantity} 
                                        //  item = {item} 
                                        //  selectedItem = {selectedItem}
                                         
                                       />
                              </div>
                            </td>
                            <td className="subTotal"> $120 </td>
                            <td className="delete-product"> 
                                <span >  <RiDeleteBin6Fill  /> 
                                </span>
                            </td>
                          </tr>
                    
                      </tbody>
                  </table>
                </div>
              </div>

              <div className="continue-btn mb-3">
                <Link to="/"> <span> <FaLongArrowAltLeft /></span> Continue Shopping </Link>
              </div>
          </div>

          <div className="col-md-4 cart-part-right">
              <div className="total-box">
                <div className="card p-2">
                  <div className="card-body">
                    <div className="sub-total d-flex align-items-center justify-content-between">
                        <p className="top-total"> Subtotal </p>
                        <h4 className="sub-price">  $120.00 </h4>
                    </div>
                    <div className='border-info d-flex align-items-center justify-content-between mb-4'>
                        <h5 className='mb-0 same-text'>Shipping</h5>
                        <h3 className='right-text ml-auto mb-0 font-weight-bold'><span >Free</span></h3>
                      </div>


                    <div className='d-flex align-items-center justify-content-between mb-4'>
                        <h5 className='mb-0 same-text'>Estimate for</h5>
                        <h3 className='right-text ml-auto mb-0 font-weight-bold'>United Kingdom</h3>
                    </div>

                    <div className='d-flex align-items-center justify-content-between  mb-4'>
                      <h5 className='mb-0 same-text'>Total</h5>
                      <h3 className='right-text ml-auto mb-0 font-weight-bold'> $120.00 <span className='text-g'>                
                        </span></h3>
                    </div>
                    <div className="process-btn ">
                            <Link to=""> Proceed To Checkout <PiSignOutBold className='cart-icon'/> </Link>
                    </div>

                  </div>
                </div>
              </div>
          </div> 
        </div>
      </div>
    </div>

    </>
  )
}

export default Cart











