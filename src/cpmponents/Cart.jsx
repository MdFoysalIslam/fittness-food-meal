// @flow strict

import * as React from 'react';
import { Link } from 'react-router-dom';

function Cart({ cart }) {
    const { name, recipe, image, category, price } = cart;
    return (
        <div>
            <div className="card glass w-96">
                <figure>
                    <img
                        src={image}
                        alt="car!" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-success text-white">$ {price}</button>
                        <Link to='order'>
                        <button className="btn btn-outline btn-accent">Order Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;