import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';


const SellerSignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const { createUser, updateUser } = useContext(AuthContext);
    const { createSeller, updateSeller } = useContext(AuthContext);
     const [createdSellerEmail, setCreatedSellerEmail] = useState('')
    const [signUpError, setSignUPError] = useState('')
    const navigate = useNavigate();
    const [token] = useToken(createdSellerEmail);
    
    if(token){
        navigate('/');
    }
    // const handleSignUp = (data) => {
    //     console.log(data);
    //     setSignUPError('');
    //     createUser(data.email, data.password)
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user);
    //             toast('User Created Successfully.')
    //             const userInfo = {
    //                 displayName: data.name
    //             }
    //             updateUser(userInfo)
    //                 .then(() => { 
    //                     saveUser(data.name, data.email);
    //                 })

    //         })
    //         .catch(error => {
    //             console.log(error)
    //             setSignUPError(error.message)
    //         });
    // }
    const handleSellerSignUp = (data) => {
        console.log(data);
        setSignUPError('');
        createSeller(data.email, data.password, data.role)
            .then(result => {
                const seller = result.user;
                console.log(seller);
                toast('Seller Created Successfully.')
                const userInfo = {
                    displayName: data.name
                }
                updateSeller(userInfo)
                    .then(() => { 
                        saveSeller(data.name, data.email, data.role);
                    })

            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }
     const saveSeller = (name, email, role) =>{
        const seller ={name, email, role};
         fetch('https://resale-products-server-hazel.vercel.app/sellers', {
            method: 'POST',
            headers: {
                 'content-type': 'application/json'
             },
             body: JSON.stringify(seller)
       })
        .then(res => res.json())
         .then(data =>{
            setCreatedSellerEmail(email);
            //  console.log(data);
            // navigate('/');
            getUserToken(email);
        })
     }
     const getUserToken = email =>{
        fetch(`https://resale-products-server-hazel.vercel.app/jwt?email=${email}`)
        .then(res => res.json())
        .then(data =>{
            if(data.accessToken){
                localStorage.setItem('accessToken', data.accessToken)
                navigate('/');
            }
        })
    }



    return (
        <div>
            <div className='h-[800px] flex justify-center items-center mb-11'>
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
            <div className='w-96 p-7'>
                <h2 className='text-2xl text-center font-bold'> Seller SignUp</h2>
                <form onSubmit={handleSubmit(handleSellerSignUp )}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Role</span></label>
                        <select {...register("role", {
                        required: "Role is Required"
                    })} className="select select-bordered w-full max-w-xs">
                            <option disabled selected>seller</option> 
                        </select>
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
                <div className="divider"></div>
                

            </div>
            <div>
                <img 
                src='https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg?w=740&t=st=1669630967~exp=1669631567~hmac=8646a1a210e4619922cfe58201cb945d0e2b688ed43f697b80923f9de260716f' 
                alt='login'
                ></img>
            </div>

        </div>

        </div>
    );
};

export default SellerSignUp;