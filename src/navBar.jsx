import React from "react";
import "./navBar.css";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function navBar() {
  return (
    <>
      <input type="checkbox" id="active" />
      <label htmlFor="active" className="menu-btn">
        {/* <i className="fas fa-bars"></i> */}
        <MenuOutlined />
      </label>
      <div className="navBar">
        <ul>
          <li>
            <Link to="/">Pocetna strana</Link>
          </li>
          <li>
            <Link to="/tickets">Karte</Link>
          </li>
          <li>
            <Link to="./animals">Nase zivotinje</Link>
          </li>
          <li>
            <Link to="./cart">Korpa</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default navBar;
