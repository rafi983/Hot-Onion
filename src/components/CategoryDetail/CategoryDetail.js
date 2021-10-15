import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useFoodItems from "../../hooks/useFoodItems";
import "./CategoryDetail.css";

const CategoryDetail = () => {
  const { catId } = useParams();

  const { foods } = useFoodItems();

  const [catDetail, setCatDetail] = useState({});

  useEffect(() => {
    const singleCatDetail = foods?.find((food) => food.id === Number(catId));
    setCatDetail(singleCatDetail);
  }, [foods, catId]);

  return (
    <div className="detail">
      <div className="container">
        <div className="row d-flex mt-4 align-items-center">
          <div className="col-md-6">
            <h1>{catDetail?.title}</h1>
            <p className="w-75">{catDetail?.mealDetail}</p>
            <p className="fs-1 fw-bold">${catDetail?.price}</p>
            <button className="btn btn-danger px-4">
              <i className="fas fa-shopping-cart"></i>Add
            </button>
          </div>
          <div className="col-md-6">
            <img src={catDetail?.image} className="meal-img img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;
