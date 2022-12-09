
import Home from "../Home/Home";
import Main from "../Layouts/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";

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
            path:'/register',
            element:<Register/>
        }
    ]
 }

])