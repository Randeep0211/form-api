import React from 'react';
import ProductForm from '../../components/product-form';
import UpdateForm from '../../components/update-form';

import { Routes, Route } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductForm />} />

        <Route path="/update/:id" element={<UpdateForm />} />
      </Routes>
    </div>
  );
};

export default Homepage;
