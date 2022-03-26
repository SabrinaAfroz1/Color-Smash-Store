import React from 'react';
import './Item.css';

const Item = (props) => {
    const { name, price, image } = props.item;
    return (
        // <div>
        //     <div className=' col-sm-12 col-lg-8 item'>
        //         <div class="text-center"><img src={image} alt=''></img>
        //         </div>

        //         <h2>{name}</h2>
        //         <h2>Price: ${price}</h2>
        //     </div>
        // </div>

        <div className='card shadow p-3 m-2  bg-body rounded item'>

            <div className='card-body'>
                <div class="text-center"><img src={image} alt=''></img>
                </div>
                <h5 className='card-title'>{name}</h5>
                <p className='card-text text-success'>Price: $ {price}</p>
                <button type="button" className='btn btn-primary'  > Add to cart </button>

            </div>
        </div>

    );
};

export default Item;