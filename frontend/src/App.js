import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LandingPage from './pages/landing page';
import Register from './pages/register';
import Login from './pages/login';
import Footer from './components/footer';
import TabsComponent from './components/tabs';
import CartPage from './pages/cartPage';
import AboutUs from './components/aboutUs';
import LabPage from './pages/labPage';
import PharmaPage from './pages/pharmaPage';
import SurgicalPage from './pages/surgicalPage';
import SurgicalDetail from './pages/details/surgical';
import LabDetail from './pages/details/lab';
import Booking from './pages/booking';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const router = createBrowserRouter([
    { path: '/', element: <LandingPage /> },
    { path: '/login', element: <Login/> },
    { path: '/register', element: <Register/> },
    { path: '/footer', element: <Footer/> },
    { path: '/tabs', element: <TabsComponent/> },
    { path: '/cart', element: <CartPage cartItems={cartItems} /> },
    { path: '/about', element: <AboutUs/> },
    { path: '/pharma', element: <PharmaPage/> },
    { path: '/lab', element: <LabPage/> },
    { path: '/lab/:id', element: <LabDetail/> },
    { path: '/surgical', element: <SurgicalPage/> },
    { path: '/surgical/:id', element: <SurgicalDetail/> },
    { path: '/booking', element: <Booking/> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
