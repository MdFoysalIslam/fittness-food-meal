import * as React from 'react'; 

const useMenu = () => {
    const [menu, setMenu] = React.useState([])
    const [loading, setLoading] = React.useState(true);

    React.useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>{ 
            setMenu(data)
            setLoading(false)
        })
    },[])
return [menu, loading]
}
export default useMenu;