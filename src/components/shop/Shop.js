import React, { useEffect, useState } from 'react';
import Item from '../item/Item';

import './Shop.css';

const Shop = () => {

    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className='row row-cols-1 row-cols-lg-2 mx-0'>
                <div className='col-lg-8 col-sm-12'>
                    <div className='row row-cols-1   color-items'>
                        {
                            items.map(item => <Item
                                key={item.id}
                                item={item}></Item>)
                        }
                    </div>
                </div>

                <div className='col-lg-4 col-sm-12  cart'>
                    <h3> Select Item</h3>
                    <div>

                    </div>
                    <button>CHOOSE 1 FOR ME</button>
                    <button>CHOOSE AGAIN </button>

                </div>
            </div>

        </div>

    );
};

export default Shop;