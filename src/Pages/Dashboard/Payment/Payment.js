import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
//import { useNavigation } from 'react-day-picker';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
//import Loading from '../../Shared/Loading/Loading';



const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
 
    
    //const navigation = useNavigation();
    
    // if(navigation.state === "loading"){
    //     return <Loading></Loading>
    // }
    return (
        <div className='m-5'>
            <h3 className="text-3xl">Payment Section </h3>
            <p className="text-xl">Please pay  for your product and confirm your purchase</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;