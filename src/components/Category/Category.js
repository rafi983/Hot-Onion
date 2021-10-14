import React from "react";

const Category = ({ food }) => {
  const { image, title, desc } = food;
  return (
    <div className="col-md-4">
      <img src={image} className="img-fluid" alt="" />
      <h1>{title}</h1>
    </div>
  );
};

export default Category;
