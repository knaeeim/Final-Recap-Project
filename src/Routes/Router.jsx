import { createBrowserRouter } from "react-router";
import RootLayOut from "../LayOut/RootLayOut";
import Home from "../Components/Home";
import Loading from "../Components/Loading";
import ProductDetails from "../Components/ProductDetails";
import Products from "../Components/Products";
import Cart from "../Components/Cart";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayOut></RootLayOut>,
        children: [
            {
                index: true,
                element: <Home></Home>,
                loader: () => fetch('/data.json'),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/product/:id',
                element: <ProductDetails></ProductDetails>,
                loader: async ({ params }) => {
                    const { id } = params;
                    const data = await fetch('/data.json');
                    const res = await data.json();
                    const findProduct = res.find((product) => product.id === parseInt(id)); 
                    return findProduct;
                }
            }, 
            {
                path : '/products', 
                element : <Products></Products>, 
                loader : () => fetch('/data.json')
            }, 
            {
                path : '/cart', 
                element : <Cart></Cart>
            }
        ]
    },
])