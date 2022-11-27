import React from 'react';
import { useState } from 'react';
import AvailableProduct from './AvailableProduct/AvailableProduct';

const Products = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
      <div>
        <AvailableProduct
            selectedDate={selectedDate}
        ></AvailableProduct>

      </div>
    );

};
export default Products;