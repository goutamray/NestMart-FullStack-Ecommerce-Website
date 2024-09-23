
import Slider from "react-slick"; 


// slider css  import 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useContext } from "react";
import { MyContext } from "../../App";

import "./CategorySlider.css";
import { Link } from "react-router-dom";

const CategorySlider = () => {
    
  const context = useContext(MyContext); 


  let settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 8,
    slidesToScroll: 1,
    fade : false,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows : true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  }; 

  return (
    <>
      <div className="category-slider">
         <div className="container-fluid">
            <h2 className="heading mb-5"> Featured Categories</h2>
            <Slider {...settings} className="category-slider-main">

                {
                  context?.categoryData?.length !== 0 &&
                  context?.categoryData?.map((item, index) => {
                    return <div className="category-item" key={index} >
                    <div className="info" style={{ backgroundColor : item?.color }}> 
                      <Link to={`/category/${item?._id}`}> 
                        <img src={item?.photo} alt="" />  
                        <h6> 
                            <Link to={`/category/${item?._id}`}>
                              {item?.name} 
                            </Link> 
                        </h6> 
                     </Link>
                     </div>
                  </div>
                  })
                }
                         
            </Slider>
         </div>
      </div>
    </>
  )
}

export default CategorySlider













