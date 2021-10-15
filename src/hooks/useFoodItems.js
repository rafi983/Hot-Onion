import { useState } from "react";

const useFoodItems = () => {
  const [foods, setFoods] = useState([]);
  const [fetched, setFetched] = useState(false);

  fetch("https://raw.githubusercontent.com/rafi983/Foods-api/main/foods.json")
    .then((res) => res.json())
    .then((data) => {
      setFoods(data);
      setFetched(true);
    });

  return {
    foods,
    fetched,
  };
};

export default useFoodItems;
