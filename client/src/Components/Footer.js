import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <section className="footer">
      <div>
        <h2>Our Links</h2>
        <NavLink to={"/signup"}>Create Account</NavLink>
        <br />
        <NavLink to={"/login"}>Learn More </NavLink>
        <br />
        <NavLink to={"/login"}>Login</NavLink>
        <br />
        <NavLink to={"/home"}>Back to The top</NavLink>
      </div>
      <div>
        <h2>Contact Us</h2>
        <ul>
          <li>Phone : +254705939483</li>
          <li>Email: YuMarket@gmail.com </li>
        </ul>
      </div>
      <div>
        <h2>Locate us</h2>
        <p>
          Maendeleo Plaza, 2nd Floor <br />
          Tom Mboya street .
        </p>
      </div>
    </section>
  );
}
export default Footer;
