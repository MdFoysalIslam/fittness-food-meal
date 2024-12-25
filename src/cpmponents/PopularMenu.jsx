// @flow strict

import * as React from 'react';
import SectionTitle from './SectionTitle';
import MenuItem from './MenuItem';
import useMenu from './Hooks/useMenu';

function PopularMenu() {
  const [menu] = useMenu()
  
  const popular = menu.filter(item => item.category === 'popular')
 
              
   
    return (
        <div>
            <SectionTitle className='mt-12'
                heading="From our Menu"
                subHeading='Popular Items'
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-6 mb-8'>
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
           
        </div>
    );
};

export default PopularMenu;