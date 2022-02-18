import React, { useState, useEffect } from 'react';
import styles from './form.module.css';
import axios from 'axios';
import DisplayList from '../display-list';

interface ProductListProps {
  name: string;
  quantity: string;
  price: string;
  _id: string;
}

const ProductForm = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [data, setData] = React.useState<ProductListProps[]>([]);

  console.log('dta', data);

  const addData = async (e: any) => {
    e.preventDefault();
    try {
      const data = await axios.post('http://localhost:4000/product', {
        name,
        quantity,
        price,
      });

      setName('');
      setQuantity('');
      setPrice('');
    } catch (error) {
      console.log(error);
    }
  };
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
      <form className={styles.form}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>
        <br></br>

        <div>
          <label>Quantity:</label>
          <input
            type="number"
            placeholder=" Enter quantity"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          ></input>
        </div>
        <br></br>
        <div>
          <label>Price:</label>
          <input
            type="number"
            placeholder="Enter price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          ></input>
        </div>

        <br></br>
        <button type="submit" onClick={addData}>
          Submit
        </button>
      </form>

      <div>
        {data.map((el, index) => (
          <DisplayList
            key={index}
            name={el.name}
            quantity={el.quantity}
            price={el.price}
            id={el._id}
            onDelete={getData}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductForm;
