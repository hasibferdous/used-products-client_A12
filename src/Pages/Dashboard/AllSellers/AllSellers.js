import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import DeleteModal from '../../Shared/DeleteModal/DeleteModal';

const AllSellers = () => {
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('https://resale-products-server-hazel.vercel.app/sellers');
            const data = await res.json();
            return data;
        }
    });


    const [deletingSeller, setDeletingSeller] = useState(null);
    const closeModal = () => {
        setDeletingSeller(null);
    }

  const handleDeleteSeller = user => {
    fetch(`https://resale-products-server-hazel.vercel.app/seller/${user._id}`, {
        method: 'DELETE', 
         headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
         }
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0){
            refetch();
            toast.success(`Product ${user.name} deleted successfully`)
        }
    })
}

    return (
        <div>
            <h2 className="text-3xl text-center font-bold m-5">All Sellers</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Delete</th>
        <th>Verify</th>

      </tr>
    </thead>
    <tbody>
      {
        users.map((user, i) =><tr key={user._id}>
            <th>{i+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
                <label onClick={() => setDeletingSeller(user)} htmlFor="delete-modal" className="btn btn-sm btn-error">Delete</label>
            </td>
            <td><button className='btn btn-xs btn-primary'>Verify</button></td>

          </tr>)
      }
      
    </tbody>
  </table>
</div>
{
                deletingSeller && <DeleteModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingSeller.name}. It cannot be undone.`}
                    successAction = {handleDeleteSeller}
                    successButtonName="Delete"
                    modalData = {deletingSeller}
                    closeModal = {closeModal}
                >
                </DeleteModal>
            }
        </div>
    );
};
export default AllSellers;
