import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);

  
   
    useEffect( () =>{
        fetch('products.json')
        .then( res=> res.json())
        .then(data => setProducts(data.data))
    } ,[]);
    return (
        <div className='mx-10 p-2 rounded bg-gray-100  mt-20'>
            <div><h1 className='text-black text-3xl font-semibold underline-offset-2 border-black mb-5'>New Arrival</h1></div>
            <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-1 '>
             {
               products.map(product => <Product
                key={product._id}
                product={product}
               ></Product>
               
             
                ) 
            }
            
        </div>
        </div>
    );
};


export default Products;