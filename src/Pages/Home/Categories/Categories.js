import React, { useEffect, useState } from 'react';
import CategoryCards from './CategoryCards';

const Categories = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() =>{
        fetch('https://resale-products-server-hazel.vercel.app/categories')
        .then(res => res.json())
        // .then(data => console.log(data));
        .then(data => setCategories(data));
    }, [])

    return (
        <div className='mt-16 mb-11 ml-11 mr-11 p-11 bg-slate-200 rounded-lg'>
            <div className='text-center'>
                <h3 className='text-xl text-black uppercase font-bold'>Available Bike Categories: {categories.length}</h3>
            </div>
            <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                    categories.map(category =><CategoryCards
                    key={category._id}
                    category={category}
                ></CategoryCards>)
            }
            </div>
        </div>
    );
};
export default Categories;