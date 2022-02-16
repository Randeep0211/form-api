import React from 'react';
import ProductForm from '../../components/product-form';
import ProductList from '../../components/product-list';
import { Routes, Route } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <ProductForm />
      <ProductList />
    </div>
  );
};

export default Homepage;
