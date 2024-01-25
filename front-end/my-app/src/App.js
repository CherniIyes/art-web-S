import './App.css';
import Home from './Components/Home.jsx';
import { useState } from 'react';
import './Components/nav.css';
import AddCard from './Components/AddCard.jsx';
import ProductDetails from './Components/ProductDetails.jsx';
import axios from 'axios';
import picture from './pics/art.png'; // Import the image with the correct path

function App() {
  const [view, setView] = useState('home');
  const [one, setOne] = useState([]);
  console.log(one);

  const switchView = (option) => {
    setView(option);
  };

  const getOne = (id, D) => {
    axios
      .get(`http://localhost:8080/art/getone/${id}`)
      .then((res) => {
        setOne(res.data);
        console.log(res.data);
        switchView(D);
      });
  };

  return (
    <div className="App">
      <div className='stic'>
        <div className='Header'>
          <div className='logoo'>
            {/* Use the imported image */}
            <img className='logo11' src={picture} alt="Art Logo" />
          </div>
          <div>
            <div className='nav'>
              <p onClick={() => switchView('home')} className='lii'>
                Home
              </p>
              <p onClick={() => switchView('Cards')} className='lii'>
                Cards
              </p>
            </div>
          </div>
        </div>
      </div>
      {view === 'home' && <Home fun={getOne} />}
      {view === 'Cards' && <AddCard />}
      {view === 'Details' && <ProductDetails One={one} />}
    </div>
  );
}

export default App;
