import React, { useState } from 'react';
import axios from 'axios';
import classNames from 'classnames';
import '../Components/add.css';

function AddCard() {
  const [name, setName] = useState('');
  const [artistname, setartistname] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setimage] = useState('');

  const handleAdd = () => {
    const obj = {
      name: name,
      price: price,
      artistname: artistname,
      image: image,
    };

    axios
      .post('http://localhost:8080/art/add', obj)
      .then(() => {
        setName('');
        setartistname('');
        setPrice(0);
        setimage('');
      })
      .catch((error) => {
        if (error.response) {
          console.error(
            'Server responded with an error:',
            error.response.status,
            error.response.data
          );
        } else if (error.request) {
          console.error('No response received from the server');
        } else {
          console.error('Error setting up the request:', error.message);
        }
      });
  };

  return (
    <div className={classNames('containerr')}>
      <form className={classNames('form')}>
        <input
          placeholder="Name"
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
          className={classNames('input')}
        />
        <input
          placeholder="Price"
          value={price}
          type="text"
          onChange={(e) => setPrice(e.target.value)}
          className={classNames('input')}
        />
        <input
          placeholder="Image"
          value={image}
          type="text"
          onChange={(e) => setimage(e.target.value)}
          className={classNames('input')}
        />
        <input
          placeholder="Artist Name"
          value={artistname}
          type="text"
          onChange={(e) => setartistname(e.target.value)}
          className={classNames('input')}
        />

        <button onClick={handleAdd} className="update-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddCard;
