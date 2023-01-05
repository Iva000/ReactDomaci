import React from "react";
import "./navBar.css";
import { MenuOutlined } from "@ant-design/icons";

function navBar() {
  return (
    <>
      <input type="checkbox" id="active" />
      <label for="active" className="menu-btn">
        {/* <i className="fas fa-bars"></i> */}
        <MenuOutlined />
      </label>
      <div className="navBar">
        <ul className>
          <li>
            <a href="/">Pocetna strana</a>
          </li>
          <li>
            <a href="/tickets">Karte</a>
          </li>
          <li>
            <a href="/animals">Nase zivotinje</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default navBar;
