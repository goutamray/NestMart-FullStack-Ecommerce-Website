
import Slider from "react-slick"; 
import { IoIosSend } from "react-icons/io";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slider1 from "../../../src/assets/img/slider/slider-1.png"
import slider2 from "../../../src/assets/img/slider/slider-2.png"


import "./Slider.css" 
import { fetchSliderFromApi } from "../../utils/api";
import { useEffect, useState } from "react";


const HomeSlider = () => {

  const [sliderData , setSliderData] = useState([])

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade : true,
    arrows : true, 
    autoplay: true,
    autoplaySpeed: 5000,
  }

 useEffect(() => {
    fetchSliderFromApi("/").then((res) => {
      setSliderData(res.sliderList); 
  });
 }, [])


  return (
    <>
    <section className="home-slider">
       <div className="container-fluid">
            <Slider {...settings} className="home-slider-main">
              {
                sliderData.length !== 0 && sliderData.map((item, index) => {
                  return <div className="item" key={index}>
                  <img src={item?.photo} alt="" />
                  <div className="info-data">
                       <h2> {item?.title} </h2>
                       <p> {item?.subTitle} </p>
                       <form action="#" className="subscribe-form">
                         <IoIosSend className="send" />
                         <input type="email" placeholder="Your emaill address" />
                         <button type="submit"> Subscribe </button>
                       </form>
                  </div>

              </div>
                })
              }

            </Slider>
       </div>
    </section>
       
    </>
  )
}

export default HomeSlider; 











