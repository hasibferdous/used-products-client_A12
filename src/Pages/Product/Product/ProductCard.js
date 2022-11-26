import React from 'react';
import { Link } from 'react-router-dom';

//import { Link } from 'react-router-dom';

const ProductCard = ({products}) => {

    const { title, image_url, location, original_price, resale_price, seller_name, year_of_use, post_published_date} = products;
    //console.log(products);

    return (
        <div className='m-11 bg-violet-200'>
         
            <div className="card shadow-xl ">
            <div className="card-body text-center">
                <img className='w-96 h-72 self-center' src={image_url}></img>
                <h2 className="text-2xl text-secondary font-bold text-center">{title}</h2>
                <p>Location: {location}</p>
                <p>Original Price: {original_price}</p>
                <p>Resale Price: {resale_price}</p>
                <p>Seller Name:{seller_name}</p>
                <p>Years of Use:{year_of_use}</p>
                <p>Post Publish Date:{post_published_date} </p>
               
                <div className="card-actions justify-center">
                    <label
                        disabled={products.length === 0}
                        htmlFor="booking-modal"
                        className="bg-green-400 p-4 rounded text-white"
                        // onClick={() => setTreatment(appointmentOption)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
        </div>
    );
};
export default ProductCard;