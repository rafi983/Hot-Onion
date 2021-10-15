import React from "react";
import { useParams } from "react-router";
import "./CategoryDetail.css";

const CategoryDetail = () => {
  const { id } = useParams();
  return (
    <div className="detail">
      <h1>category detail {id}</h1>
    </div>
  );
};

export default CategoryDetail;
