
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


