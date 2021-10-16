import React, { useState } from "react";
import { useHistory } from "react-router";
import "./Category.css";

const Category = (props) => {
  const { image, title, desc, price, id, category } = props.food;
  const [isClicked, setIsClicked] = useState(false);
  const [disable, setDisable] = useState(false);

  const history = useHistory();

  const goToDetail = () => {
    history.push(`/${category}/${id}`);
  };

  return (
    <div className="col-md-4 text-center category">
      <div className="food-info" onClick={goToDetail}>
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
      </div>
      <button
        disabled={disable ? true : false}
        className="btn btn-info px-3"
        onClick={() => {
          setDisable(true);
          setIsClicked(true);
          props.handleAddToCart(props.food);
        }}
      >
        <i className="fas fa-shopping-cart"></i>
        {isClicked ? "Added" : "Add"}
      </button>
    </div>
  );
};

export default Category;
