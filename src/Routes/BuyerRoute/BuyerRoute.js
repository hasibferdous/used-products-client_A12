import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useBuyer from '../../hooks/useBuyer';

import Loading from '../../Pages/Shared/Loading/Loading';

const BuyerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isBuyer, isBuyerLoading] = useBuyer(user?.email);
    const location = useLocation();

    if (loading || isBuyerLoading) {
        return <Loading></Loading>
    }
    if (user && isBuyer) {
        return children;
    }
    return toast("You can't access. You are not a Buyer! "),  <Navigate to="/dashboard" state={{ from: location }} replace></Navigate>;
};
export default BuyerRoute;
