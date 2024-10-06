
import about1 from "../../assets/banner/about-1.png";
import about2 from "../../assets/banner/about-2.png";
import about3 from "../../assets/banner/about-3.png";
import about4 from "../../assets/banner/about-4.png";



import icon1  from "../../assets/img/icons/icon-1.svg";
import icon2  from "../../assets/img/icons/icon-2.svg";
import icon3  from "../../assets/img/icons/icon-3.svg";
import icon4  from "../../assets/img/icons/icon-4.svg";
import icon5  from "../../assets/img/icons/icon-5.svg";

import "./About.css"; 
const About = () => {
  return (
    <>
      <div className="about-us">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
               <div className="about-photo">
                  <img src={about1} alt="about-photo" />
               </div>
            </div>
            <div className="col-sm-12 col-md-6">
               <div className="about-content">
                 <h2> Welcome to Nest </h2>
                 <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum. </p>
                 <p className="about-bottom"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum. </p>

               </div>
               <div className="about-galary">
                 <div className="about-img-box">
                   <img src={about2} alt="about2"  />
                 </div>
                 <div className="about-img-box">
                   <img src={about3} alt="about3"  />
                 </div>
                 <div className="about-img-box">
                   <img src={about4} alt="about4"  />
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-service">
        <div className="container">
          <div className="row">
            <h2> What We Provide? </h2>
            <div className="about-service-area">
              <div className="service-box shadow">
                  <img src={icon1} alt="icon1" />
                  <h2> Best Prices & Offers </h2>
                  <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form </p>
                  <a href="#"> Read More </a>
              </div>
              <div className="service-box shadow">
                  <img src={icon2} alt="icon2" />
                  <h2> Wide Assortment </h2>
                  <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form </p>
                  <a href="#"> Read More </a>
              </div>
              <div className="service-box shadow">
                  <img src={icon3} alt="icon3" />
                  <h2> Free Delivery </h2>
                  <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form </p>
                  <a href="#"> Read More </a>
              </div>
              <div className="service-box shadow">
                  <img src={icon4} alt="icon4" />
                  <h2> Easy Returns </h2>
                  <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form </p>
                  <a href="#"> Read More </a>
              </div>
              <div className="service-box shadow">
                  <img src={icon5} alt="icon5" />
                  <h2> 100% Satisfaction </h2>
                  <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form </p>
                  <a href="#"> Read More </a>
              </div>
              <div className="service-box shadow">
                  <img src={icon1} alt="icon1" />
                  <h2> Great Daily Deal </h2>
                  <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form </p>
                  <a href="#"> Read More </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About


















