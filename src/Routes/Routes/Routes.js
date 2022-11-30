import { createBrowserRouter} from 'react-router-dom'
import DashboardAdmin from '../../Layout/DashboardAdmin';
import DashboardBuyer from '../../Layout/DashboardBuyer';
import DashboardLayout from '../../Layout/DashboardLayout';
import DashboardSeller from '../../Layout/DashboardSeller';
import DashboardLayoutS from '../../Layout/DashboardSeller';
import Main from '../../Layout/Main/Main';
import Blogs from '../../Pages/Blogs/Blogs';
import AddProduct from '../../Pages/Dashboard/AddProduct/AddProduct';
import AllSellers from '../../Pages/Dashboard/AllSellers/AllSellers';
import AllUsers from '../../Pages/Dashboard/AllUsers/AllUsers';
import Dashboard from '../../Pages/Dashboard/Dashboard/Dashboard';
import ManageProducts from '../../Pages/Dashboard/ManageProducts/ManageProducts';
import MyOrders from '../../Pages/Dashboard/MyOrders/MyOrders';
import Payment from '../../Pages/Dashboard/Payment/Payment';
import Advertise from '../../Pages/Home/Advertise/Advertise';
import Category from '../../Pages/Home/Categories/Category';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import ProductCard from '../../Pages/Product/Product/ProductCard';
import Products from '../../Pages/Product/Product/Products';
import NotFoundPage from '../../Pages/Shared/NotFoundPage/NotFoundPage';
import BuyerSignUp from '../../Pages/SignUp/BuyerSignUp';
import SellerSignUp from '../../Pages/SignUp/SellerSignUp';
import SignUp from '../../Pages/SignUp/SignUp';
import AdminRoute from '../AdminRoute/AdminRoute';
import BuyerRoute from '../BuyerRoute/BuyerRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import SellerRoute from '../SellerRoute/SellerRoute';

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <NotFoundPage />,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path: '/sellersignup',
            element: <SellerSignUp></SellerSignUp>
        },
        {
            path: '/buyersignup',
            element: <BuyerSignUp></BuyerSignUp>
        },
        {
            path: '/advertise',
            element: <Advertise></Advertise>
        },




        // {
        //    path: '/category/:id',
        //    element: <Category></Category>
        // },
         {
         path: '/category/:id',
         element: <PrivateRoute><Category></Category></PrivateRoute>,
         loader: ({params}) => fetch(`https://resale-products-server-hazel.vercel.app/category/${params.id}`)
     },
      {
         path: '/products/:id',
        element: <PrivateRoute><ProductCard></ProductCard></PrivateRoute> ,
         loader: ({params}) => fetch(`https://resale-products-server-hazel.vercel.app/products/${params.id}`)
     },
     {
        path: '/products',
        element: <Products></Products>
        },
    
    ]},
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [

            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/myorders',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },

            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/manageproducts',
                element: <SellerRoute><ManageProducts></ManageProducts></SellerRoute>
            },
            {
                path: '/dashboard/seller',
                element:<SellerRoute><DashboardSeller></DashboardSeller></SellerRoute> 
            },
            {
                path: '/dashboard/admin',
                element: <AdminRoute><DashboardAdmin></DashboardAdmin></AdminRoute>
            },
            {
                path: '/dashboard/buyer',
                element:<BuyerRoute><DashboardBuyer></DashboardBuyer></BuyerRoute>
            },
            {
                path: 'myorders/dashboard/payment',
                element: <BuyerRoute><Payment></Payment></BuyerRoute>,
                
            },

    
        ]
    },
    

])
export default router;
