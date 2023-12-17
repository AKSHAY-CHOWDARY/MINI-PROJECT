
import './App.css';
import RouteLayout from './Components/RouteLayout'
import Home from './Components/SubComponents/Home';
import Shop from './Components/SubComponents/Shop';
import Cart from './Components/SubComponents/Cart';
import ContextProvider from './Contexts/ContextProvider';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDescription from './Components/SubComponents/ProductDescription';
import { useState } from 'react';

function App() {




  let[index,setIndex]=useState(0);
  let browserRouter = createBrowserRouter([
    {
      path:'/',
      element: <RouteLayout />,
      children:[{
        path:'/',
        element:<Home/>
      },
      {
        path:'/shop',
        element:<Shop index={index} setIndex={setIndex}/>,

      },
      {
        path:'/shop/details',
        element:<ProductDescription/>

      },
      
      {
        path:"/cart",
        element:<Cart/>
      }
    ]
    
    }
  ]);
  return (
    <div>
      <ContextProvider>
      <RouterProvider router={browserRouter} />
      </ContextProvider>
    </div>

   
  );
}

export default App;
