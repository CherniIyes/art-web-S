import React from 'react';
import './App.css';
import Home from './Components/Home.jsx';
import { useState } from 'react';
import './Components/nav.css';
import AddCard from './Components/AddCard.jsx';
import ProductDetails from './Components/ProductDetails.jsx';
import Cart from './Components/cart.jsx';
import axios from 'axios';
import picture from './pics/art.png';

function App() {
  const [view, setView] = useState('home');
  const [one, setOne] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const pay = () => {
    // Define your payment logic here
    console.log('Payment logic goes here');
  };

  const switchView = (option) => {
    setView(option);
  };

  const getOne = (id, D) => {
    axios
      .get(`http://localhost:8080/art/getone/${id}`)
      .then((res) => {
        setOne(res.data);
        switchView(D);
      });
  };

  return (
    <div className="App">
      <div className="stic">
        <div className="Header">
          <div className="logoo">
            <img className="logo11" src={picture} alt="Art Logo" />
          </div>
          <div>
            <div className="nav">
              <p onClick={() => switchView('home')} className="lii">
                Home
              </p>
              <p onClick={() => switchView('Cards')} className="lii">
                Cards
              </p>
              <p onClick={() => switchView('Cart')} className="lii">
                Cart
              </p>
            </div>
          </div>
        </div>
      </div>
      {view === 'home' && <Home fun={getOne} />}
      {view === 'Cards' && <AddCard />}
      {view === 'Details' && <ProductDetails One={one} addToCart={addToCart} />}
      {view === 'Cart' && <Cart cartItems={cartItems} removeFromCart={removeFromCart} pay={pay} clearCart={clearCart} />}
    </div>
  );
}

export default App;
