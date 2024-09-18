
import { useState } from "react";
import { Link } from "react-router-dom";

// components 
import SideBar from "../../components/sideBer/SideBar";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import ProductBest from "../../components/productBest/ProductBest";

// react icons 
import { IoGrid } from "react-icons/io5";
import { FaSortAmountDown } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";


import "./Shop.css";
const Shop = () => {

  const [dropDownOpen, setDropDownOpen ] = useState(false); 
  const [dropDownOpen2, setDropDownOpen2 ] = useState(false); 

  const [isOpenSideBar, setIsOpenSideBar ] = useState(false); 


  // open filter 
  const openSideBarData = () => {
    setIsOpenSideBar(() => !isOpenSideBar)
  }


     // handle close
     const handleCloseDrop = () => {
      setDropDownOpen(() => !dropDownOpen)
     }
  
     // handle close
     const handleCloseDrop2 = () => {
      setDropDownOpen2(() => !dropDownOpen2)
     }
  

  return (
    <>
        <button 
           className="btn btn-primary w-100 filters-btn mb-2 "
           onClick={openSideBarData}> 
           Open Filters 
        </button>

        {
          isOpenSideBar === true &&  <SideBar isOpenSideBar={isOpenSideBar} openSideBarData={openSideBarData}/> 
        }
        
       

    {/* breadcrumb section */}
      <div className="listingProduct my-4">
         <div className="container-fluid">
             <div className="row">
                <div className="breadCrumb text-center">
                   <h2> SHOP </h2>
                   <ul className="list list-inline">
                   <Breadcrumbs aria-label="breadcrumb" className="shop-bread">
                      <Link underline="hover" to="/" className="my-color"  >
                        Home
                      </Link>
                      <Link underline="hover"  to="/" className="my-color">
                        Shop
                      </Link>    
                  </Breadcrumbs>
                   </ul>
                </div>
             </div>
         </div>
      </div>


      {/* listing data  */}
        <div className="productListingData">
          <div className="container-fluid">
            <div className="row">
               <div className="col-lg-3 col-md-3  left-sidebar">
                   <SideBar isOpenSideBar={isOpenSideBar} openSideBarData={openSideBarData}/> 
               </div>

               <div className="col-lg-9 col-md-9 right-sidebar popular-products ">
               <div className="top-strip d-flex align-items-center justify-content-between">
                  <p> We found <span style={{color: "#3BB77E"}}> 29 </span> items for you! </p>
                  <div className="ml-auto  d-flex align-items-center show-count-product ">
                      <div className="tab-item">
                        <button className="show-btn" onClick={handleCloseDrop }> <IoGrid /> show : 50 <FaAngleDown /> </button>
                        {
                          dropDownOpen && <ul className="dropdown-menu-abc shadow ">
                          <li className="drop-down-hover" > <button onClick={() => setDropDownOpen(false)}> 50 </button></li>
                          <li className="drop-down-hover" > <button onClick={() => setDropDownOpen(false)}> 100 </button></li>
                          <li className="drop-down-hover"> <button onClick={() => setDropDownOpen(false)}> 150 </button></li>
                          <li className="drop-down-hover"> <button onClick={() => setDropDownOpen(false)}> 200 </button></li>
                          <li className="drop-down-hover"> <button onClick={() => setDropDownOpen(false)}> All </button></li>
                          </ul>
                        }
                        
                      </div>
                      <div className="tab-item">
                        <button className="show-btn ms-3" onClick={ handleCloseDrop2 }> <FaSortAmountDown />  Sort by: Featured <FaAngleDown /> </button>
                         {
                          dropDownOpen2 && <ul className="dropdown-menu-abc shadow ">
                          <li className="drop-down-hover" onClick={() => setDropDownOpen2(false)}> <button > Featured </button></li>
                          <li className="drop-down-hover" onClick={() => setDropDownOpen2(false)}> <button > Price: Low to High </button></li>
                          <li className="drop-down-hover" onClick={() => setDropDownOpen2(false)}> <button > Price: High to Low </button></li>
                          <li className="drop-down-hover" onClick={() => setDropDownOpen2(false)}> <button > Release Date </button></li>
                          <li className="drop-down-hover" onClick={() => setDropDownOpen2(false)}> <button > Avg. Rating </button></li>
                          </ul>
                         }
                      </div>
                  </div>
               </div>

                   <div className="row product-row ms-3">
                      <div className="item">
                          <ProductBest tag="new"/> 
                      </div>
                      <div className="item">
                          <ProductBest tag="best"/> 
                      </div>
                      <div className="item">
                          <ProductBest tag="sale"/> 
                      </div>
                      <div className="item">
                          <ProductBest tag="hot"/> 
                      </div>
                      <div className="item">
                          <ProductBest tag="new"/> 
                      </div>
                      <div className="item">
                          <ProductBest tag="hot"/> 
                      </div>
                      <div className="item">
                          <ProductBest tag="new"/> 
                      </div>
                      <div className="item">
                          <ProductBest tag="best"/> 
                      </div>
                      <div className="item">
                          <ProductBest tag="sale"/> 
                      </div>
                      <div className="item">
                          <ProductBest tag="new"/> 
                      </div>
                     
                      
                   </div>
               </div>
            </div>
          </div>
        </div>
        
    </>
  )
}

export default Shop
