// @flow strict

import * as React from 'react';
import MenuItem from './MenuItem';
import MenuCover from './MenuCover';

function MenuCategory({items, title, coverImg}) {
    return (
        <div>
            <div className='mb-16 mt-6'>
           {title && <MenuCover img={coverImg} title = {title}></MenuCover>}
          <div className='grid md:grid-cols-2 gap-4'>
                {
                  items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            
        </div>
        </div>
    );
};

export default MenuCategory;