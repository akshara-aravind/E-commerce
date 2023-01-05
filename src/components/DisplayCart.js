import React from 'react'
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { addToCart } from '../store/cartState';
export const DisplayCart = () => {
    const [show, setShow] = useState(false);
    const showCart = () => {
        setShow(!show);
    }

    const cartItems = useRecoilValue(addToCart);
    const length = cartItems.length;
    return (
        <div>
            <button className="Cart" onClick={showCart}>
                cart{
                    length > 0 && <b>({length})</b>
                }
            </button>
            {show && length > 0 && (<div className='AddToCart'>
                {cartItems.map((items) => {
                    return (
                        <div className='AddToCartItems' key={items.id}>
                            <div className='AddToCartImage'><img src={items.image} alt='product' />
                            </div>
                            <div className='AddToCartDescription'>
                                <h4>{items.name}</h4>
                                <div>{items.description}</div><br />
                                <div >Quantity:{items.cartQuantity}</div><br />
                                <div>Price:<b>${items.price * items.cartQuantity}</b></div><br />
                            </div>
                        </div>
                    )
                })}
            </div>)}
        </div>
    );
}