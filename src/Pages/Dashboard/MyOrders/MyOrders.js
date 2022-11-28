import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5001/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                   authorization: `bearer ${localStorage.getItem('accessToken')}` 
                }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
                    <div>
             <h3 className="text-3xl mb-5">My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone No.</th>
                            <th>Meeting Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, i) => <tr key={booking._id}>
                                <th>{i+1}</th>
                                <td>{booking.name}</td>
                                <td>{booking.email}</td>
                                <td>{booking.phone}</td>
                                <td>{booking.location}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>

        </div>
    );
};

export default MyOrders;