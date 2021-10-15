import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;

  let totalQuantity = 0;
  let total = 0;
  for (const food of cart) {
    if (!food.quantity) {
      food.quantity = 1;
    }
    total = total + food.price * food.quantity;
    totalQuantity = totalQuantity + food.quantity;
  }

  const delivery = total > 0 ? 15 : 0;
  const tax = (total + delivery) * 0.1;
  const grandTotal = total + delivery + tax;
  return (
    <>
      <div className="col-md-7 subtotal">
        <span>subtotal - {cart.length} Items</span>
      </div>
      <div className="col-md-5">
        <span>${total}</span>
      </div>

      <div className="col-md-7 subtotal">
        <span>Tax</span>
      </div>
      <div className="col-md-5">
        <span>${tax.toFixed(2)}</span>
      </div>

      <div className="col-md-7 subtotal">
        <span>Delivery</span>
      </div>
      <div className="col-md-5">
        <span>${delivery}</span>
      </div>

      <div className="col-md-7 subtotal">
        <span>Grand-Total</span>
      </div>
      <div className="col-md-5">
        <span>${grandTotal.toFixed(2)}</span>
      </div>
    </>
  );
};

export default Cart;
