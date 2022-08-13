import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {purchaseId} = useParams()
    return (
       <div className='container h-[170px] mt-52'>
           <h2 className='text-center text-2xl font-bold m-5'>Welcome to Product details {purchaseId}</h2>
            <div className='text-center'>
            {/* <Link to='/checkout'  className='btn btn-primary'> Checkout</Link> */}
             <Link to='/checkout'>
                 <button className='btn btn-primary'> Checkout </button>
            </Link>
        </div>
       </div>
    );
};

export default ProductDetails;