import React from 'react'
import {createBrowserRouter} from "react-router-dom";
// import page
import Main from '../../layout/Main';
import Blog from '../../pages/blog/Blog';
import Error from '../../pages/error/Error';
import Login from '../../pages/login/Login';
import Home from '../../pages/home/home/Home';
import PrivetRoute from '../privetRoute/PrivetRoute';
import ChefDetails from '../../pages/chef/ChefDetails';
import ChefDataLoad from '../../pages/chef/ChefDataLoad';
import Registration from '../../pages/registration/Registration';

const router= createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
            },
            {
                path:"/blog",
                element:<Blog></Blog>
            },
            {
                path:"chef",
                element:<ChefDataLoad></ChefDataLoad>,
            },
            {
                path:"chef/:id",
                element:<PrivetRoute><ChefDetails></ChefDetails></PrivetRoute>,
                loader:({params})=>fetch(`https://food-recipe-server-developersridoy-gmailcom.vercel.app/chef/${params.id}`)
            },
            {
                path:"login",
                element:<Login></Login>
            },
            {
                path:"registration",
                element:<Registration></Registration>
            },
            {
                path:"*",
                element:<Error></Error>
            }
        ]
    }
])

export default router