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
      <h1>category detail {catDetail?.title}</h1>
      <p>{catDetail?.desc}</p>
      <p>{catDetail?.price}</p>
    </div>
  );
};

export default CategoryDetail;
