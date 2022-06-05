import "./Footer.css";
import thepeer from "../images/thepeer.png";
import flutter from "../images/flutter.png";
import talentql from "../images/talentql.png";
import paga from "../images/paga.png";
import altschool from "../images/altschool.png";
import logo from "../images/techfin-logo.png";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";

const Footer = () => (
  <footer>
    <div className="footer-1">
      <p>Inspired by Global Brands</p>
      <div className="footer-images">
        <img src={thepeer} alt="" />
        <img src={paga} alt="" />
        <img src={altschool} alt="" />
        <img src={talentql} alt="" />
        <img src={flutter} alt="" />
      </div>
    </div>
    <div className="footer-2">
      <div className="f2-1">
        <img src={logo} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          blanditiis animi reiciendis, dolorum optio inventore quas nostrum
          tempora delectus.
        </p>
      </div>
      <div className="f2-2">
        <p>COMPANY</p>
        <h1>About</h1>
        <h1>FAQ</h1>
        <h1>Contact us</h1>
        <h1>Careers</h1>
        <h1>Privacy Policy</h1>
      </div>
      <div className="f2-3">
        <p>PRODUCTS</p>
        <h1>Features</h1>
        <h1>Connect</h1>
        <h1>Pricing</h1>
        <h1>Download</h1>
      </div>
      <div className="f2-4">
        <p>NEED HELP</p>
        <h1>+2349075072330</h1>

        <p>NEED SUPPORT</p>
        <h1>hi@contactus.com</h1>
      </div>
      <div className="f2-5">
        <div>
          <p>FOLLOW US</p>
          <div className="social-icons">
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
            <img src={twitter} alt="" />
          </div>
        </div>
        <div className="f2-5-email">
          <input type="email" name="email" placeholder="Your Email" />
          <button>Go</button>
        </div>
      </div>
    </div>
    <div className="footer-3">
      <h1>English / NGN</h1>
      <div>
        <h1>(c) 2022 TechFin. All Right Reserved. </h1>
        <h1>Design by Adebayo Moses (mosessmax).</h1>
        <h1>Code by Oluwaseyi F. (xoluwaseyi).</h1>
      </div>
    </div>
  </footer>
);

export default Footer;
