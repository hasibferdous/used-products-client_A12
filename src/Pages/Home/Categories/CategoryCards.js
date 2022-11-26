import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCards = ({category}) => {
    const { name, img} = category;
    return (
        <div className='mb-11'>
        <div className="card bg-slate-900 shadow-xl">
            <figure className="px-10 pt-10">
                 <img src={img} alt="bikes" className="rounded-xl w-80 h-80" /> 
            </figure>
        <div className="card-body items-center text-center text-white">
            <h2 className="card-title">{name}</h2>
            <div>
            <button className='bg-indigo-200 rounded p-3 text-stone-900 font-semibold'> 
            <Link to={`/category/${category.id}`}>Go Inside </Link></button>
            </div>
        </div>
        </div>
        </div>
    );
};
export default CategoryCards;