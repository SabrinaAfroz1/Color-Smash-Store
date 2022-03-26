import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Item from '../item/Item';

import './Shop.css';

const Shop = () => {

    const [items, setItems] = useState([]);
    const [carts, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    const addCart = (item) => {
        const newCart = [...carts, item];
        setCart(newCart);
    }

    const chooseRandom = (item) => {
        var random = carts[Math.floor(Math.random() * carts.length)];
        alert(random.name);

    }
    const emptyCart = () => {
        setCart(" ");
    }

    return (
        <div className='shop-container'>
            <div className='row row-cols-1 row-cols-lg-2 mx-0'>
                <div className='col-lg-8 col-sm-12'>
                    <div className='row row-cols-1   color-items'>
                        {
                            items.map(item => <Item
                                key={item.id}
                                item={item}
                                addCart={addCart}></Item>)
                        }
                    </div>
                </div>

                <div className='col-lg-4 col-sm-12  cart'>
                    <h3> Select Items</h3>
                    <div>
                        {
                            carts.map(cart => <Cart
                                key={cart.id}
                                cart={cart}>
                            </Cart>)
                        }

                    </div>
                    <button type="button" onClick={chooseRandom} className='btn btn-choose1 '>CHOOSE 1 FOR ME</button>
                    <button type="button" onClick={emptyCart} className='btn btn-choose2 '>CHOOSE AGAIN </button>

                </div>
            </div>

        </div>

    );
};

export default Shop;