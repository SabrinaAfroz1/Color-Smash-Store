import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { name, price, image } = props.cart;
    return (
        <div className='cart-item'>
            <div> <img src={image} alt=''></img></div>

            <div>
                <h5 className='card-title'>{name}</h5>
                <p className='card-text text-success'>Price: $ {price}</p>
            </div>

        </div >

    );
};

export default Cart;