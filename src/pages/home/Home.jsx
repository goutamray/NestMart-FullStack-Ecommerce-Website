import HomeSlider from "../../components/Slider/HomeSlider"
import CategorySlider from "../../components/catSlider/CategorySlider"

import { FaArrowRight } from "react-icons/fa";


import banner1 from "../../assets/img/banner/banner-1.png"
import banner2 from "../../assets/img/banner/banner-2.png"
import banner3 from "../../assets/img/banner/banner-3.png"
import banner4 from "../../assets/img/banner/banner-4.png"

import Product from "../../components/product/Product";
import ProductBest from "../../components/productBest/ProductBest";
import TopProduct from "../../components/TopProducts/TopProduct";

import Slider from "react-slick"; 

import { TabContext } from '@mui/lab';
import { Tab, Tabs } from '@mui/material';

import "./Home.css"
import { useEffect, useState } from "react";
import axios from "axios";
import { fetchDataFromApi, fetchProductFromApi } from "../../utils/api";

const Home = () => {
  const [productData, setProductData] = useState([]); 
  const [categoryAllData, setCategoryAllData] = useState([]); 

    // filter 
    const [selectedCategory, setSelectedCategory] = useState('');
    const [products, setProducts] = useState([]);

    var settings = {
      dots: false,
      infinite: true,
      speed: 3000,
      slidesToShow: 4,
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
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        }
      ]
    };

    // get all product & category 
    useEffect(() => {
      fetchProductFromApi("/").then((res) => {
         setProductData(res?.productList);
      }); 

      fetchDataFromApi("/").then((res) => {
         setCategoryAllData(res?.categoryList); 
       }); 
    }, []); 
 

  useEffect(() => {
    if (categoryAllData?.length > 0) {
       const firstCategoryId = categoryAllData[0]._id;
       setSelectedCategory(firstCategoryId);
       fetchProducts(firstCategoryId);
    }
 }, [categoryAllData]);

 // fetch category product 
 const fetchProducts = async (category) => {
    try {
       const response = await axios.get(`http://localhost:5050/api/v1/product?category=${category}`);
       setProducts(response.data.productList);
    } catch (error) {
       console.error('Error fetching products:', error);
    }
 };

 // handle category change 
 const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
    fetchProducts(newValue);

 };

 
 useEffect(() => {
   window.scrollTo(0, 0); 
 }, []); 

  return (
    <> 
         <HomeSlider /> 
         <CategorySlider /> 


      {/* Banner section  */}
      <div className="banner-section my-3">
        <div className="container-fluid">
          <div className="row">

            <div className="col-sm-4 banner-part">
              <div className="banner-img">
                <img src={banner1} alt="" />
                <div className="banner-text">
                  <h4 className="banner-title">  Everyday Fresh & Clean with Our Products</h4>
                  <a href="#" className="button-shop"> Shop Now <FaArrowRight /></a>
                </div>
              </div>
            </div>

            <div className="col-sm-4 banner-part">
              <div className="banner-img">
                <img src={banner2} alt="" />
                <div className="banner-text">
                  <h4 className="banner-title">  Make your Breakfast Healthy and Easy </h4>
                  <a href="#" className="button-shop"> Shop Now <FaArrowRight /></a>
                </div>
              </div>
            </div>

            <div className="col-sm-4 banner-part">
              <div className="banner-img">
                <img src={banner3} alt="" />
                <div className="banner-text">
                  <h4 className="banner-title">  The best Organic  Products Online </h4>
                  <a href="#" className="button-shop"> Shop Now <FaArrowRight /></a>
                </div>
              </div>
            </div>
        
          </div>
        </div>
      </div>

      {/* Popular Products */}
      <div className="popular-products my-5">
        <div className="container-fluid">
          <div className="tab-header d-flex align-items-center justify-content-between">
            <h3> Popular Products </h3>
            <ul className="list list-inline custom-ul"> 
              <TabContext >
                <Tabs  
                value={selectedCategory}
                onChange={handleCategoryChange}

                >
                  {
                      categoryAllData?.length !== 0 &&
                      categoryAllData.map((item) => (
                          <Tab key={item?._id} value={item?._id} label={item?.name} className="dynamic-cat-data" />
                      ))
                      }
              
                </Tabs>
              </TabContext>
            </ul>
          </div>

          <div className="row product-row my-4">
                   {
                        products?.length >  0 ?  
                        products?.map((product, index) => {
                          return   <div className="item" key={index}>
                          <Product tag="new" item={product}/> 
                      </div>
                        }) : <p> No Products Found</p>
                     } 
           
            
          </div>

        </div>
      </div>

      {/* Daily Best Products */}
      <div className="popular-products my-5">
        <div className="container-fluid">
          <div className="tab-header d-flex align-items-center justify-content-between">
            <h3> Daily Best Sells </h3>
          </div>
          
          <div className="row my-4">
            <div className="col-md-3">
               <div className="banner-image">
                   <img src={banner4} alt="" className="w-100" style={{borderRadius: "20px"}}/>
                   <h2> Bring nature into your home </h2>   
                   <a href="#" className="button-shop-primary"> Shop Now <FaArrowRight /></a>    
               </div>
            </div>
            <div className="col-md-9">
            <Slider {...settings} className="product-slider-main">

              {
                productData.length !== 0 && 
                productData.map((product, index) => {
                  return  <div className="item" key={index}>
                  <ProductBest item={product}/>  
               </div>
                })
              }
        
                         
             </Slider>
            </div>
          </div>
        </div>
      </div>

           {/* top products */}
           <div className="topProducts my-3">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-3">
                    <TopProduct title="Top Selling" />
                </div>
                <div className="col-md-3">
                    <TopProduct title="Trending Products"  />
                </div>
                <div className="col-md-3">
                    <TopProduct title="Recently added" />
                </div>
                <div className="col-md-3">
                    <TopProduct title="Top Rated" />
                </div>
              </div>
            </div>
      </div>

    </>

  )
}

export default Home












