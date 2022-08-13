import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product,handleAddToCart}) => {
    const { id, name,image, regular_price,sale_price,stock} = product;

    const navigate= useNavigate();
    const navigateToPurchaseProduct =  id =>{
        navigate(`/purchase/${id}`)
    }

    return (
        <div className='bg-white mb-10 m-2 grid w-50 rounded'>
           <div className='h-18 w-full'>
            <img src={image} />
           </div>
            <p className='font-semibold text-xl ml-1 mt-10'>{name}</p>

            <div className='flex justify-between mt-4'>

           <div className='flex gap-1 align-it'>
           <p className='font-semibold text-sm  ml-1'> ট {sale_price}</p>
            <p className='line-through text-sm text-gray-400'>ট {regular_price}</p>
           </div>

           <div className='flex justify-center gap-4 mb-2 mr-2 text-yellow-500 text-xl cursor-pointer  '>
           <p className=''>{stock>0 ? <ion-icon name="heart-outline"></ion-icon> : ''}</p>
            <p > {stock>0 ?<span className=''><ion-icon onClick={() => navigateToPurchaseProduct(id)}  name="cart-outline"></ion-icon> </span>:<span className='text-sm text-red-600 '>Stock Out</span> } </p>
           </div>

            </div>

        </div>
    );
};

export default Product;