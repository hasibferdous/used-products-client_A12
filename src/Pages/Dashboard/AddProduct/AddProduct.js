import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const handleAddDoctor = data => {
                const addedproduct = {
                    name: data.name,
                    original_price: data.original_price,
                    selling_price: data.selling_price,
                    condition: data.condition,
                    mobile_number: data.mobile,
                    email: data.email,
                    location: data.location,
                    year_of_purchase: data.year,
                    description: data.description
        
                }
                // saving added product information to the database
                fetch('http://localhost:5000/addedproducts', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json', 
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(addedproduct)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                     toast.success(`${data.name} is added successfully`);
                    navigate('/dashboard/manageproducts')
                })
            }
        
    return (
        <div>
             <div className='w-96 p-7'>
            <h2 className="text-4xl">Add A Product</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Original Price</span></label>
                    <input type="text" {...register("original_price", {
                        required: "Original Price is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.original_price && <p className='text-red-500'>{errors.original_price.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Selling Price</span></label>
                    <input type="text" {...register("selling_price", {
                        required: "Selling Price is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.selling_price && <p className='text-red-500'>{errors.selling_price.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Condition</span></label>
                        <select {...register("condition", {
                        required: "Price is Required"
                    })} className="select select-bordered w-full max-w-xs
                        ">
                            <option disabled selected>Pick a Condition</option>
                            <option>Excellent</option>
                            <option>Good</option>
                            <option>Fair</option>
                        </select>
                    </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Mobile No.</span></label>
                    <input type="text" {...register("mobile", {
                        required: "Mobile No. is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.mobile && <p className='text-red-500'>{errors.mobile.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" {...register("email", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Location</span></label>
                    <input type="text" {...register("location", {
                        required: "Location is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Year of Purchase</span></label>
                    <input type="text" {...register("year", {
                        required: "Year of Purchase is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.year && <p className='text-red-500'>{errors.year.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Description</span></label>
                    <input type="text" {...register("description", {
                        required: "Description is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
                </div>
                <input className='btn btn-accent w-full mt-4' value="Submit" type="submit" />
            </form>
        </div>
        </div>
    );
};
export default AddProduct;