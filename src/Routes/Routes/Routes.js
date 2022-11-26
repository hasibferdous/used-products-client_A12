import { createBrowserRouter} from 'react-router-dom'
import Main from '../../Layout/Main/Main';
import Blogs from '../../Pages/Blogs/Blogs';
import Category from '../../Pages/Home/Categories/Category';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Products from '../../Pages/Product/Product/Products';
import NotFoundPage from '../../Pages/Shared/NotFoundPage/NotFoundPage';

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
        element: <Products></Products> ,
         loader: ({params}) => fetch(`http://localhost:5001/products/${params.id}`)
     },

    
    ]}
])
export default router;
