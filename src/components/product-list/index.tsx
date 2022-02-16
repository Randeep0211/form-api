import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayList from '../display-list';

interface ProductListProps {
  name: string;
  quantity: string;
  price: string;
}

const ProductList = () => {
  const [data, setData] = React.useState<ProductListProps[]>([]);

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/product/read');

      setData(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {data.map((el, index) => (
        <DisplayList
          key={index}
          name={el.name}
          quantity={el.quantity}
          price={el.price}
        />
      ))}
    </div>
  );
};

export default ProductList;
