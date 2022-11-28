import { createBrowserRouter} from 'react-router-dom'
import DashboardLayout from '../../Layout/DashboardLayout';
import Main from '../../Layout/Main/Main';
import Blogs from '../../Pages/Blogs/Blogs';
import MyOrders from '../../Pages/Dashboard/MyOrders/MyOrders';
import Category from '../../Pages/Home/Categories/Category';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import ProductCard from '../../Pages/Product/Product/ProductCard';
import Products from '../../Pages/Product/Product/Products';
import NotFoundPage from '../../Pages/Shared/NotFoundPage/NotFoundPage';
import BuyerSignUp from '../../Pages/SignUp/BuyerSignUp';
import SellerSignUp from '../../Pages/SignUp/SellerSignUp';
import SignUp from '../../Pages/SignUp/SignUp';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

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


        // {
        //    path: '/category/:id',
        //    element: <Category></Category>
        // },
         {
         path: '/category/:id',
         element: <Category></Category>,
         loader: ({params}) => fetch(`http://localhost:5001/category/${params.id}`)
     },
      {
         path: '/products/:id',
        element: <ProductCard></ProductCard> ,
         loader: ({params}) => fetch(`http://localhost:5001/products/${params.id}`)
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
                element: <MyOrders></MyOrders>
            }
    
        ]
    },
    

])
export default router;
