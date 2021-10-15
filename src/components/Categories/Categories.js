import React, { useState } from "react";
import FoodsItem from "../../FoodsItem";
import useCart from "../../hooks/useCart";
import { addToDb } from "../../utilities/fakedb";
import Category from "../Category/Category";
import "./Categories.css";

const Categories = () => {
  const [foods, setFoods] = useState(FoodsItem);
  const [cart, setCart] = useCart(foods);

  const filterCategory = (curCatg) => {
    const updatedCategory = FoodsItem.filter((fd) => {
      return fd.category === curCatg;
    });

    setFoods(updatedCategory);
  };

  const handleAddToCart = (food) => {
    const exists = cart.find((fd) => fd.title === food.title);
    let newCart = [];
    if (exists) {
      const rest = cart.filter((fd) => fd.title !== food.title);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, food];
    } else {
      food.quantity = 1;
      newCart = [...cart, food];
    }
    setCart(newCart);

    addToDb(food.title);
  };

  return (
    <>
      <div className="categories d-flex justify-content-center mt-5">
        <h5 onClick={() => setFoods(FoodsItem)}>All</h5>
        <h5 onClick={() => filterCategory("breakfast")}>Breakfast</h5>
        <h5 onClick={() => filterCategory("lunch")}>Lunch</h5>
        <h5 onClick={() => filterCategory("dinner")}>Dinner</h5>
      </div>

      <div className="container">
        <div className="row d-flex justiy-content-center">
          {foods.map((food) => (
            <Category
              key={food.image}
              handleAddToCart={handleAddToCart}
              food={food}
            ></Category>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
