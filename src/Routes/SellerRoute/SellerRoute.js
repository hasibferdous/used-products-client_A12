import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useSeller from '../../hooks/useSeller';

import Loading from '../../Pages/Shared/Loading/Loading';

const SellerRoute = ({ children }) => {
    const { seller, loading } = useContext(AuthContext);
    const [isSeller, isSellerLoading] = useSeller(seller?.email);
    const location = useLocation();

    if (loading || isSellerLoading) {
        return <Loading></Loading>
    }

    if (seller && isSeller) {
        return children;
    }

    return toast("You can't access. You are not a Seller! "), <Navigate to="/dashboard" state={{ from: location }} replace></Navigate>;
};
export default SellerRoute;
