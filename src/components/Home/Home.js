import React from "react";
import logo from "../../more-images/logo2.png";
import Categories from "../Categories/Categories";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="logo">
              <img src={logo} className="logo mt-2" alt="" />
            </div>
          </div>

          <div className="col-md-4">
            <div className="header-content d-flex mt-2">
              <h4 className="mt-2">Dashboard</h4>
              <button className="btn btn-regular ms-3 rounded-pill px-4">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="banner">
        <div className="banner-content">
          <h1 className="mb-4">Best food waiting for your belly</h1>

          <div className="search">
            <div className="input-group w-100">
              <input
                id="search-field"
                type="text"
                className="form-control rounded-pill p-3"
                placeholder="search your favourite food..."
              />
              <div className="input-group-append">
                <button
                  type="button"
                  className="btn btn-search rounded-pill px-5 py-3"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Categories />
    </>
  );
};

export default Home;
