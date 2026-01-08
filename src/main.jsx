import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from "react-router/dom";
import Root from './Root/Root.jsx';
import Home from './Pages/Home.jsx';
import AddCar from './Pages/AddCar.jsx';
import Login from './Pages/Login.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Registration from './Pages/Registration.jsx';
import PrivateRoutes from './Components/Routes/PrivateRoutes.jsx';
import MyListing from './Pages/MyListing.jsx';
import MyBooking from './Pages/MyBooking.jsx';
import AllCars from './Pages/AllCars.jsx';
import Error from './Pages/Error.jsx';
import AboutUs from './Components/homeLayout/AboutUs.jsx';
import CarDetails from './Pages/CarDetails.jsx';
import Loading from './Pages/Loading.jsx';
import FAQ from './Extra/FAQ.jsx';
import PrivacyPolicy from './Extra/PrivacyPolicy.jsx';
import DashBoardLayout from './DashboardLayout/DashboardLayout.jsx';
import Dashboard from './DashboardLayout/Dashboard/Dashboard.jsx';
import Profile from './DashboardLayout/Dashboard/Profile.jsx';
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        path: '/',
        element: <Home></Home>,
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: '/addCar',
        element: <PrivateRoutes>
          <AddCar></AddCar>
        </PrivateRoutes>
      },
      {
        path: '/allCars',
        element: <AllCars></AllCars>
        },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
      {
        path: '/myBooking',
        element: <PrivateRoutes>
          <MyBooking></MyBooking>
        </PrivateRoutes>
      },
      {
        path: '/carDetails/:id',
        loader: ({ params }) => fetch(`https://rent-wheels-server-jet.vercel.app/cars/${params.id}`),
        element:<CarDetails></CarDetails>,
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: '/aboutUs',
        element: <AboutUs></AboutUs>
      },
      {
        path: 'faq',
        element: <FAQ></FAQ>
      },
      {
        path: 'pp',
        element: <PrivacyPolicy></PrivacyPolicy>
      },
      {
        path:'/profile',
        element: <PrivateRoutes>
          <Profile></Profile>
        </PrivateRoutes>
      }
    ]
  },
  {
    path:'/dashboard',
    element:<PrivateRoutes>
      <DashBoardLayout></DashBoardLayout>
    </PrivateRoutes>,
    children:[
      {
        index: true,
        element:<Dashboard></Dashboard>
      },
      {
        path:'profile',
        element:<Profile></Profile>
      },
            {
        path: 'myListing',
        element: <PrivateRoutes>
          <MyListing></MyListing>
        </PrivateRoutes>
      },
    ]
  },
  {
    path: '/*',
    element: <Error></Error>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
            <RouterProvider router={router} />
     </AuthProvider>
  </StrictMode>,
)
