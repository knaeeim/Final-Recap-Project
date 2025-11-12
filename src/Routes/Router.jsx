import { createBrowserRouter } from "react-router";
import RootLayOut from "../LayOut/RootLayOut";
import Home from "../Components/Home";
import Loading from "../Components/Loading";


export const router = createBrowserRouter([
    {
        path : '/', 
        element : <RootLayOut></RootLayOut>, 
        children : [
            {
                index : true, 
                element : <Home></Home>, 
                loader : () => fetch('/data.json'), 
                hydrateFallbackElement : <Loading></Loading>
            }
        ]
    },
])