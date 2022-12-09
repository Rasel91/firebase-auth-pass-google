
import Home from "../Home/Home";
import Main from "../Layouts/Main";
import Login from "../Login/Login";
import Orders from "../Orders/Orders";
import Register from "../Register/Register";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([

 {
    path:'/',
    element: <Main/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/orders',
            element:<PrivateRoute> <Orders></Orders> </PrivateRoute>
        },
        {
            path:'/register',
            element:<Register/>
        }
    ]
 }

])