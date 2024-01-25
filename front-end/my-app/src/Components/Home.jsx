import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import { FaStar } from 'react-icons/fa';
import Slider from "./Slider.jsx"
import Stars from './Stars.jsx';
import ProductDetails from './ProductDetails.jsx';

function Home(props) {
  const [data, setData] = useState([]);
  const [updatedData, setUpdatedData] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const [popupData, setPopupData] = useState({
    id: null,
    name: '',
    price: '',
    artistname: '',
    image: '',
  });

  const S = (id) => {
    props.fun(id, "Details");
  };

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

  const handleUpdate = () => {
    console.log('Updating...');
    axios
      .put(`http://localhost:8080/art/update/${popupData.id}`, updatedData)
      .then(() => {
        console.log('Update successful!');
        fetchData();
        setUpdatedData({});
        setShowPopup(false);
      })
      .catch((err) => {
        console.error('Error updating item:', err);
      });
  };

  const handlePopupOpen = (id, name, price, artistname, image) => {
    setPopupData({
      id,
      name,
      price,
      artistname,
      image,
    });
    setShowPopup(true);
    setUpdatedData({
      name,
      price,
      artistname,
      image,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <Slider />
      <div className={`cc`}>
        <h1>Our Paintings</h1>
        <br />
        <br />
        <div className="c">
          {data.map((e, i) => (
            <div className='bord' key={i}>
              <img src={e.image} className='imgg' alt={e.name} onClick={() => S(e.id)} />

              <p className='par2'> {e.name} </p>
              <p className='par'> {e.artistname} </p>

              <Stars /> {/* Assuming Stars component is used for displaying stars. Adjust accordingly. */}

              <div className='flexx'>
                <p className='many'>${e.price}</p>
                <div className='button-container'>
                  <button className='delete-button' onClick={() => handleDelete(e.id)}>
                    Delete
                  </button>
                  <button className='update-button' onClick={() => handlePopupOpen(e.id, e.name, e.price, e.artistname, e.image)}>
                    Update
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Update Painting</h2>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={updatedData.name} onChange={handleInputChange} />
            <label htmlFor="price">Price:</label>
            <input type="text" id="price" name="price" value={updatedData.price} onChange={handleInputChange} />
            <label htmlFor="artistname">Artist Name:</label>
            <input type="text" id="artistname" name="artistname" value={updatedData.artistname} onChange={handleInputChange} />
            <label htmlFor="image">Image URL:</label>
            <input type="text" id="image" name="image" value={updatedData.image} onChange={handleInputChange} />
            <button onClick={handleUpdate}>Update</button>
            <button onClick={() => setShowPopup(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
