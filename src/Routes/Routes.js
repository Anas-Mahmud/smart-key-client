import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blog/Blogs";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import AllCategoryProducts from "../Pages/Products/AllCategoryProducts/AllCategoryProducts";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blogs></Blogs>
            },
            {
                path: '/products/:id',
                element: <AllCategoryProducts></AllCategoryProducts>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            }
        ]
    }
])

export default router;