import React from 'react';

const BookingProduct = () => {
    // const { title } = bike ;
        // TODO: send data to the server
        // and once data is saved then close the modal 
        // and display success toast
    return (
        <>
            <input type="checkbox" id="booking-bike" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-bike" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {/* <h3 className="text-lg font-bold">{title}</h3> */}
                    <form className='grid grid-cols-1 gap-3 mt-10'>
<input name="name" type="text" 
placeholder="Your Name" className="input w-full 
input-bordered" />
 <input name="email" type="email" 
placeholder="Email Address" className="input w-full 
input-bordered" />
 <input name="phone" type="text" 
placeholder="Phone Number" className="input w-full 
input-bordered" />
 <br />
 <input className='btn btn-accent w-full' 
type="submit" value="Submit" />
 </form>


                </div>
            </div>
        </>
    );
};
export default BookingProduct;