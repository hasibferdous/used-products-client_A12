
import { useEffect, useState } from 'react';
import BookingProduct from '../../BookingProduct/BookingProduct';
import ProductCard from '../ProductCard';


const AvailableProduct = () => {

    const [products, setProducts] = useState([]);
    const [bike, setBike] = useState(null);
    useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
    }, [])
    

return (
<section className='my-16'>


<div className='grid gap-6 grid-cols-1 md:gridcols-2 lg:grid-cols-3 mt-6'>
{
products.map(option => 
<ProductCard
key={option._id}
product={option}
setBike={setBike}
></ProductCard>)
}
</div>

{
    bike &&
<BookingProduct>
    bike={bike}
</BookingProduct>
}
</section>
);
};
export default AvailableProduct