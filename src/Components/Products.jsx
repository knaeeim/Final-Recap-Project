import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);
    const data = useLoaderData(); 

    useEffect(()=>{
        setProducts(data);
    }, [data])

    return (
        <div>
            <div className='m-16'>
                <div className='text-center text-5xl text-green-600 font-bold'>
                    <h1>Here is our Popular Picks 🔥</h1>
                </div>
                <div className='grid grid-cols-3 gap-10 justify-items-center mt-20'>
                    {
                        products?.map((product) => <ProductCard key={product.id} product={product}></ProductCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;