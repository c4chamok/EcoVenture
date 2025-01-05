import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import AdventurePage from "../Pages/AdventurePage";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Pages/Profile";
import UpdateProfile from "../Pages/UpdateProfile";
import ForgetPassword from "../Pages/ForgetPassword";
import ErrorPage from "../Pages/ErrorPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                loader: ()=>fetch('/Tours.json'),
                element:<Home></Home>
            },
            {
                path:'/adventure/:id',
                loader: ()=>fetch('/Tours.json'),
                element: <PrivateRoute><AdventurePage></AdventurePage></PrivateRoute>
            },
            {
                path: '/my-profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/update',
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            },
            {
                path: '/password-reset',
                element: <ForgetPassword></ForgetPassword>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
])

export default router