// @flow strict

import * as React from 'react';
import Cart from './Cart';


function ChefRecommends() {

    const [carts, setCarts] = React.useState([])
    
        React.useEffect(() => {
            fetch('menu.json')
                .then(res => res.json())
                .then(data => setCarts(data))
                    console.log(carts)
                
        }, [])

   
    return (
       <div className='grid md:grid-cols-3 gap-4'>
       {
        carts.map(cart => <Cart key={cart._id} cart={cart}></Cart>)
       }
              
       </div>
    );
};

export default ChefRecommends;