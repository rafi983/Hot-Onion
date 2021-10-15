import React from "react";
import useCart from "../../hooks/useCart";
import useFoodItems from "../../hooks/useFoodItems";
import Cart from "../Cart/Cart";
import "./Checkout.css";

const Checkout = () => {
  const { foods } = useFoodItems();
  const [cart, setCart] = useCart(foods);
  return (
    <div className="checkout">
      <div className="container">
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <h1>Check Cart</h1>
            <hr />
            <h4>
              From <span className="fw-bold">Red Onion Restaurant</span>
            </h4>
            <h4>Arriving in 20-30 min</h4>
            <h4>107 Rd No 8</h4>
            <div className="foodContainer">
              {cart.map((foodItem) => (
                <div className="container">
                  <div className="row py-2 rounded-3 single-item">
                    <div className="col-md-2">
                      <img
                        src={foodItem.image}
                        style={{ width: "80px" }}
                        alt=""
                      />
                    </div>
                    <div className="col-md-10">
                      <h5>{foodItem.title}</h5>
                      <p className="fw-bold fs-1 ms-4">${foodItem.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="price-cart my-5">
              <div className="container">
                <div className="row">
                  <Cart cart={cart} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
