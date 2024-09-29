import { useContext, useState } from "react";
import { MyContext } from "../../App";
import SelectDrop from "../selectDropdown/SelectDrop";
import { IoIosSearch } from "react-icons/io";
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from "react-router-dom";
import { fetchSearchProductData } from "../../utils/api";

const SearchBox = ({ hanleOpenSearch }) => {
  const [searchFields, setSearchFields] = useState("");
  const [loading, setLoading] = useState(false);
  
  const context = useContext(MyContext);
  const navigate = useNavigate();

  // Handle input value change
  const onChangeValue = (e) => {
    setSearchFields(e.target.value);
  };

  // Search products function
  const searchProducts = async () => {
    if (!searchFields.trim()) return; // Prevent empty searches

    setLoading(true);

    try {
      // Fetch search data from the database
      const res = await fetchSearchProductData(`?q=${searchFields}`);

      // If search results are found, update context and navigate
      if (res && res.length > 0) {
        context.setSearchData(res);
        hanleOpenSearch();

        navigate("/search");
      } else {
        console.log("No products found");
        // Optionally show an error message or handle empty results
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
      setSearchFields("");
    }
  };
  

  return (
    <div className="header-search d-flex align-items-center">
      <SelectDrop data={context?.categoryData} />

      <input
        type="text"
        placeholder="Search for products...."
        onChange={onChangeValue}
        value={searchFields}
      />

      <button className="search" onClick={searchProducts}>
        {loading ? (
          <CircularProgress color="inherit" className="ml-3 loader" />
        ) : (
          <IoIosSearch />
        )}
      </button>
    </div>
  );
};

export default SearchBox;


