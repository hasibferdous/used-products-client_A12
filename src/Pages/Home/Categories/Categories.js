import React from 'react';
import Category from './Category';
import sportsbike from '../../../asset/images/sportsbike.jpg'
import scooter from '../../../asset/images/scooterRed.jpg'
import cafeRacer from '../../../asset/images/cafeRacer.jpg'
const Categories = () => {
    const CategoryData = [
        {
            id: 1,
            name: 'Sports Bike',
            img: sportsbike
        },
        {
            id: 2,
            name: 'Scooters',
            img: scooter
        },
        {
            id: 3,
            name: 'Cafe Racer',
            img: cafeRacer
        },
    ]
    return (
        <div className='mt-16 mb-11 ml-11 mr-11 p-11 bg-slate-200 rounded-lg'>
            <div className='text-center'>
                <h3 className='text-xl text-black uppercase font-bold'>Available Bike Categories</h3>
            </div>
            <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        CategoryData.map(category => <Category
                            key={category.id}
                            category={category}
                            ></Category>)
                    }
            </div>
        </div>
    );
};
export default Categories;