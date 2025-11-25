import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from "react-router/dom";
import Root from './Root/Root.jsx';
import Home from './Pages/Home.jsx';
import AddCar from './Pages/AddCar.jsx';
import Login from './Pages/Login.jsx';
import Registration from './Pages/Registration.jsx';
import AuthProvider from './provider/AuthProvider.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        index: true,
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/addCar',
        element:<AddCar></AddCar>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/registration',
        element:<Registration></Registration>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
          <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
