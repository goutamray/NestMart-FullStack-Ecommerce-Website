import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Home from './pages/home/Home'
import About from './pages/About/About'
import Contact from './pages/contact/Contact'

import Shop from './pages/Shop/Shop'
import SingleProduct from './pages/SinglePage/SingleProduct'

import SignUp from './pages/signUp/SignUp'
import SignIn from './pages/signIn/SignIn'

import Cart from './pages/cart/Cart'
import Checkout from './pages/checkout/Checkout'
import MyAccount from './pages/myAccount/MyAccount'
import OrderTruck from './pages/orderTruck/OrderTruck'
import ThankYou from './pages/thankYou/ThankYou'
import WishList from './pages/wishlist/WishList'
import NotFound from './pages/NotFound/NotFound'
import Search from './pages/search/search'


import { createContext, useEffect, useState } from 'react'
import { createCartData, fetchCartDataFromApi, fetchDataFromApi } from './utils/api'

import { ToastContainer } from 'react-toastify'
import createToast from './utils/toastify'

// context 
const MyContext = createContext();

import './App.css'
function App() {
  const [categoryData, setCategoryData] = useState([]); 
  const [isLogin, setIsLogin] = useState(false);  
  const [addingCart, setAddingCart] = useState(false); 
  
  const [cartData, setCartData ] = useState(); 
  const [searchData, setSearchData] = useState([]); 

  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || {
      name: "",
      email: "",
      userId: ""
    };
  });

  const [openMobileMenu, setOpenMobileMenu] = useState(false); 

   
  const handleMobileMenu = () => {
    setOpenMobileMenu(() => !openMobileMenu)
  }


   // get all category
   useEffect(() => {
     fetchDataFromApi("/").then((res) => {
        setCategoryData(res.categoryList); 
     });
  }, []);

    // login & logout 
    useEffect(() => {
      const token = localStorage.getItem("token");
  
      if (token) {
        setIsLogin(true); 
        const userData = JSON.parse(localStorage.getItem("user"));
        setUser(userData); 
      } else {
        setIsLogin(false); 
        setUser({
          name: "",
          email: "",
          userId: ""
        });
      }
    }, []);

  // get cart data 
  const getCartData = () => {
    // cart all data
   fetchCartDataFromApi("/").then((res) => {
         setCartData(res.cartList);
   }); 
  }; 
 


  // add to cart 
  const addToCart = (data) => {
    setAddingCart(true); 
    
      // create new cart product 
      createCartData("/add", data).then((res) => {
            
      if (res.status === true) {
        // Product added successfully
        createToast("Successfully Product Added", "success");
    
          setTimeout(() => {
            setAddingCart(false); 
          }, 2000);
    
          getCartData(); 
    
          return;
    
            } else if (res.status === false) {
              // Product already in the cart or some other issue
              return createToast("Product Already Added");
            } else {
              // Handle unexpected statuses
              return createToast("An unexpected error occurred", "error");
            }
          }).catch((error) => {
            // Handle any network or other errors
            console.error("Error adding product to cart:", error);
            createToast("Product Already Added", );
            setAddingCart(false); 
            return;
          });

   };
        


  // send all data
  const values = {
    categoryData,
    setCategoryData, 
    isLogin,
    setIsLogin,
    user,
    setUser,
    addToCart,
    addingCart,
    setAddingCart,
    cartData,
    setCartData,
    getCartData,
    searchData,
    setSearchData,
    openMobileMenu,
    setOpenMobileMenu,
    handleMobileMenu,
  }
 
  
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

       <BrowserRouter >

         <MyContext.Provider value={values}>

         {/* header  */}
            <Header />

         {/* All routes  */}
            <Routes > 
                <Route  path='/' exact={true} element={ <Home /> }/>
                <Route  path='/about' exact={true} element={ <About /> }/>
                <Route  path='/contact' exact={true} element={ <Contact /> }/>
                <Route  path='/category/:id' exact={true} element={ <Shop /> }/>
                <Route  path='/product/:id' exact={true} element={ <SingleProduct /> }/>
                <Route  path='/register' exact={true} element={ <SignUp /> }/>
                <Route  path='/login' exact={true} element={ <SignIn /> }/>
                <Route  path='/cart' exact={true} element={ <Cart /> }/>
                <Route  path='/checkout' exact={true} element={ <Checkout /> }/>
                <Route  path='/my-account' exact={true} element={ <MyAccount /> }/>
                <Route  path='/order-truck' exact={true} element={ <OrderTruck /> }/>
                <Route  path='/thank-you' exact={true} element={ <ThankYou /> }/>
                <Route  path='/wishlist' exact={true} element={ <WishList /> }/>
                <Route  path='/search' exact={true} element={ <Search /> }/>
                <Route  path='*' exact={true} element={ <NotFound /> }/>
            </Routes>

          {/* footer */}
          <Footer />
          </MyContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
export { MyContext }; 
