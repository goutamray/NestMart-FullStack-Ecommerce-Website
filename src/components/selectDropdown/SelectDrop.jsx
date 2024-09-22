
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom"
import { useState } from "react";
import ClickAwayListener from 'react-click-away-listener'; 


import "./SelectDrop.css"

const SelectDrop = ({ data }) => {
  
  const [isOpenDrop, setIsOpenDrop ] = useState(false); 
  const [selectIndex, setSelectIndex ] = useState(null); 
  const [selectItem, setSelectItem ] = useState("All Categories"); 

 // handleClickOpen
 const handleClickOpen =() => {
    setIsOpenDrop(() => !isOpenDrop); 
 }

  return (
    <>
       <ClickAwayListener onClickAway={() => setIsOpenDrop(false) }>
          <div className="select-drop ">
              <p className="select-drop-category" onClick={handleClickOpen}>
                 { selectItem.length > 14 ? selectItem.substring(0, 12)+ "...." :  selectItem }   <FaAngleDown />
              </p> 
                
              {
              isOpenDrop &&   <div className="select-dropdown">       
              <ul className="search-result ">
                {
                  data?.map((item, index) => {
                    return  <li key={index} >
                    <Link 
                      to="" 
                      className={`${selectIndex === index ? "active" : ""}`} > 
                      {item?.name} 
                    </Link>
                  </li>
                  })
                }     

              </ul>
           </div>
            }

          </div>

        </ClickAwayListener>
       
    </>
  )
}

export default SelectDrop














