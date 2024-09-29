
import axios from "axios"

/**
 *  fetch category data from api
 * @param {*} url 
 * @returns 
 */
export const fetchDataFromApi = async(url) => {
   try {
      const response = await axios.get("http://localhost:5050/api/v1/category"+url);
      return response.data;
   } catch (error) {
      console.error('Error submitting form data:', error.message);
      throw error; 
   }  
}; 


/**
 *  fetch slider data from api
 * @param {*} url 
 * @returns 
 */
export const fetchSliderFromApi = async(url) => {
   try {
      const response = await axios.get("http://localhost:5050/api/v1/slider"+url);
      return response.data;
   } catch (error) {
      console.error('Error submitting form data:', error.message);
      throw error; 
   }  
}; 


/**
 *  fetch product data from api
 * @param {*} url 
 * @returns 
 */
export const fetchProductFromApi = async(url) => {
   try {
      const res = await axios.get("http://localhost:5050/api/v1/product"+url);
      return res.data;
   } catch (error) {
      console.error('Error submitting form data:', error.message);
      throw error; 
   }
    
};


 /**
 * create new user data to api 
 * @param {*} url 
 * @param {*} formData 
 * @returns 
 */
 export const createNewUser = async (url, formData) => {
   try {
       const response = await axios.post(`http://localhost:5050/api/v1/user${url}`, formData);
       return response.data; // Return the data property from the response
   } catch (error) {
       console.error('Error submitting product form data:', error.message);
       throw error; // Re-throw the error for handling in the calling function
   }
};


 /**
 * google login user data to api 
 * @param {*} url 
 * @param {*} formData 
 * @returns 
 */
 export const loginGoogleUserData = async (url, formData) => {
   try {
       const response = await axios.post(`http://localhost:5050/api/v1/user${url}`, formData);
       return response.data; // Return the data property from the response
   } catch (error) {
       console.error('Error submitting product form data:', error.message);
       throw error; // Re-throw the error for handling in the calling function
   }
};

/**
 * Create review data
 * @param {string} url - The endpoint URL (e.g., "/")
 * @param {FormData} formData - The form data to submit
 * @returns {Promise<Object>} - The response data from the server
 */
export const createReviewData = async(url, formData) => {
   try {
      const response = await axios.post(`http://localhost:5050/api/v1/review${url}`, formData); 
       return response.data;
   } catch (error) {
      console.error('Error submitting form data:', error.message);
      throw error; 
   }
};

/**
 * get review data
 * @param {string} url - The endpoint URL (e.g., "/")
 * @param {FormData} formData - The form data to submit
 * @returns {Promise<Object>} - The response data from the server
 */
export const getReviewData = async(url ) => {
   try {
       const response = await axios.get("http://localhost:5050/api/v1"+url);
       return response.data;
   } catch (error) {
      console.error('Error submitting form data:', error.message);
      throw error; 
   }
};


/**
 * Create cart data
 * @param {string} url - The endpoint URL (e.g., "/add")
 * @param {FormData} formData - The form data to submit
 * @returns {Promise<Object>} - The response data from the server
 */
export const createCartData = async(url, formData) => {
   try {
      const response = await axios.post(`http://localhost:5050/api/v1/cart${url}`, formData); 
      return response.data;
   } catch (error) {
      console.error('Error submitting form data:', error.message);
      throw error; 
   }
};

/**
 *  fetch cart data from api
 * @param {*} url 
 * @returns 
 */
export const fetchCartDataFromApi = async(url) => {
   try {
      const response = await axios.get("http://localhost:5050/api/v1/cart"+url);
      return response.data;
   } catch (error) {
      console.error('Error submitting form data:', error.message);
      throw error; 
   }  
}; 


/**
 * delete cart data from api 
 * @param {*} id 
 * @returns 
 */
export const deleteCartData = async( id ) => {
   try {
      const res = await axios.delete(`http://localhost:5050/api/v1/cart${id}`); 
      return res.data; 
   } catch (error) {
      console.error('Error submitting form data:', error.message);
      throw error; 
   }
}; 


/**
 * edit cart data from api 
 * @param {*} url 
 * @param {*} updatedData 
 * @returns 
 */
export const editcartData = async( url, updatedData ) => {
   try {
    const res = await axios.patch(`http://localhost:5050/api/v1/cart${url}`, updatedData); 
    return res.data;  
   } catch (error) {
    console.error('Error submitting form data:', error.message);
    throw error; // Re-throw the error for handling in the calling func
   }
 }; 
 

/**
 * Create wishlist data
 * @param {string} url - The endpoint URL (e.g., "/")
 * @param {FormData} formData - The form data to submit
 * @returns {Promise<Object>} - The response data from the server
 */
export const createWishListData = async(url, formData) => {
   try {
      const response = await axios.post(`http://localhost:5050/api/v1/wishlist${url}`, formData); 
       return response.data;
   } catch (error) {
      console.error('Error submitting form data:', error.message);
      throw error; 
   }
};

/**
 *  fetch Wishlist data from api
 * @param {*} url 
 * @returns 
 */
export const fetchWishlistDataFromApi = async(url) => {
   try {
      const response = await axios.get("http://localhost:5050/api/v1/wishlist"+url);
       return response.data;
   } catch (error) {
      console.error('Error submitting form data:', error.message);
      throw error; 
   }  
}; 


/**
 * delete cart data from api 
 * @param {*} id 
 * @returns 
 */
export const deleteWishlistData = async( id ) => {
   try {
      const res = await axios.delete(`http://localhost:5050/api/v1/wishlist${id}`); 
      return res.data; 
   } catch (error) {
      console.error('Error submitting form data:', error.message);
      throw error; 
   }
}; 


