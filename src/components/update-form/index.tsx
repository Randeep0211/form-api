import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, Location } from 'react-router-dom';
import { useParams } from 'react-router-dom';

interface FormProps {
  name: string;
  quantity: string;
  price: string;
  id: string;
}

const UpdateForm = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  // const data = useLocation();
  const data = useParams();

  // console.log(data);

  const id = data.id;

  const updateData = async () => {
    try {
      const update: React.FC<FormProps> = await axios.put(
        `http://localhost:4000/product/update/${id}`,
        {
          name,
          quantity,
          price,
        }
      );

      console.log(update);
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
