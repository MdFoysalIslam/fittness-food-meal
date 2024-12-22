// @flow strict

import * as React from 'react';

function MenuItem({item}) {
    const {_id, name, image, recipe, price, category} = item;
    return (
        <div>
            <img src={image} alt=''/>
          {name}{price}
          
        </div>
    );
};

export default MenuItem;