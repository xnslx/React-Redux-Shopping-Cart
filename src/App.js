import React from 'react';
import './App.css';
import Products from './Products/Products';
import CheckOut from './CheckOut/CheckOut';

function App() {
  return (
    <div className="App">
      <p>Redux Practice</p>
      <Products />
      <CheckOut />
    </div>
  );
}

export default App;
