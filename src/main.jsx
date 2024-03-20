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
import Shop from './Shop/Shop.jsx';

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
        path: "/shop",
        element: <Shop/>
      },
      {
        path: "/about",
        element:<About/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)
