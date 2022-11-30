import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import AdvertiseModal from '../../Shared/AdvertiseModal/AdvertiseModal';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const ManageProducts = () => {

    const [deletingProduct, setDeletingProduct] = useState(null);
    const closeModal = () => {
        setDeletingProduct(null);
    }

    const [advertiseProduct, setAdvertiseProduct] = useState(null);
    const closeModal1 = () => {
        setAdvertiseProduct(null);
    }
    // const navigate = useNavigate();

    const { data: addedproducts, isLoading, refetch } = useQuery({
        queryKey: ['addedproducts'],
        queryFn: async () => {
            try {
                const res = await fetch('https://resale-products-server-hazel.vercel.app/addedproducts', {
                     headers: {
                         authorization: `bearer ${localStorage.getItem('accessToken')}`
                     }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {
            }
        }
    });
    
    const handleDeleteProduct = addedproduct => {
        fetch(`https://resale-products-server-hazel.vercel.app/addedproducts/${addedproduct._id}`, {
            method: 'DELETE', 
             headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
             }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Product ${addedproduct.name} deleted successfully`)
            }
        })
    }

    const handleAdvertiseAddedproduct = addedproduct => {
        fetch(`https://resale-products-server-hazel.vercel.app/addedproducts/${addedproduct._id}`, {
            method: '', 
             headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
             }
        })
        .then(res => res.json())
        .then(data => {
            if(data.Count > 0){
                refetch();
                toast.success(`Product ${addedproduct.name} advertise successfully`)
                // navigate('/');
            }
        })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
              <h2 className="text-3xl text-center font-bold m-5">My Products: {addedproducts?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Original Price</th>
                            <th>Selling Price</th>
                            <th>Condition</th>
                            <th>Mobile No.</th>
                            <th>Email</th>
                            <th>Location</th>
                            <th>Year of Purchase</th>
                            <th>Description</th>
                            <th>Delete</th>
                            <th>Advertise</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            addedproducts.map((addedproduct, i) => <tr key={addedproduct._id}>
                                <th>{i + 1}</th>
                                <td>{addedproduct.name}</td>
                                <td>{addedproduct.original_price}</td>
                                <td>{addedproduct.selling_price}</td>
                                <td>{addedproduct.condition}</td>
                                <td>{addedproduct.mobile_number}</td>
                                <td>{addedproduct.email}</td>
                                <td>{addedproduct.location}</td>
                                <td>{addedproduct.year_of_purchase}</td>
                                <td>{addedproduct.description}</td>
                                <td>
                                    <label onClick={() => setDeletingProduct(addedproduct)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                                <td>
                                    <label onClick={() => setAdvertiseProduct(addedproduct)} htmlFor="confirmation-modal1" className="btn btn-sm btn-success" >Advertise</label>
                                
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingProduct && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingProduct.name}. It cannot be undone.`}
                    successAction = {handleDeleteProduct}
                    successButtonName="Delete"
                    modalData = {deletingProduct}
                    closeModal = {closeModal}
                >
                </ConfirmationModal>
            }
            {
                            
                                advertiseProduct && <AdvertiseModal
                                    title={`Advertisement`}
                                    message={`Buy ${advertiseProduct.name} at the best price from our website !!`}
                                    img={'https://img.freepik.com/free-vector/mega-sale-pine-green-abstract-background-professional-multipurpose-design-banner_1340-17396.jpg?w=996&t=st=1669756558~exp=1669757158~hmac=bed890b2bbea6244d48d2a897cd5a7c0dcd8d3f8d81ebda1f24a7c65723f8c29'}
                                    successAction = {handleAdvertiseAddedproduct}
                                    successButtonName="Buy"
                                    modalData = {advertiseProduct}
                                    closeModal1 = {closeModal1}
                                    
                                >
                                </AdvertiseModal>
                            
            }
        </div>
    );
};

export default ManageProducts;