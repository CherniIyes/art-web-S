import React, { useState } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Container from "./Container";
import ReactImageZoom from "react-image-zoom";
import ReactStars from "react-stars";
import axios from "axios";
import "./moredt.css";

const ProductDetails = ({ One,addToCart,}) => {
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
      quantity: quantity,
    };

    // Call the addToCart function with orderDetails
    addToCart(orderDetails);

    // Reset quantity to 1 after adding to cart
    setQuantity(1);
  };



  return (
    <>
      <Container class1="main-product-wrapper py-5 home-wrapper-2 ">
      <div className="row">
        <div className="col-6">
          <div className="main-product-image">
            <div>
              <ReactImageZoom {...prop} />
            </div>
          </div>
          <div className="other-product-images d-flex flex-wrap gap-15">
    
                        </div>
        </div>
        <div className="col-6">
          <div className="main-product-details">
            <div className="border-bottom">
              <h5 className="title">
              {One[0].name}
              </h5>
            </div>
            <div className="border-bottom py-3">
              
              <div className="d-flex align-items-center gap-10">
                <ReactStars
                  count={5}
                  size={24}
                  value={4}
                  edit={false}
                  activeColor="#ffd700"
                />
                <p className="mb-0 t-review">( 4 Reviews )</p>
              </div>

            </div>
            <br/>
            <div className="border-bottom">
            <h3 className="title">
           Description
            </h3>
          </div>
            
            <div className=" py-3">
              <div className="d-flex gap-10 align-items-center my-2">
            
                <h5 className="product-data">{One[0].artistname}</h5>
              </div>
             
              
              

             
              <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                <h3 className="product-heading">Quantity :</h3>
                <div className="">
                  <input
                    type="number"
                    name=""
                    min={1}
                    max={10}
                    className="form-control"
                    style={{ width: "70px" }}
                    id=""
                  />
                </div>
                <div className="d-flex align-items-center gap-30 ms-5">
                  <button
                    className="button border-0"
                   
                    type="button"
                    onClick={() => addToCart(One)}
                  >
                    Order now
                  </button>
                 
                </div>
              </div>
             
              
               
            
            </div>
          </div>
        </div>
      </div>
    </Container>
    
   
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered ">
        <div className="modal-content">
          <div className="modal-header py-0 border-0">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body py-0">
            <div className="d-flex align-items-center">
             
              <div className="d-flex flex-column flex-grow-1 w-50">
                <h6 className="mb-3">Apple Watch</h6>
                <p className="mb-1">Quantity: asgfd</p>
                <p className="mb-1">Color: asgfd</p>
                <p className="mb-1">Size: asgfd</p>
              </div>
            </div>
          </div>
          <div className="modal-footer border-0 py-0 justify-content-center gap-30">
            <button type="button" className="button" data-bs-dismiss="modal">
              View My Cart
            </button>
            <button type="button" className="button signup">
              Checkout
            </button>
          </div>
          <div className="d-flex justify-content-center py-3">
       
              Continue To Shopping
          </div>
        </div>
      </div>
    </div>

  </>
  );
};

export default ProductDetails