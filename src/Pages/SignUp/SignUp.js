import React from 'react';
import { Link } from 'react-router-dom';
import BuyerSignUp from './BuyerSignUp';

const SignUp = () => {
    return (
        <div className='md:flex justify-center items-center mb-11'>
            <form>
            <div className="text-3xl font-bold tracking-wide p-0 text-center mt-5 pb-11">
                        SignUp Form
                </div>
                <div className="flex flex-row gap-2 mb-11">
                <div className='bg-slate-200 rounded-xl shadow-xl'>
                <div className="dropdown">
                    <label tabIndex={0} className="btn m-1">SignUp Options</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to='/sellersignup'> Seller SignUp </Link></li>
                    <li><Link to='/signup'> Buyer SignUp </Link></li>
                    </ul>
                    </div>
                    </div>
                </div>
            </form>
            <BuyerSignUp></BuyerSignUp>
            <div>
                <img 
                src='https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?w=740&t=st=1669630967~exp=1669631567~hmac=8646a1a210e4619922cfe58201cb945d0e2b688ed43f697b80923f9de260716f' 
                alt='login'
                ></img>
            </div>
        </div>
    );
};
export default SignUp;