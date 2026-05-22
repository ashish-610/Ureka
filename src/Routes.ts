import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import App from "./App";
import About from "./About";
import Contact from "./Contact";
import PageNotFound from "./PageNotFound";
import Product from "./Product";
import ProductDetails from "./ProductDetails";

export const router=createBrowserRouter([
    {
        path:"/",
        Component: App, 
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:"about",
                Component: About
            },
            {
                path:"contact",
                Component:Contact
            },
            {
                path:"product",
                Component:Product,
                
            },
            {
             path:"product/:category",
             Component: ProductDetails
            },


        ]
    },
    {
        path:"*",
        Component:PageNotFound
    }

])