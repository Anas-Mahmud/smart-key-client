import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blog/Blogs";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import MySellers from "../Pages/Dashboard/AllUsers/MySellers";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import Contact from "../Pages/Home/Contact";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import AllCategoryProducts from "../Pages/Products/AllCategoryProducts/AllCategoryProducts";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SellerRoute from "./SellerRoute/SellerRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/products/:id",
        element: <AllCategoryProducts></AllCategoryProducts>,
        loader: ({ params }) =>
          fetch(`https://smart-key-server.vercel.app/products/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/myProducts",
        element: (
          <SellerRoute>
            <MyProducts></MyProducts>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/addProduct",
        element: (
          <SellerRoute>
            <AddProduct></AddProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/allUsers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/mySellers",
        element: (
          <AdminRoute>
            <MySellers></MySellers>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
