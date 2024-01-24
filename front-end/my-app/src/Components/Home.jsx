// Home.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

// import NavBar from './NavBar.jsx';
import Slider from "./Slider.jsx"
import Stars from './Stars.jsx';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('http://localhost:8080/art/getall')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/art/delete/${id}`)
      .then(() => {
        fetchData();
      })
      .catch((err) => {
        console.error('Error deleting item:', err);
      });
  };

  const handleUpdate = (id, updatedData) => {
    console.log(updatedData);
    axios
      .put(`http://localhost:8080/art/update/${id}`, updatedData)
      .then(() => {
        fetchData();
      })
      .catch((err) => {
        console.error('Error updating item:', err);
      });
  };

  return (
    <div >
      <Slider/>
      <div className='cc'>

      <h1>Our Products</h1>
      <br />
      <br />
      <div className="c">
        {data.map((e, i) => (
          <div key={i}>
            <div className="receipe-content-area">
              
              <div className="container">
                <div className="header">
                  <img className="img" src={e.image} alt="" />
                </div>
                <div className="text">
                <h3>{e.name}</h3>
                  <h1 className="food"></h1>
                  
                  <div className='name'>
                    <p className="info">${e.price}</p> 
                <Stars/>
                </div>
                    <div> 
                  <div>
                    <button onClick={() => handleDelete(e.id)} className='test'>
                      delete
                    </button>
                    <button
                      onClick={() =>
                        handleUpdate(e.id, {
                          name: prompt('Enter new Name:', e.name),
                          description: prompt('Enter new Description:', e.description),
                          price: prompt('Enter new Price:', e.price),
                          image: prompt('Enter new Image URL:', e.image),
                        })
                      }
                      className='bb'
                      >
                       update
                    </button>
                        </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
  );
}

export default Home;
