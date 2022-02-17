import React from 'react';
import styles from './card.module.css';
import { useNavigate } from 'react-router-dom';
import UpdateForm from '../update-form';

interface DisplayListProps {
  name: string;
  quantity: string;
  price: string;
  id: string;
}

const DisplayList: React.FC<DisplayListProps> = (props) => {
  let navigate = useNavigate();
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
                navigate('/update', { state: { id: props.id } });
              }}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayList;
