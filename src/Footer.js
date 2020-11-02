import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__addr">
        <h2 className="nav__title">Get to Know Us</h2>

        <ul className="nav__ul">
          <li>
            <a href="#">About Us</a>
          </li>

          <li>
            <a href="#">Careers</a>
          </li>

          <li>
            <a href="#">Press Releases</a>
          </li>
        </ul>
      </div>

      <ul className="footer__nav">
        <li className="nav__item">
          <h2 className="nav__title">Connect with Us</h2>

          <ul className="nav__ul">
            <li>
              <a href="#">Facebook</a>
            </li>

            <li>
              <a href="#">Twitter</a>
            </li>

            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </li>

        <li className="nav__item nav__item--extra">
          <h2 className="nav__title">Make Money with Us</h2>

          <ul className="nav__ul nav__ul--extra">
            <li>
              <a href="#">Sell on Amazon</a>
            </li>

            <li>
              <a href="#">Sell under Amazon Accelerator</a>
            </li>

            <li>
              <a href="#">Become an Affiliate</a>
            </li>

            <li>
              <a href="#">Fulfilment by Amazon</a>
            </li>

            <li>
              <a href="#">Advertise Your Products</a>
            </li>

            <li>
              <a href="#">Amazon Pay on Merchants</a>
            </li>
          </ul>
        </li>

        <li className="nav__item">
          <h2 className="nav__title">Let Us Help You</h2>

          <ul className="nav__ul">
            <li>
              <a href="#">Returns Centre</a>
            </li>

            <li>
              <a href="#">Terms of Use</a>
            </li>

            <li>
              <a href="#">Help</a>
            </li>
          </ul>
        </li>
      </ul>

      <div className="legal">
        <p>&copy; 2020 Amazon.com All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
