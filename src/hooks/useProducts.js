import React from 'react';

import  { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect( ()=> {
        fetch('https://idbdev.com/motion2/public/api/product-is-here-caught-me')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return [products, setProducts]
};

export default useProducts;