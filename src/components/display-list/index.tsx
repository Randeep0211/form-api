import React from 'react';
import styles from './card.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface DisplayListProps {
  name: string;
  quantity: string;
  price: string;
  id: string;
  onDelete: () => void;
}

const DisplayList: React.FC<DisplayListProps> = (props) => {
  let navigate = useNavigate();

  const deleteData = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/product/delete/${props.id}`
      );
      props.onDelete();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className={styles.container}>
        <div>
          <p>Name:{props.name}</p>
          <p>Quantity:{props.quantity}</p>
          <p>Price:{props.price}</p>
          <div>
            <button
              onClick={() => {
                navigate(`/update/${props.id}`);
              }}
            >
              Update
            </button>
            <button onClick={deleteData}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayList;
