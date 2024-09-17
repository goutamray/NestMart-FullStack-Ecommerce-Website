import Layout from "../components/Layout/Layout";
import About from "../pages/About/About";
import Home from "../pages/home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Shop from "../pages/Shop/Shop";
import SingleProduct from "../pages/SinglePage/SingleProduct";
import Contact from "../pages/contact/Contact";
import ThankYou from "../pages/thankYou/ThankYou";



// create public router 
const publicRouter = [
  {
    element : <Layout />,
    children : [
      {
        path : "/",
        element : <Home /> 
      },
      {
        path : "/about",
        element : <About /> 
      },
      {
        path : "/shop",
        element : <Shop /> 
      },
      {
        path : "/contact",
        element : <Contact /> 
      },
      {
        path : "/product/:id",
        element : <SingleProduct /> 
      },
      {
        path : "*",
        element : <NotFound />  
      },
      {
        path : "/thank-you",
        element : <ThankYou/>  
      },
    ] 
  }
]




// export default router 
export default publicRouter;






