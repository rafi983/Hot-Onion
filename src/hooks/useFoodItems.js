import { useState } from "react";

const useFoodItems = () => {
  const [foods, setFoods] = useState([]);

  fetch(
    "https://raw.githubusercontent.com/rafi983/Red-Onion/main/public/foods.json"
  )
    .then((res) => res.json())
    .then((data) => setFoods(data));

  return {
    foods,
  };
};

export default useFoodItems;
