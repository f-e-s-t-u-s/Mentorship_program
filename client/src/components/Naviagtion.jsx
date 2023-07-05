import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./components.css";
function Naviagtion() {
  const [show, setshow] = useState(false);
  // ! change the states on click

  const shownavigation = () => {
    if (show == false) {
      setshow(true);
    } else {
      setshow(false);
    }
  };
  console.log(show)
  const CustomLink = (props) => {
    return (
      <NavLink
        className={({ isActive }) => {
          return isActive ? "active" : "notActive";
        }}
        {...props}
      ></NavLink>
    );
  };
  return (
    <nav className={`naviagtion1 ${show && 'shownav'}`}>
      <div className="logo">
        <h1>mentor.io</h1>
      </div>
      <i className="fa-solid fa-bars" onClick={shownavigation}></i>
      <ul>
        <i className="fa-solid fa-xmark" onClick={shownavigation}></i>
        <li>
          {" "}
          <CustomLink to={"/"}>Home</CustomLink>
        </li>
        <li>
          {" "}
          <CustomLink to={"/dashboard"}>dashboard</CustomLink>
        </li>
        <li>
          {" "}
          <CustomLink to={"/dashboard"}>dashboard</CustomLink>
        </li>
        <li>
          {" "}
          <CustomLink to={"/dashboard"}>dashboard</CustomLink>
        </li>
      </ul>
    </nav>
  );
}

export default Naviagtion;
