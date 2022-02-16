import React from 'react';
import styles from './card.module.css';

interface DisplayListProps {
  name: string;
  quantity: string;
  price: string;
}

const DisplayList: React.FC<DisplayListProps> = (props) => {
  return (
    <div>
      <div className={styles.container}>
        <div>
          <p>Name:{props.name}</p>
          <p>Quantity:{props.quantity}</p>
          <p>Price:{props.price}</p>
        </div>
      </div>
    </div>
  );
};

export default DisplayList;
