import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ProductCard from '../../Product/Product/ProductCard';


const Category = () => {
    const CategoryProducts = useLoaderData();
    return (
        <div>
            <h1 className='text-center my-11 font-semibold'>Number of Available Bikes: {CategoryProducts.length}</h1>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-11 py-11'>
            {
                CategoryProducts.map(products =><ProductCard
                    key={products._id}
                    products={products}
                ></ProductCard>)
            }
        </div>
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