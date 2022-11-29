import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/sellers');
            const data = await res.json();
            return data;
        }
    });
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
            <td><button className='btn btn-xs btn-danger'>Delete</button></td>
            <td><button className='btn btn-xs btn-primary'>Verify</button></td>

          </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};
export default AllSellers;
