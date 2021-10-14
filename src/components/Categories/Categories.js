import React, { useEffect, useState } from "react";
import Category from "../Category/Category";

const Categories = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/rafi983/Hot-Onion/main/public/foods.json"
    )
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  return (
    <div className="container">
      <div className="row d-flex justiy-content-center">
        {foods.map((food) => (
          <Category food={food}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
