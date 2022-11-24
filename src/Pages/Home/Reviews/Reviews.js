import React from 'react';
import review from '../../../asset/icons/rank.png';
import reviewer01 from '../../../asset/images/reviewer01.jpg';
import reviewer02 from '../../../asset/images/reviewer02.jpg';
import reviewer03 from '../../../asset/images/reviewer03.jpg';
import Review from './Review';

const Reviews = () => {
    const reviews = [
        {
            _id: 1, 
            name: 'John Cambell',
            img: reviewer01,
            review: 'Yes, absolutely a very good platform for the buyers who is looking for bikes, its such a wonderful website which provides all the data about the bikes. I hopefully telling you guys please go and click the website. You will be amazed...',
            location: 'London'
        },
        {
            _id: 2, 
            name: 'Alesa Swift',
            img: reviewer03,
            review: 'I was able to find buyer for my 2012 model Scooter within 2 days of posting Ad in this website. It was a very good deal and I could very easily find a genuine buyer through this site. Very user friendly Portal and best place for selling and buying used Motorcycles. I highly recommend this to all my friends.',
            location: 'Manchester'
        },
        {
            _id: 3, 
            name: 'Henry Jordan',
            img: reviewer02,
            review: 'It is the platform where we can sell our bikes directly to buyers. they provide services between us and buyers.I personally sold my kawasaki  through this platform.No doubt the services are best.',
            location: 'Canterbury'
        },
    ]
    return (
        <section className='my-16 m-11 p-5 rounded-lg bg-slate-200'>
            <div className='flex'>
            <figure>
                    <img className='w-24 lg:w-48 pl-11 ml-1 mt-5' src={review} alt="" />
            </figure>
            <div>
                <h4 className="text-xl text-teal-600 font-bold pt-11 pl-5">Reviews</h4>
                <h2 className="text-4xl pl-7">What Our Buyers and Sellers Say</h2>
            </div>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review =><Review
                        key={review._id}
                        review={review}
                    >
                    </Review>)
                }
            </div>
        </section>
    );
};
export default Reviews;