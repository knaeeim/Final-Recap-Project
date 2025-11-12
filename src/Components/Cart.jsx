import React, { useContext } from 'react';
import { CartContext } from '../Context/createContext';
import CartDesign from './CartDesign';

const Cart = () => {
    const { carts } = useContext(CartContext);
    return (
        <div className='w-full flex gap-10 m-20'>
            <div className='w-[50%]'>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                    <legend className="fieldset-legend">Page details</legend>

                    <label className="label">Title</label>
                    <input type="text" className="input w-full" placeholder="My awesome page" />

                    <label className="label">Slug</label>
                    <input type="text" className="input w-full" placeholder="my-awesome-page" />

                    <label className="label">Author</label>
                    <input type="text" className="input w-full" placeholder="Name" />
                </fieldset>
            </div>

            <div className='w-[30%]'>
                {
                    carts.map((cart) => <CartDesign cProduct={cart}></CartDesign>)
                }
            </div>
        </div>
    );
};

export default Cart;