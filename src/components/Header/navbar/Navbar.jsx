

import { IoGrid } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa"; 
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
import "./Navbar.css"
import { useContext, useState } from "react";
import { MyContext } from "../../../App";


const Navbar = () => {
  const [nestOpen, setNestOpen] = useState(false); 

  const context = useContext(MyContext); 

  // handle click 
  const handleClickOpen = () => {
    setNestOpen(() => !nestOpen)
  }





  return (
    <>
      <div className="nav navbar-header my-custom-header shadow">
        <div className="container-fluid">
          <div className="row my-custom-navbar my-3">
            <div className="col-sm-3 part1">
               <div className="browse-button ">
                <button onClick={handleClickOpen}> 
                  <IoGrid className="grid-box" />  
                    Browse All Categories <FaChevronDown className="down-arrow-btn"/>
                </button>
                {
                  nestOpen === true && <div className="getAllCategories">
                  <ul>
             
                  {
                    context.categoryData?.length !== 0 && 
                    context.categoryData?.map((item, index) => {
                      return <li className="list-inline-item list-item-single" key={index}>
                      <Link 
                        to={`/category/${item?._id}`}
                        onClick={handleClickOpen}
                       > 
                         {item?.name} 
                      </Link>
                   </li>
                    })
                  }
                  </ul>
                </div>

                }
                
               </div>
            </div>
            <div className="col-sm-7 part2">
              <div className="navbar-menu">
                 <ul className="list list-inline menu-item">

                  {
                    context.categoryData?.length !== 0 && 
                    context.categoryData?.map((item, index) => {
                      return <li className="list-inline-item list-item-single" key={index}>
                      <Link to={`/category/${item?._id}`}> {item?.name} </Link>
                   </li>
                    })
                  }

                
                 </ul>
              </div>

            </div>
            <div className="col-sm-2 part3">
                <div className="contact-section">
                   <span className="headphone"> <TfiHeadphoneAlt /> </span>
                   <div className="support">
                        <p> 1900 - 888 </p>
                        <span className="center"> 24/7 Support Center </span>
                   </div>
                 
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar; 


























