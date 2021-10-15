import React from "react";
import { useHistory } from "react-router";
import "./Category.css";

const Category = ({ food }) => {
  const { image, title, desc, price, id } = food;

  const history = useHistory();

  const goToDetail = () => {
    history.push(`/categorydetail/${id}`);
  };
  return (
    <div className="col-md-4 text-center category" onClick={goToDetail}>
      <div className="img">
        <img
          src={image}
          className="img-fluid"
          style={{ width: "200px" }}
          alt=""
        />
      </div>
      <h5 className="title">{title}</h5>
      <p className="fw-bold fs-1">${price}</p>
      <p>{desc}</p>
      <button className="btn btn-info px-3">
        <i className="fas fa-shopping-cart"></i>
        Add
      </button>
    </div>
  );
};

export default Category;
