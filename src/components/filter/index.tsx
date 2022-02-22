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
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
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

  const filterByLimit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:4000/product/filter/limit?price=${value}`
      );
      setData(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const filterByLeast = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:4000/product/filter/least?price=${value}`
      );
      setData(response.data.response);
    } catch (error) {
      console.log(error);
    }
  };

  const filterByRange = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:4000/product/filter/range?minPrice=${min}&maxPrice=${max}`
      );
      setData(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);

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

      <br></br>

      <form onSubmit={filterByLimit}>
        <div>
          <label>Minimum Price:</label>
          <input
            type="number"
            placeholder="Set minimum price"
            onChange={(e: any) => {
              setValue(e.target.value);
            }}
          ></input>
        </div>
        <br></br>
        <button type="submit">Search</button>
      </form>

      <br></br>
      <form onSubmit={filterByLeast}>
        <div>
          <label>Maximum Price:</label>
          <input
            type="number"
            placeholder="Set maximum price"
            onChange={(e: any) => {
              setValue(e.target.value);
            }}
          ></input>
        </div>

        <br></br>

        <button type="submit">Search</button>
      </form>
      <br></br>
      <form onSubmit={filterByRange}>
        <div>
          <input
            type="number"
            onChange={(e: any) => {
              setMin(e.target.value);
            }}
          ></input>
          <input
            type="number"
            onChange={(e: any) => {
              setMax(e.target.value);
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
