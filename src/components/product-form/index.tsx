import React, { useState } from 'react';
import styles from './form.module.css';
import axios from 'axios';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

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

  return (
    <div>
      <form className={styles.form} onSubmit={addData}>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProductForm;
