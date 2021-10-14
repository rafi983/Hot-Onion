import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container mt-5">
      <h1>Why You Choose Us!</h1>
      <p className="w-50">
        We are one of the most renowned resytaurants in Europe.We provide
        different delicious foods to our customers.Here you will get different
        variety of tastes
      </p>
      <div className="sevices-container ">
        <div className="row">
          {services.map((service) => (
            <Service service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
