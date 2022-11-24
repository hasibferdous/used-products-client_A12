import React from 'react';
const Review = ({ review }) => {
    const { name, img, review: userReview, location } = review;
    return (
        <div className="card shadow-xl bg-stone-300 mt-5 mb-5">
            <div className="card-body">
                <div className="flex items-center mt-6">
                    <div className="avatar mr-6">
                        <div className="w-16 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h5 className="text-lg">{name}</h5>
                        <p>{location}</p>
                    </div>
                </div>
                <p>{userReview}</p>
            </div>
        </div>
    );
};
export default Review;