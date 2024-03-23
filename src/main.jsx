import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home.jsx';
import About from './about/About.jsx';
import Shop from './shop/Shop.jsx';
import SingleProduct from './shop/SingleProduct.jsx';
import Cart from './shop/Cart.jsx';
import ContactUs from './ContactUs/ContactUs.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/> ,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path: "/about",
        element:<About/>
      },{
        path: "/shop",
        element: <Shop/>  
      },
      {
        path: "shop/:id",
        element: <SingleProduct/>
      },
      {
        path: "/cart-page",
        element:<Cart/>
      },
      {
        path: "/contact",
        element:<ContactUs/>
      },
      {
        path: "/login",
        element:<Login/>
      },
      {
        path: "/sign-up",
        element: <Signup/>
        /* making an change */
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
     <RouterProvider router={router} />
  </AuthProvider>
  
)
