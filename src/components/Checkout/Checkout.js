import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useFoodItems from "../../hooks/useFoodItems";
import Cart from "../Cart/Cart";
import "./Checkout.css";

const Checkout = () => {
  const { foods } = useFoodItems();
  const [cart] = useCart(foods);
  const [defaultValue, setDefaultValue] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="checkout">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h4 className="text-center">Delivery Detail</h4>
            <hr />
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
              <input
                defaultValue=""
                placeholder="Your name"
                {...register("name")}
              />
              <input
                defaultValue=""
                placeholder="Email..."
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="error">This field is required</span>
              )}

              <input defaultValue="" placeholder="city" {...register("city")} />

              <input
                defaultValue=""
                placeholder="address"
                {...register("address")}
              />
              <input
                defaultValue=""
                placeholder="phone"
                {...register("phone")}
              />
              <textarea
                rows={5}
                cols={53}
                className="mt-4"
                placeholder="Description (optional)"
              ></textarea>
              <input type="submit" />
            </form>
          </div>
          <div className="col-md-5">
            <h4 className="text-center">Check Cart</h4>
            <hr />
            <h4 className="ms-2">
              From <span className="fw-bold">Red Onion Restaurant</span>
            </h4>
            <h4 className="ms-2">Arriving in 20-30 min</h4>
            <h4 className="ms-2">107 Rd No 8</h4>
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
                      <div className="row d-flex align-items-center">
                        <div className="col-md-8">
                          <h5>{foodItem.title}</h5>
                          <p className="fw-bold fs-1 ms-4">${foodItem.price}</p>
                        </div>
                        <div className="col-md-4">
                          <i className="fas fa-minus fs-4 minus"></i>
                          <p
                            style={{
                              display: "inline-block",
                              fontSize: "20px",
                              margin: "0 .6rem",
                            }}
                          >
                            {defaultValue}
                          </p>
                          <i className="fas fa-plus fs-4 plus"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="price-cart my-5">
              <div className="container">
                <div className="row">
                  <Cart cart={cart}>
                    <Link to="/">
                      <button className="btn btn-danger mt-4">
                        Place Order
                      </button>
                    </Link>
                  </Cart>
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
