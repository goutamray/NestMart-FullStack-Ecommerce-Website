
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








