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


import { createContext, useEffect, useState } from 'react'
import { fetchDataFromApi } from './utils/api'

// context 
const MyContext = createContext();

import './App.css'
function App() {
  const [categoryData, setCategoryData] = useState([]); 




   // get all category
   useEffect(() => {

    fetchDataFromApi("/").then((res) => {
       setCategoryData(res.categoryList); 
    });

  
  }, []);


  // send all data
  const values = {
    categoryData,
    setCategoryData, 



  }
 
  
  return (
    <>
       <BrowserRouter >

         <MyContext.Provider value={values}>

         {/* header  */}
            <Header />

         {/* All routes  */}
            <Routes > 
                <Route  path='/' exact={true} element={ <Home /> }/>
                <Route  path='/about' exact={true} element={ <About /> }/>
                <Route  path='/contact' exact={true} element={ <Contact /> }/>
                <Route  path='/shop' exact={true} element={ <Shop /> }/>
                <Route  path='/product/:id' exact={true} element={ <SingleProduct /> }/>
                <Route  path='/register' exact={true} element={ <SignUp /> }/>
                <Route  path='/login' exact={true} element={ <SignIn /> }/>
                <Route  path='/cart' exact={true} element={ <Cart /> }/>
                <Route  path='/checkout' exact={true} element={ <Checkout /> }/>
                <Route  path='/my-account' exact={true} element={ <MyAccount /> }/>
                <Route  path='/order-truck' exact={true} element={ <OrderTruck /> }/>
                <Route  path='/thank-you' exact={true} element={ <ThankYou /> }/>
                <Route  path='/wishlist' exact={true} element={ <WishList /> }/>
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
