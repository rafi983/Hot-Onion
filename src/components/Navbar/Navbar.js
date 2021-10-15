import React from "react";
import { useHistory } from "react-router";
import logo from "../../more-images/logo2.png";
import "./Navbar.css";

const Navbar = () => {
  const history = useHistory();

  const GoToHome = () => {
    history.push("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="logo">
            <img src={logo} className="logo mt-2" onClick={GoToHome} alt="" />
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
  );
};

export default Navbar;
