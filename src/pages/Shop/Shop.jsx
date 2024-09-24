
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// components 
import SideBar from "../../components/sideBer/SideBar";
import Breadcrumbs from '@mui/material/Breadcrumbs';

import ProductBest from "../../components/productBest/ProductBest";

import axios from "axios";

import "./Shop.css";
const Shop = () => {

  const [isOpenSideBar, setIsOpenSideBar ] = useState(false); 
  const [productData, setProductData] = useState([]); 
  const [loading, setLoading] = useState(true);

  // open filter 
  const openSideBarData = () => {
    setIsOpenSideBar(() => !isOpenSideBar)
  }


  // get params id 
  const { id } = useParams(); 

  // Function to fetch products based on the category ID or fetch all products if no category ID
  const fetchProducts = async (categoryId) => {
    try {
      setLoading(true); // Start loading
      let url = categoryId ? 
        `http://localhost:5050/api/v1/product?category=${categoryId}` : 
        `http://localhost:5050/api/v1/product`;

      const response = await axios.get(url);
      setProductData(response.data.productList || []); // Set the fetched product data to state
    } catch (error) {
      console.error('Error fetching products:', error);
      setProductData([]); // Set to empty array on error
    } finally {
      setLoading(false); // End loading
    }
  };

  // Fetch products when the component mounts or the 'id' parameter changes
  useEffect(() => {
    fetchProducts(id);
  }, [id]);
  
  // filter category by sidebar content 
  const filterData = async (id) => {
    try {
      setLoading(true); // Start loading
      let url = id ? 
        `http://localhost:5050/api/v1/product?category=${id}` : 
        `http://localhost:5050/api/v1/product`;

      const response = await axios.get(url);
      setProductData(response.data.productList || []); // Set the fetched product data to state
    } catch (error) {
      console.error('Error fetching products:', error);
      setProductData([]); // Set to empty array on error
    } finally {
      setLoading(false); // End loading
    }
  };

  // filter by price 
  const filterByPrice = async (price, categoryId) => {
    try {
      console.log('Price range:', price, 'Category:', categoryId); // Add logging here
      setLoading(true);
  
      let url = `http://localhost:5050/api/v1/product?`;

        if (price && price.length === 2) {
          url += `minPrice=${parseFloat(price[0])}&maxPrice=${parseFloat(price[1])}`;
        }

        if (categoryId) {
          url += `${url.includes('?') ? '&' : ''}category=${categoryId}`;
        }
      
      const response = await axios.get(url);
      setProductData(response.data.productList || []);
    } catch (error) {
      console.error('Error fetching products:', error);
      setProductData([]);
    } finally {
      setLoading(false);
    }
  };

  // filter by rating 
  const filterByRating = async (rating, categoryId) => {
    try {
      console.log('Filtering by rating:', rating, 'and category:', categoryId); // Log the inputs
      setLoading(true);
      const url = categoryId 
        ? `http://localhost:5050/api/v1/product?rating=${rating}&category=${categoryId}` 
        : `http://localhost:5050/api/v1/product`;
      
      const response = await axios.get(url);
      setProductData(response.data.productList || []);
    } catch (error) {
      console.error('Error fetching products:', error);
      setProductData([]);
    } finally {
      setLoading(false);
    }
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
                  <SideBar 
                    filterData={filterData} 
                    filterByPrice={filterByPrice}  // Correctly passed function
                    filterByRating={filterByRating}
                    isOpenSideBar={isOpenSideBar}
                    openSideBarData={openSideBarData}
                  />
               </div>

               <div className="col-lg-9 col-md-9 right-sidebar popular-products ">
               <div className="top-strip d-flex align-items-center justify-content-between">
                  <p> We found <span style={{color: "#3BB77E"}}> ( {productData?.length } )  </span> items for you! </p>
                  <div className="ml-auto  d-flex align-items-center show-count-product ">
                      
                  </div>
               </div>

                   <div className="row product-row ms-3">
                   {
                   loading ? (
                          <p>Loading...</p>
                        ) : productData.length > 0 ? (
                          productData.map((item) => (
                            <div className="item" key={item?._id}>
                            <ProductBest  item={item}/> 
                          </div>
                    
                          ))
                        ) : (
                          <p className="no-product">No products found.</p>
                        )}
                   
                   </div>
               </div>
            </div>
          </div>
        </div>
        
    </>
  )
}

export default Shop
