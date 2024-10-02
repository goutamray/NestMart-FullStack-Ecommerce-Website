
import Navbar from "../Header/navbar/Navbar"

import {  useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// react icons 
import { FiUser } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { LuLogOut } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";

// images 
import logo from "../../assets/img/logo.svg"
import heart  from "../../assets/img/icons/heart.svg"
import cart  from "../../assets/img/icons/cart.svg"
import userPhoto  from "../../assets/img/icons/user.svg"

import ClickAwayListener from 'react-click-away-listener';  


import "./Header.css";  
import { MyContext } from "../../App";
import { MdOutlineSecurity } from "react-icons/md";
import createToast from "../../utils/toastify";
import { fetchWishlistDataFromApi } from "../../utils/api";
import SearchBox from "../searchBox/SearchBox";

const Header = () => {
   const [dropDownOpen, setDropDownOpen ] = useState(false); 
   const [myListData, setMyListData] = useState([]); 
   const [openSearch, setOpenSearch] = useState(false); 


   const navigate = useNavigate();
     
   // handle close
   const handleCloseDrop = () => {
    setDropDownOpen(() => !dropDownOpen)

   }

   const hanleOpenSearch = () => {
    setOpenSearch(() => !openSearch)
   }
 

   const context = useContext(MyContext); 

  //user logout 
  const handleLogout = () => {
      localStorage.clear();
  
      setTimeout(() => {
          navigate("/login");
          createToast("User Logout Successful", "success");
      }, 2000);
  };  

  // Check login status on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
     
      if (token) {
          context?.setIsLogin(true); 
          const userData = JSON.parse(localStorage.getItem("user"));
          context.setUser(userData); 
      } else {
          context?.setIsLogin(false); 
          context.setUser({
            name: "",
            email: "",
            userId: ""
          });
      }
  }, [context]);
  


  // wishlist count 
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

      fetchWishlistDataFromApi(`?userId=${user?.userId}`).then((res) => {
        setMyListData(res.wishlist); 
      });

    // real time data update 
    context.getCartData(); 

  }, [context]); 



  return (
    <>
     {/* top part  */}
    
       <div className="second-bar">
        <div className="container-fluid">
            <div className="row align-items-center header-text-bar">
               <div className="col-sm-4 header-custom-col">
                 <div className="menu-top">
                   <ul>
                    <li> 
                      <Link to="/about"> About Us </Link>
                    </li>
                    <li> 
                      <Link to="/my-account"> My account </Link>
                    </li>
                    <li> 
                      <Link to="/wishlist"> Wishlist </Link>
                    </li>
                    <li> 
                      <Link to="/order-truck"> Order Tracking </Link>
                    </li>
                    <li> 
                      <Link to="/contact"> Contact </Link>
                    </li>
                   </ul>
                 </div>
               </div>
               <div className="col-sm-4 hide-offer-text">
                 <div className="offer-text">
                    <span> <MdOutlineSecurity /> </span>
                    <p> 100% Secure delivery without contacting the courier
                    </p>
                 </div>
               </div>
               <div className="col-sm-4">
                  <div className="info">
                      <p> Need help? Call Us </p>
                      <a href="#"> + 0020 500 </a>
                      <div className="right-select-part">
                         <div className="language">
                            <select name="" >
                               <option value="english"> English </option>
                               <option value="spanish"> Spanish </option>
                               <option value="german"> German </option>
                               <option value="dutch"> Dutch </option>
                            </select>
                         </div>
                         <div className="currency">
                            <select name="" >
                               <option value="USD"> USD </option>
                               <option value="INR"> INR </option>
                               <option value="BDT"> BDT </option>
                               <option value="GBP"> GBP </option>
                            </select>
                         </div>
                      </div>
                  </div>
               </div>
            </div>
        </div>
      </div>


        <header className="header-middle">
          <div className="container-fluid">
            <div className="row header-custom-data">

             <div className="phone-menu">
                    <IoMenu onClick={context?.handleMobileMenu}/>  
              </div>

              <div className="col-sm-2 main-logo-part">
                 <div className="logo">
                   <Link to="/"> 
                      <img src={logo} alt="" /> 
                    </Link>
                 </div>
              </div>

            {/* header search start  */}
              <div className="col-sm-6 middle-bar part2">
                 <SearchBox hanleOpenSearch={hanleOpenSearch}  />
              </div>

          
             <div className="col-sm-4 cart-wish-account">
                <div className="header-cart-wishlist compare-part"> 
        
                 </div>

                <div className="header-cart-wishlist "> 
                   <div className="header-action-icon-2">
                       <Link to='/wishlist' className="compare-box">
                           <img src={heart} />
                           <span className="pro-count blue">
                               {myListData?.length}
                            </span>
                        </Link>
                      <Link to='/wishlist' className="compare-text hide-phone">
                          <span className="lable ml-0"> Wishlist </span>
                      </Link>
                   </div>        
                 </div>

                <div className="header-cart-wishlist "> 
                   <div className="header-action-icon-2">
                       <Link to='/cart' className="compare-box">
                           <img src={cart} />
                           <span className="pro-count blue">
                               { context?.cartData?.length }
                            </span>
                        </Link>
                      <Link to='/cart' className="compare-text hide-phone">
                          <span className="lable ml-0">Cart</span>
                      </Link>
                   </div>        
                 </div>

           <ClickAwayListener onClickAway={() => setDropDownOpen(false) }>
                <div className="header-cart-wishlist ">   
                  {
                     context?.isLogin !== true  ?    <button className="my-login-btn"> 
                     <Link to="/login"> Login </Link>
                  </button>
                     
                  : 
                  <div className="header-action-icon-2" onClick={handleCloseDrop}>
                      <a href='#' className="compare-box">
                          <img src={userPhoto} />
                          <span ></span>
                      </a>   
                      <Link 
                        to='#' 
                        className="compare-text hide-phone" 
                        onClick={handleCloseDrop} >
                        <span 
                            className="lable ml-0" 
                          > Account 
                        </span>
                      </Link>    
                  </div> 
              
                  }                   
                 
                   {
                    
                    dropDownOpen && <ul className="dropdown-menu-abc shadow">
                      <li className="drop-down-hover" onClick={handleCloseDrop}> 
                          <FiUser /> 
                          <Link to="/my-account" > My Account </Link>
                      </li>
                      <li className="drop-down-hover" onClick={handleCloseDrop} > 
                         <CiLocationOn /> 
                         <Link to="/order-truck"> Order Tracking </Link>
                      </li>
                      <li className="drop-down-hover" onClick={handleCloseDrop} > 
                         <CiHeart /> 
                         <Link to="/wishlist"> My Wishlist </Link>
                      </li>
                      <li className="drop-down-hover" onClick={handleCloseDrop} >
                         <LuLogOut /> 
                        <Link to="" onClick={handleLogout}> Sign out </Link>
                      </li>
                  </ul>
                   }
                 </div>
            </ ClickAwayListener > 
             </div>

            </div>
          </div>
        </header>

      <Navbar />
        
            
    </>      
  )
}

export default Header; 



























