import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, Location } from 'react-router-dom';
import { kStringMaxLength } from 'buffer';
import { stringify } from 'querystring';

interface FormProps {
  name: string;
  quantity: string;
  price: string;
}

const UpdateForm = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const data: Location = useLocation();

  // console.log(data.state.id);

  const id = '620cacbc6275c9d9b564fe6a';

  const updateData = async (e: any) => {
    // e.preventDefault();
    try {
      const update = await axios.put(
        `http://localhost:4000/product/update/${id}`,
        {
          name,
          quantity,
          price,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={updateData}>
        <div>
          <label>Edit Name:</label>
          <input
            type="text"
            placeholder="Change Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>
        <br />
        <div>
          <label>Edit Quantity:</label>
          <input
            type="text"
            placeholder="Change Quantity"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          ></input>
        </div>
        <br />

        <div>
          <label>Edit Price:</label>
          <input
            type="text"
            placeholder="Change Price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          ></input>
        </div>
        <br />

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default UpdateForm;
