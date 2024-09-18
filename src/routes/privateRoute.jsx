import Layout from "../components/Layout/Layout";
import Cart from "../pages/cart/Cart";
import Checkout from "../pages/checkout/Checkout";
import MyAccount from "../pages/myAccount/MyAccount";
import OrderTruck from "../pages/orderTruck/OrderTruck";
import Shop from "../pages/Shop/Shop";
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/signUp/SignUp";
import WishList from "../pages/wishlist/WishList";


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
           },
           {
            path : "/cart",
            element : <Cart />
           },
           {
            path : "/checkout",
            element : <Checkout />
           },
           {
            path : "/my-account",
            element : <MyAccount />
           },
           {
            path : "/wishlist",
            element : <WishList />
           },
           {
            path : "/order-truck",
            element : <OrderTruck/>
           },
 
      ] 
    }
]




// export default router 
export default privateRouter;


















