import React from 'react';
const Banner = () => {
    return (
        <div>
        <div className="hero bg-indigo-100 pt-5 pb-5">
            <div className="hero-content flex-col lg:flex-row-reverse">
            <div>
                <h1 className="text-5xl font-bold"> Buy & Sale Bikes !</h1>
                <p className="pt-6">We are here to sell used (second-hand) bikes of different categories to you.</p>
                <p className="pb-6">Best website in the town to resale your bikes.!</p>
                <button className='bg-indigo-500 p-3 text-white rounded' >Resale Now!</button>
            </div>
                <img src={'https://img.freepik.com/free-vector/speed-neon-style-banner_1262-14780.jpg?w=826&t=st=1669233910~exp=1669234510~hmac=c4cf00f0056b9b76b1f4e27c313b3cad6cb158610940b7617a354ab90029de02'} className=" rounded-lg lg:w-1/2 shadow-2xl" />
            </div>
        </div> 
        </div>
    );
};
export default Banner;
