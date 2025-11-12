import React from 'react';

const CartDesign = ({cProduct}) => {
    const {title, image, price, rating, cartQuantity } = cProduct;
    return (
        <div className='flex justify-between mt-10'>
            {/* image div */}
            <div className='w-[100px]'>
                <img className='w-full object-cover' src={image} alt="" />
            </div>
            
            {/* text div */}
            <div>
                <h1>Name : {title}</h1>
                <div className='flex justify-between gap-3'>
                    <h1>Price : ${price}</h1>
                    <h1>Rating : {rating}</h1>
                    <h1>Cart Quantity : {cartQuantity}</h1>
                </div>
            </div>
        </div>
    );
};

export default CartDesign;