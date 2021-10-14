import React from "react";
import logo from "../../more-images/logo2.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer ">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="logo mt-5">
              <img src={logo} className="logo-img" alt="" />
            </div>
            <p className="copyright">Copyright © 2021 Red Onion</p>
          </div>

          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6">
                <ul className="links">
                  <li>About online food</li>
                  <li>Read our Blog</li>
                  <li>Sign up to deliver</li>
                  <li>Add your restaurant</li>
                </ul>
              </div>

              <div className="col-md-6">
                <ul className="links">
                  <li>Get help</li>
                  <li>Read FAQs</li>
                  <li>View all cities</li>
                  <li>Restaurant near me</li>
                </ul>
              </div>

              <div>
                <ul className="other-links">
                  <li>Privacy policy</li>
                  <li>Terms of use</li>
                  <li>Pricing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
