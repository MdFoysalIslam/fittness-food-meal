// @flow strict

import * as React from 'react';

function OrderCart({item}) {
    const {name, image, category, recipe, price} = item;
    return (
        <div>
        <div className="card glass w-60 h-96">
            <figure>
                <img
                    src={image}
                    alt="car!" />
            </figure>
            <div className="card-body">
                 <h2 className="card-title">{name}</h2>
                
                <div className="card-actions justify-center">
                    <button className="btn btn-success text-white">$ {price}</button>
                    <button className="btn btn-outline btn-accent">Add to cart</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default OrderCart;