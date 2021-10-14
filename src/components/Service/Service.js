import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { image, title, desc, icon } = service;
  return (
    <div className="col-md-4 mt-4 service">
      <img src={image} className="img-fluid service-img" alt="" />
      <div className="title-img d-flex align-items-center my-3">
        <img src={icon} className="img-fluid" alt="" />
        <h4 className="mt-2 ms-2">{title}</h4>
      </div>
      <p>{desc}</p>
      <button className="btn btn-success">
        See More <i class="fas fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};

export default Service;
