import { useEffect, useState } from "react";

const useFoodItems = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  return {
    foods,
  };
};

export default useFoodItems;
