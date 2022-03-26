import React from 'react';
import './Item.css';

const Item = (props) => {
    const { name, price, image } = props.item;
    const { addCart, item } = props;
    return (
        <div className='card shadow p-3 m-2  bg-body rounded item'>

            <div className='card-body'>
                <div className='text-center'><img src={image} alt=''></img>
                </div>
                <h5 className='card-title'>{name}</h5>
                <p className='card-text text-success'>Price: $ {price}</p>

                <button type="button" onClick={() => addCart(item)} className='btn btn-cart btn-success'  > Add to cart </button>

            </div>
        </div>

    );
};

export default Item;