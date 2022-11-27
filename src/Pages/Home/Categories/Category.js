import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import BookingProduct from '../../Product/BookingProduct/BookingProduct';
import ProductCard from '../../Product/Product/ProductCard';


const Category = () => {
    const CategoryProducts = useLoaderData();
    const [bike, setBike] = useState(null);
    return (
        <div>
            <h1 className='text-center my-11 font-semibold'>Number of Available Bikes: {CategoryProducts.length}</h1>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-11 py-11'>
            {
                CategoryProducts.map(product =><ProductCard
                    key={product._id}
                    product={product}
                    setBike={setBike}
                ></ProductCard>)
            }
        </div>
        {
            bike &&
            <BookingProduct>
            bike={bike}
            </BookingProduct>
        }
        <div className='text-center mb-11 '>
        <Link to='/'>
            <button className='text-center  px-8 py-3 font-semibold rounded bg-red-200 shadow-2xl'>
              Go Back
            </button>
          </Link>
        </div>

        </div>
    );
};

export default Category;