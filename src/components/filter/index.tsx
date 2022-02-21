import axios from 'axios';
import React, { useState } from 'react';
import styles from './filter.module.css';

interface FilterProps {
  name: string;
  quantity: string;
  price: string;
}

const FilterForm = () => {
  const [value, setValue] = useState('');
  const [data, setData] = React.useState<FilterProps[]>([]);

  const filterData = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:4000/product/filter?price=${value}`
      );
      setData(response.data.response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={filterData}>
        <div>
          <label>Price:</label>
          <input
            type="number"
            placeholder="Search By Price"
            onChange={(e: any) => {
              setValue(e.target.value);
            }}
          ></input>
        </div>

        <br></br>

        <button type="submit">Search</button>
      </form>

      {data.map((el) => {
        return (
          <div className={styles.container}>
            <p> Name:{el.name}</p>
            <p>Quantity:{el.quantity}</p>
            <p>Price:{el.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FilterForm;
