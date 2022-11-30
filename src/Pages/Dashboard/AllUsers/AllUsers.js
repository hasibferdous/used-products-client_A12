import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import DeleteModal from '../../Shared/DeleteModal/DeleteModal';

const AllUsers = () => {
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('https://resale-products-server-hazel.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });

    const [deletingUser, setDeletingUser] = useState(null);
    const closeModal = () => {
        setDeletingUser(null);
    }

  const handleDeleteUser = user => {
    fetch(`https://resale-products-server-hazel.vercel.app/user/${users._id}`, {
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
            <h2 className="text-3xl text-center font-bold m-5">All Users</h2>
            <div className="overflow-x-auto">
            <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        {/* <th>Admin</th> */}
        <th>Delete</th>
        
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, i) =><tr key={user._id}>
            <th>{i+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
                <label onClick={() => setDeletingUser(user)} htmlFor="delete-modal" className="btn btn-sm btn-error">Delete</label>
            </td>
          </tr>)
      }
      
    </tbody>
  </table>
  </div>
  {
                deletingUser && <DeleteModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingUser.name}. It cannot be undone.`}
                    successAction = {handleDeleteUser}
                    successButtonName="Delete"
                    modalData = {deletingUser}
                    closeModal = {closeModal}
                >
                </DeleteModal>
            }
           
        </div>

    );
};
export default AllUsers;
