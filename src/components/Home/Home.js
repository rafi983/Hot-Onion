import React, { useEffect, useState } from "react";

const Home = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/rafi983/Hot-Onion/main/public/foods.json"
    )
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  return (
    <div>
      {foods.map((fd) => (
        <>
          <h1>{fd.title}</h1>
          <p>{fd.desc}</p>
          <p>{fd.price}</p>
          <img src={fd.image} alt="" />
        </>
      ))}
    </div>
  );
};

export default Home;
