import React, { useState } from "react";
import { useParams } from "react-router";
import "./CategoryDetail.css";

const CategoryDetail = () => {
  const { catId } = useParams();

  const [catDetail, setCatDetail] = useState({});

  // useEffect(() => {
  // const singleCategory =
  // },[])

  return (
    <div className="detail">
      <h1>category detail {catId}</h1>
    </div>
  );
};

export default CategoryDetail;
