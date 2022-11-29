import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
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


    const { data: addedproducts, isLoading, refetch } = useQuery({
        queryKey: ['addedproducts'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/addedproducts', {
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
    const handleDeleteaddedproduct = addedproduct => {
        fetch(`http://localhost:5000/addedproducts/${addedproduct._id}`, {
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
        fetch(`http://localhost:5000/addedproducts/${addedproduct._id}`, {
            method: '', 
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
                                    <label onClick={() => setAdvertiseProduct(addedproduct)} htmlFor="confirmation-modal" className="btn btn-sm btn-success">Advertise</label>
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
                    successAction = {handleDeleteaddedproduct}
                    successButtonName="Delete"
                    modalData = {deletingProduct}
                    closeModal = {closeModal}
                >
                </ConfirmationModal>
            }
            {
                            
                                advertiseProduct && <ConfirmationModal
                                    title={`Are you sure you want to delete?`}
                                    message={`If you delete ${deletingProduct.name}. It cannot be undone.`}
                                    successAction = {handleAdvertiseAddedproduct}
                                    successButtonName="Delete"
                                    modalData = {deletingProduct}
                                    closeModal1 = {closeModal1}
                                >
                                </ConfirmationModal>
                            
            }
        </div>
    );
};

export default ManageProducts;