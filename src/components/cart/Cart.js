import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { name, price, image } = props.cart;
    return (
        <div className='cart-item'>
            <img src={image} alt=''></img>

            <div className='text-div'>
                <p className='card-title'>{name}</p>
                <p className='card-text text-success'>Price: $ {price}</p>
            </div>

        </div >

    );
};

export default Cart;