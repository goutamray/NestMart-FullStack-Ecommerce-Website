
import SelectDrop from "../selectDropdown/SelectDrop";
import Navbar from "../Header/navbar/Navbar"

import {  useState } from "react";
import { Link } from "react-router-dom";

// react icons 
import { IoIosSearch } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { LuLogOut } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";

// images 
import logo from "../../assets/img/logo.svg"
import compare from "../../assets/img/icons/compare.svg"
import heart  from "../../assets/img/icons/heart.svg"
import cart  from "../../assets/img/icons/cart.svg"
import user  from "../../assets/img/icons/user.svg"

import ClickAwayListener from 'react-click-away-listener';  


import "./Header.css";  

const Header = () => {
   const [dropDownOpen, setDropDownOpen ] = useState(false); 
     
   // handle close
   const handleCloseDrop = () => {
    setDropDownOpen(() => !dropDownOpen)
   }

   const [categories, setCategories ] = useState([ 
          "All Categories",
          "Milks and Ice cream",
          "Noodles & Rice",
          "Fresh Seafood",
          "Vegetables",
          "Baking material",
          "Fast food",
          "Pet Foods & Toy",
          "Clothing & Beauty",
          "Wines & Alcohol",
          "Milks and Dairies",
        
   ]); 

  

  return (
    <>
        <header className="header-middle">
          <div className="container-fluid">
            <div className="row header-custom-data">

             <div className="phone-menu">
                    <IoMenu />  
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
                 <div className="header-search d-flex align-items-center"> 
                      <SelectDrop data ={categories}/>
                     <div className="search">
                       <input 
                          type="text" 
                          placeholder="Search for items..."
                         /> 
                         <IoIosSearch className="search-icon"/>
                     </div>
                 </div>
              </div>

          
             <div className="col-sm-4 cart-wish-account">
                <div className="header-cart-wishlist compare-part"> 
                   <div className="header-action-icon-2">
                       <Link to='#' className="compare-box">
                           <img src={compare} />
                           <span className="pro-count blue">3</span>
                        </Link>
                      <Link to='#' className="compare-text hide-phone">
                         <span className="lable ml-0">Compare</span>
                      </Link>
                   </div>        
                 </div>

                <div className="header-cart-wishlist "> 
                   <div className="header-action-icon-2">
                       <Link to='/wishlist' className="compare-box">
                           <img src={heart} />
                           <span className="pro-count blue">6 </span>
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
                           <span className="pro-count blue">2 </span>
                        </Link>
                      <Link to='/cart' className="compare-text hide-phone">
                        <span className="lable ml-0">Cart</span>
                      </Link>
                   </div>        
                 </div>

           <ClickAwayListener onClickAway={() => setDropDownOpen(false) }>
                <div className="header-cart-wishlist ">                      
                  <div className="header-action-icon-2">
                       <a href='#' className="compare-box">
                           <img src={user} />
                           <span ></span>
                        </a>   
                  
               
                      <a href='#' className="compare-text hide-phone">
                        <span 
                           className="lable ml-0" 
                           onClick={handleCloseDrop}
                          > Account 
                        </span>
                      </a>    
                      
                   </div>
                   {
                    
                    dropDownOpen && <ul className="dropdown-menu-abc shadow">
                      <li className="drop-down-hover"> <FiUser /> 
                          <Link to="/my-account" > My Account </Link>
                      </li>
                      <li className="drop-down-hover"> <CiLocationOn /> 
                        <Link to="/order-truck"> Order Tracking </Link>
                      </li>
                      <li className="drop-down-hover"> <CiHeart /> 
                        <Link to="/wishlist"> My Wishlist </Link>
                      </li>
                      <li className="drop-down-hover"> <LuLogOut /> 
                        <Link to=""> Sign out </Link>
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



























