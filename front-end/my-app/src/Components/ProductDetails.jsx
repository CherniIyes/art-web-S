import React, { useState } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Container from "./Container";
import ReactImageZoom from "react-image-zoom";
import ReactStars from "react-stars";
import axios from "axios";
import "./moredt.css";
import "./productDetails.css"
const ProductDetails = ({ One, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const prop = {
    width: 594,
    height: 600,
    zoomWidth: 600,
    img: `${One[0].image}`,
  };

  const handleOrderNow = () => {
    const orderDetails = {
      id: One[0].id,
      name: One[0].name,
      price: One[0].price,
      image: One[0].image,
      quantity: quantity,
    };

    // Call the addToCart function with orderDetails
    addToCart(orderDetails);

    // Reset quantity to 1 after adding to cart
    setQuantity(1);
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10) || 1;
    setQuantity(newQuantity);
  };

  return (
    <>
<div className="containerDetails">
<div className="ci">
<img className="imgDetails" src={One[0].image} alt="" />
</div>
<div className="cd">

<h3>  <span className="paint">Painting:</span>     {One[0].name} </h3>
<h3> <span className="paint"> Artist:</span> {One[0].artistname}</h3>
<h4> <span className="paint"> Price: </span>${One[0].price}</h4>
<button className='update-button' onClick={handleOrderNow}>Order Now</button>
</div>
</div>

    </>
  );
};

export default ProductDetails;
