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
import ProductDetails from "../pages/Product/ProductDetails/ProductDetails";
import ReviewForm from "../pages/Product/ProductDetails/Review/ReviewForm";
import ReportForm from "../pages/Product/ProductDetails/ReportForm/ReportForm";
import MyProduct from "../pages/Dashboard/User/MyProduct/MyProduct";
import UpdatedProduct from "../pages/Dashboard/User/UpdatedProduct/UpdatedProduct";
import UserProfile from "../pages/Dashboard/User/Profile/UserProfile";
import ProductReview from "../pages/Dashboard/Moderator/ProductReview/ProductReview";
import FeaturesDetails from "../pages/Home/FeaturedProduct/FeaturesDetails";
import ReportedProduct from "../pages/Dashboard/Moderator/ReportedProduct/ReportedProduct";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import Statistics from "../pages/Dashboard/Admin/Statistics/Statistics";
import ModeratorRoute from "./ModeratorRoute";
import AdminRoute from "./AdminRoute";
import ManageCoupons from "../pages/Dashboard/Admin/ManageCoupons/ManageCoupons";

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
        element: <Product />,
      },
      {
        path: "/productDetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/featuresDetails/:id",
        element: (
          <PrivateRoute>
            <FeaturesDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/features/${params.id}`),
      },
      {
        path: "/review/:id",
        element: (
          <PrivateRoute>
            <ReviewForm />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/report/:id",
        element: (
          <PrivateRoute>
            <ReportForm />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
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
      {
        path: "myProduct",
        element: <MyProduct />,
      },
      {
        path: "updatedProduct/:id",
        element: <UpdatedProduct />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },

      // for Moderator
      {
        path: "productReview",
        element: (
          <ModeratorRoute>
            <ProductReview />
          </ModeratorRoute>
        ),
      },
      {
        path: "reported",
        element: (
          <ModeratorRoute>
            <ReportedProduct />
          </ModeratorRoute>
        ),
      },
      // for Admin
      {
        path: "statistics",
        element: (
          <AdminRoute>
            <Statistics />
          </AdminRoute>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "manageCoupons",
        element: (
          <AdminRoute>
            <ManageCoupons />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default Router;
