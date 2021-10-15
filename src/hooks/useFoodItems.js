import { useEffect, useState } from "react";

const useFoodItems = () => {
  const [foods, setFoods] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/rafi983/Red-Onion/main/public/fooditems.json"
    )
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/rafi983/Red-Onion/main/public/foodImages.json"
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setImages(data);
      });
  }, []);

  return {
    foods,
    images,
  };
};

export default useFoodItems;
