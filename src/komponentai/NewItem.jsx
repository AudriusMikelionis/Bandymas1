import React, { useState } from 'react';
import axios from 'axios';

export const NewItem = () => {
  const [newProduct, setNewProduct] = useState({ firstName: '', lastName: '', age: 0 });

  const createNewProduct = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    // Corrected API endpoint for creating a new user
    axios.post('https://dummyjson.com/users/add', newProduct)
      .then((response) => {
        console.log('User created:', response.data);
        // Optionally, you can clear the form after submission
        setNewProduct({ firstName: '', lastName: '', age: 0 });
      })
      .catch((error) => {
        console.error('There was an error creating the user!', error);
      });
  };

  return (
    <>
      <h3>Create New User</h3>
      <div>
        <form onSubmit={handleSubmit} style={{ display: 'grid', rowGap: "10px" }}>
          <label>First Name:</label>
          <input name="firstName" value={newProduct.firstName} onChange={createNewProduct} />
          
          <label>Last Name:</label>
          <input name="lastName" value={newProduct.lastName} onChange={createNewProduct} />
          
          <label>Age:</label>
          <input name="age" type="number" value={newProduct.age} onChange={createNewProduct} />
          
          <button type="submit">Create</button>
        </form>
      </div>
    </>
  );
}