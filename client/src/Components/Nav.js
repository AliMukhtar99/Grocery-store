import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <label className="logo">Yum Market!</label>
      <div className="nav-bar">
        <NavLink to="/signup">Get Started</NavLink>
        <NavLink to="/login">Sign In</NavLink>
      </div>
    </div>
  );
}
