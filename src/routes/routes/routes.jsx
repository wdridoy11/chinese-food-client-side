import React from 'react'
import {createBrowserRouter} from "react-router-dom";
import Main from '../../layout/Main';
import Home from '../../pages/home/home/Home';
import Login from '../../pages/login/Login';
import Registration from '../../pages/registration/Registration';
import Error from '../../pages/error/Error';
import ChefDataLoad from '../../pages/chef/ChefDataLoad';
import ChefDetails from '../../pages/chef/ChefDetails';
import PrivetRoute from '../privetRoute/PrivetRoute';

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
                path:"chef",
                element:<ChefDataLoad></ChefDataLoad>,
            },
            {
                path:"chef/:id",
                element:<PrivetRoute><ChefDetails></ChefDetails></PrivetRoute>,
                loader:({params})=>fetch(`http://localhost:5000/chef/${params.id}`)
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