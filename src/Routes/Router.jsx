import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Product from "../pages/Product/Product";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import AddProduct from "../pages/Dashboard/User/AddProduct";
import UserProfile from "../pages/Dashboard/User/UserProfile";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: (
          <PrivateRoute>
            <Product />
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      // for user
      {
        path: "userProfile",
        element: <UserProfile />,
      },
      {
        path: "addProduct",
        element: <AddProduct />,
      },
    ],
  },
]);

export default Router;
