import React, { useEffect, useState } from 'react';
import Loading from '../../shared/Loading';
import Navbar from '../../shared/Navbar';
import Cart from './Cart';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [isShowCart, setIsShowCart] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    

  
   
    useEffect( () =>{
        fetch('products.json')
        .then( res=> res.json())
        .then(data => setProducts(data.data))
    } ,[]);

    //  handle add to cart
  const handleAddToCart = (product) => {
    setCart((prev) => {
      const findProductInCart = prev.find((item) => item.id === product.id);
      if (findProductInCart) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item
        );
      }
    
      return [...prev, { ...product, amount: 1 }];
    });
  };

   //handle remove from cart
//    const handleRemoveFromCart = id =>{
//     setCart(prev =>{
//       return prev.reduce((cal,item) => {
//         if(item.id === id){
//           if(item.amount === 1) return cal;
//           return [...cal, {...item, amount:item.amount - 1}]
//         }
//         return [...cal, {...item}];
//       }, [])
//     })
// }





    return (

       <div>
        <div>
       
        </div>
         <div className='mx-10 p-2 rounded bg-gray-100  mt-20'>
            <div><h1 className='text-black text-3xl font-semibold underline-offset-2 border-black mb-5'>New Arrival</h1></div>
            <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-1 '>
             {
               products.map(product => <Product
                key={product._id}
                product={product}
                handleAddToCart={handleAddToCart}
               ></Product>
               
             
                ) 
            }
            
        </div>

        {/* new  */}
        {/* {isShowCart && <Cart
       cart={cart} 
       handleRemoveFromCart={handleRemoveFromCart}
       handleAddToCart={handleAddToCart}
       setIsShowCart={setIsShowCart} 
       />}
         {isLoading && (
          <div className="flex items-center justify-center">
            <Loading /> </div>
         )} */}
        </div>
       </div>
        
    );
};


export default Products;