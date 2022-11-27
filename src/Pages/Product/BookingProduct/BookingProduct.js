import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingProduct = ({ bike, setBike,  refetch }) => {
    //  const { title } = bike ;
    const { user } = useContext(AuthContext);
    
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
       
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
  
        const booking = {
            name,
            email,
            phone,
            location,
            
        }

        fetch('http://localhost:5001/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    // setBike(null);
                    toast.success('Booking confirmed');
                    refetch();
                }
                else{
                    toast.error(data.message);
                }
            })
        }

        return (
        <>
            <input type="checkbox" id="booking-bike" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-bike" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {/* <h3 className="text-lg font-bold">{title}</h3>  */}
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name="location" type="text" placeholder="Meeting Location" className="input w-full input-bordered" />
                        
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
 </form>


                </div>
            </div>
        </>
    );
};
export default BookingProduct;