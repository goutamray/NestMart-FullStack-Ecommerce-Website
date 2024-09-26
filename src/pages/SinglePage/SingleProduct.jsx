
import { CiHeart, CiShuffle } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { Link, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';


import Rating from '@mui/material/Rating';

import Slider from "react-slick";
// slider css  import 
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { CircularProgress } from "@mui/material";

import Product from "../../components/product/Product";
import Counter from "../../components/counter/Counter";
import axios from "axios";

import "./SingleProduct.css";
const SingleProduct = () => {

  const [activeSize, setActiveSize ] = useState(0);

  const [activeTab , setActiveTab ] = useState(0); 
  const [tabError, setTabError] = useState(false);

  const [productData, setProductData] = useState(null); // State to hold product data
  const [loading, setLoading] = useState(false); 
  const [relatedProducts, setRelatedProducts] = useState([]); 

  const [rating, setRating] = useState(0)

  const [input, setInput ] = useState({
      productId : "",
      customerName : "",
      customerId : "",
      customerRating : null,
      review : "",
  })

  
 // handle review change 
 const handleReviewChange = (e) => {
  setInput((prevState) => ({
    ...prevState,
    [e.target.name] : e.target.value
  }))
 }; 
  

  const zoomSliderBig = useRef(); 
  const zoomSlider = useRef(); 

  const { id } = useParams(); 

   // get single product data & related products 
   const fetchSingleProduct = async (id) => {
    try {
      setLoading(true); // Start loading
      setActiveSize(null); 

      // Fetch the single product
      const productRes = await axios.get(`http://localhost:5050/api/v1/product/${id}`);
      const fetchedProduct = productRes.data.product;
      setProductData(fetchedProduct); // Set the fetched product data to state

      // Fetch related products within the same category, excluding the current product
      if (fetchedProduct && fetchedProduct.category) {
        const category = fetchedProduct.category;
        try {
          const relatedRes = await axios.get(`http://localhost:5050/api/v1/product/related-product`, {
            params: {
              category,
              excludeProductId: id // Exclude the current product from the related products
            }
          });
          setRelatedProducts(relatedRes.data.relatedProducts); // Set related products to state
        } catch (error) {
          console.error('Error fetching related products:', error);
          setRelatedProducts([]); // Clear related products on error
        }
      }
    } catch (error) {
      console.error('Error fetching product:', error);
      setProductData(null); // Set to null on error
    } finally {
      setLoading(false); // End loading
    }
  };

  // Fetch product when the component mounts or the 'id' parameter changes
  useEffect(() => {
    if (id) {
      fetchSingleProduct(id);
    }
  }, [id]);
  

  let settings2 = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade : false,
    arrows : false, 
   
  }

  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade : false,
    arrows : true, 
  }

  let related = {
    dots: false,
    infinite: relatedProducts?.length > 5, // Only enable infinite scrolling if more than 5 products
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    fade: false,
    autoplay: relatedProducts?.length > 1, // Disable autoplay if there's only 1 product
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: relatedProducts?.length > 4,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: relatedProducts?.length > 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: relatedProducts?.length > 1,
        },
      },
    ],
  };
  
  const goto = ( index) => {
    zoomSlider.current.slickGoTo(index);
    zoomSliderBig.current.slickGoTo(index);

  };

  const isActive = (index) => {
    setActiveSize(index)
    setTabError(false); 
  }; 

 const handleReviewSubmit = (e) => {
     e.preventDefault();
    //  setLoading(true); 


     console.log(input);
     
 }





  useEffect(() => {
     window.scrollTo(0, 0)
  }, []); 


  

  return (
    <>   
      <div className="single-product">

        <div className="container mb-5">
           <div className="row">

             <div className="col-md-12 singlePart-1 ">
                 <div className="row">
                  {/* product zoom code start */}
                   <div className="col-md-4 ">
                   <Slider {...settings2} className="product-galary-slider-big" ref={zoomSliderBig}>
                    {
                      productData?.photo?.map((product, index) => {
                        return   <div className="item" key={index}>
                        <div className="product-zoom">
                           <InnerImageZoom zoomType="hover" zoomScale="1"  src={product}  /> 
                        </div>
                     </div>
                      })
                    }
                    
                    </Slider>

                     {/*galary   */}
                      <div className="zoom-galary">
                    <Slider {...settings} className="product-galary-slider" ref={zoomSlider}>
                      {
                          productData?.photo?.map((product, index) => {
                            return   <div className="item" key={index}>
                            <img src={product} alt="zoom-photo" onClick={() => goto(index)}/>
                        </div>
                          })
                      }
                        
                     </Slider>
                      </div>    
                   </div>
         


                  {/* product info code start */}
                   <div className="col-md-8 product-info">
                       <div className="all-single-info">
                           <h2> {productData?.name} </h2>
                           <div className="review">
                              <span>  
                                <Rating name="read-only" value={parseInt(productData?.rating)}  readOnly size="small"/>
                              </span> (32 reviews)
                            </div>
                            <div className="price-sec">
                              <span className="sale-price"> ${productData?.oldPrice} </span>
                              <div className="reg-price">
                                 <span className="offer"> {productData?.discount} % Off </span>
                                 <span className="regular"> ${productData?.price} </span>
                              </div>
                            </div>
                            <div className="short-desc">
                              <p> {productData?.description } </p>
                            </div>
                        {/* product Rams  */}
                            {
                               productData?.productRams?.length !== 0 &&      <div className="productSize d-flex align-items-center mt-3">
                               <span> Rams :  </span>
                               <ul className='list list-inline'>
                                {
                                  productData?.productRams?.map((item, index) => {
                                    return  <li className='list-inline-item' key={index}> 
                                    <a href="#" className={`tag ${activeSize === index ? "active" : ""}`} onClick={() => isActive(index)}> {item} </a>
                                  </li>
                                  })
                                }
                               </ul>
                             </div>
                            }
                       
                       {/* product Size  */}
                            {
                               productData?.productSize?.length !== 0 &&      <div className="productSize d-flex align-items-center mt-3">
                               <span> Size :  </span>
                               <ul className='list list-inline'>
                                {
                                  productData?.productSize?.map((item, index) => {
                                    return  <li className='list-inline-item' key={index}> 
                                    <a href="#" className={`tag ${activeSize === index ? "active" : ""}`} onClick={() => isActive(index)}> {item} </a>
                                  </li>
                                  })
                                }
                               </ul>
                             </div>
                            }


                       {/* product Weight  */}
                            {
                               productData?.productWeight?.length !== 0 &&      <div className="productSize d-flex align-items-center mt-3">
                               <span> Weight :  </span>
                               <ul className='list list-inline'>
                                {
                                  productData?.productWeight?.map((item, index) => {
                                    return  <li className='list-inline-item' key={index}> 
                                    <a href="#" className={`tag ${activeSize === index ? "active" : ""}`} onClick={() => isActive(index)}> {item} </a>
                                  </li>
                                  })
                                }
                               </ul>
                             </div>
                            }
                       

                            <div className="product-counter ">
                               <div className="counter-box d-flex align-items-center">
                                    <Counter />
                               </div>
                               <div className="add-to-cart-btn">
                                   <Link to=""> <FaCartPlus className='cart-icon'/> Add to cart </Link>
                               </div>
                               <div className="wishlist same-btn ">
                                  <p> <CiHeart className='heart'/> </p>
                               </div>
                               <div className="compare same-btn ">
                                  <p> <CiShuffle className='heart'/>  </p>
                               </div>
                            </div>

                            <div className="product-all-info">
                              <div className="left-info">
                                  <ul>
                                    <li> Brand : <span> Organic </span></li>
                                    <li> Tags :
                                       <a href="#"> {productData?.tag} </a>
                                     </li>
                                  </ul>
                              </div>
                              <div className="left-info">
                                 <ul>
                                    <li> Stock :  <a href="#"> {productData?.countInStock} Items In Stock</a>  </li>
                                  </ul>
                              </div>
                            </div>
                       </div>
                   </div>
                 </div>

                {/* product tab details  */}
                  <div className="card productDetailsTab p-5">
                     <div className="custom-tabs">
                       <ul className='list list-inline'>
                         <li className='list-inline-item'> <button className={`${activeTab === 0 && "active" }`} onClick={() => setActiveTab(0)}> Description </button> </li>
                         <li className='list-inline-item'> <button className={`${activeTab === 1 && "active" }`} onClick={() => setActiveTab(1)}> Additional info </button> </li>
                         <li className='list-inline-item'> <button className={`${activeTab === 2 && "active" }`} onClick={() => setActiveTab(2)}> Reviews (3) </button> </li>
                       </ul>
                  
                  {
                    activeTab === 0 && <div className="tab-content mt-3">
                    <p className="all-small-font"> {productData?.description} </p> <br/>
               
                  </div>
                  }
                    
                  {
                    activeTab === 1 && <div className="tab-content mt-3">
                    <div className="table-responsive">
                       <table className='table table-bordered'>
                              <tbody>
                                                       <tr className="stand-up">
                                                           <th>Stand Up</th>
                                                           <td>
                                                               <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                                                           </td>
                                                       </tr>
                                                       <tr className="folded-wo-wheels">
                                                           <th>Folded (w/o wheels)</th>
                                                           <td>
                                                               <p>32.5″L x 18.5″W x 16.5″H</p>
                                                           </td>
                                                       </tr>
                                                       <tr className="folded-w-wheels">
                                                           <th>Folded (w/ wheels)</th>
                                                           <td>
                                                               <p>32.5″L x 24″W x 18.5″H</p>
                                                           </td>
                                                       </tr>
                                                       <tr className="door-pass-through">
                                                           <th>Door Pass Through</th>
                                                           <td>
                                                               <p>24</p>
                                                           </td>
                                                       </tr>
                                                       <tr className="frame">
                                                           <th>Frame</th>
                                                           <td>
                                                               <p>Aluminum</p>
                                                           </td>
                                                       </tr>
                                                       <tr className="weight-wo-wheels">
                                                           <th>Weight (w/o wheels)</th>
                                                           <td>
                                                               <p>20 LBS</p>
                                                           </td>
                                                       </tr>
                                                       <tr className="weight-capacity">
                                                           <th>Weight Capacity</th>
                                                           <td>
                                                               <p>60 LBS</p>
                                                           </td>
                                                       </tr>
                                                       <tr className="width">
                                                           <th>Width</th>
                                                           <td>
                                                               <p>24″</p>
                                                           </td>
                                                       </tr>
                                                       <tr className="handle-height-ground-to-handle">
                                                           <th>Handle height (ground to handle)</th>
                                                           <td>
                                                               <p>37-45″</p>
                                                           </td>
                                                       </tr>
                                                       <tr className="wheels">
                                                           <th>Wheels</th>
                                                           <td>
                                                               <p>12″ air / wide track slick tread</p>
                                                           </td>
                                                       </tr>
                                                       <tr className="seat-back-height">
                                                           <th>Seat back height</th>
                                                           <td>
                                                               <p>21.5″</p>
                                                           </td>
                                                       </tr>
                                                       <tr className="head-room-inside-canopy">
                                                           <th>Head room (inside canopy)</th>
                                                           <td>
                                                               <p>25″</p>
                                                           </td>
                                                       </tr>
                                                       <tr className="pa_color">
                                                           <th>Color</th>
                                                           <td>
                                                               <p>Black, Blue, Red, White</p>
                                                           </td>
                                                       </tr>
                                                       <tr className="pa_size">
                                                           <th>Size</th>
                                                           <td>
                                                               <p>M, S</p>
                                                           </td>
                                                       </tr>
                             </tbody>
                       </table>
                    </div>
                  </div>
                  }
                   

                   {
                    activeTab === 2 && <div className="tab-content mt-3">
                         <div className="row">
                          <div className="col-md-8">
                               <div className="review-customer">
                                  <h4> Customer questions & answers  </h4>

                                  <div className="card p-3 review-card mb-4">
                                      <div className="image-item">
                                        <div className="rounded-circle">
                                            <img src="https://nest-frontend-v6.netlify.app/assets/imgs/blog/author-2.png" alt="" />
                                         </div>
                                         <p> Sienna </p>
                                      </div>
                                   <div className="card-info">
                                      <div className="review-date">
                                          <p className="now-date"> December 4, 2024 at 3:12 pm</p>
                                          <p className="review-star"> 
                                           <span> <Rating name="read-only" value={parseInt(productData?.rating)}  readOnly size="small"/>  </span>
                                           </p>
                                       </div>
                                         <p className="message"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt </p>
                                     </div>
                                  </div>

                                  <div className="card p-3 review-card mb-4">
                                      <div className="image-item">
                                        <div className="rounded-circle">
                                            <img src="https://nest-frontend-v6.netlify.app/assets/imgs/blog/author-3.png" alt="" />
                                         </div>
                                         <p> Brenna </p>
                                      </div>
                                   <div className="card-info">
                                      <div className="review-date">
                                          <p className="now-date"> December 4, 2024 at 3:12 pm</p>
                                          <p className="review-star"> 
                                           <span> <Rating name="read-only" value={parseInt(productData?.rating)}  readOnly size="small"/> </span>
                                           </p>
                                       </div>
                                         <p className="message"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt </p>
                                     </div>
                                  </div>

                                  <div className="card p-3 review-card mb-4">
                                      <div className="image-item">
                                        <div className="rounded-circle">
                                            <img src="https://nest-frontend-v6.netlify.app/assets/imgs/blog/author-4.png" alt="" />
                                         </div>
                                         <p> Gemma </p>
                                      </div>
                                   <div className="card-info">
                                      <div className="review-date">
                                          <p className="now-date"> December 4, 2024 at 3:12 pm</p>
                                          <p className="review-star"> 
                                           <span> <Rating name="read-only" value={parseInt(productData?.rating)}  readOnly size="small"/> </span>
                                           </p>
                                       </div>
                                         <p className="message"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt </p>
                                     </div>
                                  </div>


                                  <div className="review-form">
                                     <h3> Add a review </h3>
                                    <form onClick={handleReviewSubmit}>
                                      <div className="form"> 
                                          <div className="form-group my-2">
                                              <textarea 
                                                  name="review" 
                                                  cols="30" 
                                                  rows="5" 
                                                  className="form-control" placeholder="Write Comment"
                                                  value={input.review}
                                                  onChange={handleReviewChange}
                                                  >
                                                  </textarea>
                                          </div>
                                          <div className="row my-3">
                                          <div className="col-md-6">
                                            <div className="form-group custom-review-data">
                                              <p> Add Review </p>
                                              <span className="review-form-data">
                                              <Rating
                                                name="customerRating"
                                                value={input.customerRating}
                                                onChange={(event, newValue) => {
                                                  setRating(newValue);
                                                  setInput((prev) => ({
                                                    ...prev,
                                                    customerRating : newValue
                                                  }))
                                                }}
                                              />
                                                </span>
                                            </div>
                                          
                                            </div>                                   
                                          </div>                                   
                                          <button 
                                              type="submit" 
                                              className="submit-btn"> 
                                                {
                                                  loading === true ?   
                                                  <CircularProgress color="inherit" className="ml-3 loader "/> : 
                                                  "Submit Review"
                                                }
                                         
                                           </button>
                                        </div>
                                    </form>  
                                 </div>                       
                               </div>
                          </div>

                          <div className="col-md-4">
                               <div className="review-details">
                                    <h4> Customer reviews </h4>
                                    <div className="review-count">
                                      <p> <span> <Rating name="read-only" value={parseInt(productData?.rating)}  readOnly size="small"/></span> <span className="total"> 4.8 out of 5 </span> </p>
                                    </div>

                                     <div className="progress-bar-item">
                                      <div className="single-progress">
                                        <span> 5 star </span>
                                         <div className="progress" style={{width: "100%"}}  >
                                           <div className="progress-bar" style={{width: "75%"}}> 75% </div>
                                         </div>                                     
                                      </div>

                                      <div className="single-progress">
                                        <span> 4 star </span>
                                         <div className="progress" style={{width: "100%"}}  >
                                           <div className="progress-bar" style={{width: "25%"}}> 25% </div>
                                         </div>
                                      </div>

                                      <div className="single-progress">
                                        <span> 3 star </span>
                                         <div className="progress" style={{width: "100%"}}  >
                                           <div className="progress-bar" style={{width: "45%"}}> 45% </div>
                                         </div>
                                      </div>

                                      <div className="single-progress">
                                        <span> 2 star </span>
                                         <div className="progress" style={{width: "100%"}}  >
                                           <div className="progress-bar" style={{width: "65%"}}> 65% </div>
                                         </div>
                                      </div>
                                      <div className="single-progress">
                                        <span> 1 star </span>
                                         <div className="progress" style={{width: "100%"}}  >
                                           <div className="progress-bar" style={{width: "75%"}}> 75% </div>
                                         </div>
                                      </div>
                                      <div className="small-last">
                                         <p href="#" className="small-text"> How are ratings calculated? </p>
                                      </div>
                                    </div>
                               </div>
                          </div>
                         </div>
                     </div>
                  }

                     </div>
                  </div>

                  {/* related products */}
                  <div className="related-product">
                    <h5> Related products </h5>
                      <Slider {...related} className="product-slider-main">
                      {
                        relatedProducts?.length > 0 ? (
                          relatedProducts.map((product, index) => (
                            <div className="item" key={product.id || index}>
                              <Product item={product} />
                            </div>
                          ))
                        ) : (
                          <p>No related products available</p>
                        )
                      }

                      
                      </Slider>
                  </div>
             </div>
           </div>
        </div>

      </div>
    </>
  )
}

export default SingleProduct; 











