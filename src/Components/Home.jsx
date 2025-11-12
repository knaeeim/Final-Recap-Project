import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import ProductCard from './ProductCard';

const Home = () => {
    const [products, setProducts] = useState([]);
    const data = useLoaderData(); 
    
    useEffect(()=>{
        const isPopular = data.filter((product) => product.isPopular)
        setProducts(isPopular);
    }, [data])


    return (
        <div className='my-20'>
            <div className='text-center text-5xl text-green-600 font-bold'>
                <h1>Here is our Popular Picks 🔥</h1>
            </div>
            <div className='grid grid-cols-3 gap-10 justify-items-center mt-20'>
                {
                    products.map((product) => <ProductCard key={product.id} product={product}></ProductCard> )
                }
            </div>
        </div>
    );
};

export default Home;