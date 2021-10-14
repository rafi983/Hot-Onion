import React, { useState } from "react";
import FoodsItem from "../../FoodsItem";
import Category from "../Category/Category";

const Categories = () => {
  const [foods, setFoods] = useState(FoodsItem);

  const filterCategory = (curCatg) => {
    const updatedCategory = FoodsItem.filter((fd) => {
      return fd.category === curCatg;
    });

    setFoods(updatedCategory);
  };

  return (
    <>
      <div className="categories d-flex justify-content-center mt-5">
        <h5 onClick={() => setFoods(FoodsItem)}>All</h5>
        <h5 className="ms-4" onClick={() => filterCategory("breakfast")}>
          Breakfast
        </h5>
        <h5 className="ms-4" onClick={() => filterCategory("lunch")}>
          Lunch
        </h5>
        <h5 className="ms-4" onClick={() => filterCategory("dinner")}>
          Dinner
        </h5>
      </div>
      <div className="container">
        <div className="row d-flex justiy-content-center">
          {foods.map((food) => (
            <Category key={food.image} food={food}></Category>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
