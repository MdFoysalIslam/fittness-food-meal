// @flow strict

import * as React from 'react';
import ManuCard from './ManuCard';



function HomeCard() {
    const [menu, setMenu] = React.useState([]);

 React.useEffect(()=>{
    fetch('menu.json')
    .then(res => res.json())
    .then(data => setMenu(data))

    
 },[])
    return (
       
       <div><h2>
        Home Cart{menu.length}
        </h2></div>
    );
};

export default HomeCard;