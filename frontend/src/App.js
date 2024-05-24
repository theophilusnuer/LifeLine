import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landing page";
import Register from "./pages/register";
import Login from "./pages/login";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/login", element: <Login/> },
    { path: "/register", element: <Register/> },
  ])
  return (
<>
<RouterProvider router={router} />
</>
  );
}

export default App;
