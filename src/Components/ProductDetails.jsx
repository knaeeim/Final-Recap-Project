import React, { useContext } from 'react';
import { FaCartPlus, FaShoppingBag } from 'react-icons/fa';
import { useLoaderData } from 'react-router';
import { CartContext } from '../Context/createContext';

const ProductDetails = () => {
    const data = useLoaderData();
    const {handleCartProducts} = useContext(CartContext); 
    const { title, image, price, description, quantity, category, brand, rating } = data;
    return (
        <div className='m-16'>
            <div className='flex justify-center items-center gap-16'>
                {/* image div */}
                <div className='w-[650px] h-[700px]'>
                    <img className='object-cover h-full rounded-xl' src={image} alt="" />
                </div>


                {/* text div */}
                <div className='space-y-10'>
                    <h1 className='text-5xl font-bold text-orange-800'>Name : {title}</h1>
                    <h1 className='text-3xl font-bold text-green-700'>Price : ${price}</h1>
                    <div className='text-xl font-bold space-y-10'>
                        <h1>Quantity : {quantity}</h1>
                        <h1>Category : {category}</h1>
                        <h1>Brand : {brand}</h1>
                        <h1>Rating : {rating}</h1>
                        <h1>Description : {description}</h1>
                    </div>

                    <div className='flex gap-5'>
                        <button onClick={()=> handleCartProducts(data)} className='btn btn-active btn-outline text-xl text-green-800'> <FaCartPlus /> Add to Cart</button>
                        <button className='btn btn-active btn-outline text-xl text-green-900'> <FaShoppingBag/> Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;