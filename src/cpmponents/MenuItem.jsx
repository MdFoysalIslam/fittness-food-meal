// @flow strict

import * as React from 'react';
import SectionTitle from './SectionTitle';
import ChefRecommends from './ChefRecommends';

function MenuItem({ item }) {
    const { _id, name, image, recipe, price, category } = item;

     
    return (
        <div>
            <div className='flex space-x-4 rounded-xl border-2'>
                <img style={{ borderRadius: '10px 10px 10px 10px' }} className='w-[100px]' src={image} alt='' />
                <div>
                    <h3 className='uppercase'>{name}------</h3>
                    <h3 className='uppercase'>{category}------</h3>
                    <p>{recipe}</p>  <p className='text-orange-800'>${price}</p>
                </div>
                
            </div>
           
        </div>
    );
};

export default MenuItem;