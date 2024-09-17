import Layout from "../components/Layout/Layout";
import Cart from "../pages/cart/Cart";
import Checkout from "../pages/checkout/Checkout";
import Shop from "../pages/Shop/Shop";
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/signUp/SignUp";


// create public router 
const privateRouter = [
    {
      element : <Layout />,
      children : [
           {
            path : "/shop",
            element : <Shop />
           },
           {
            path : "/register",
            element : <SignUp />
           }, 
           {
            path : "/login",
            element : <SignIn />
           } ,
           {
            path : "/cart",
            element : <Cart />
           } ,
           {
            path : "/checkout",
            element : <Checkout />
           } ,
 
      ] 
    }
]




// export default router 
export default privateRouter;


















