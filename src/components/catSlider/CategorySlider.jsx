
import Slider from "react-slick"; 


// slider css  import 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./CategorySlider.css";
import { useState } from "react";

const CategorySlider = () => {
   
  const [itemBg, setItemBg ] = useState([
    "#f2fce4",
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",

  ])

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
                 itemBg.length > 0 && itemBg.map((item, index) => {
                  return <div className="category-item" key={index} >
                  <div className="info" style={{backgroundColor : item }}> 
                   <img src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-13.png" alt="" />  
                   <h6> <a href="#"> Cake & Milk </a>  </h6> 
                   <span> 26 items </span>
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













