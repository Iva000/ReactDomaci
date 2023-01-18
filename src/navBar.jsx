import React, { useState } from "react";
import "./navBar.css";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function NavBar() {
  const [setIsOpen] = useState(true);
  const toggle = () => setIsOpen(false);
  return (
    <>
      <input type="checkbox" id="active" />
      <label htmlFor="active" className="menu-btn">
        <MenuOutlined />
      </label>
      <div className="navBar">
        <ul>
          <li>
            <Link to="/" onClick={toggle}>
              Početna strana
            </Link>
          </li>
          <li>
            <Link to="/tickets" onClick={toggle}>
              Karte
            </Link>
          </li>
          <li>
            <Link to="./Search" onClick={toggle}>
              Naše životinje
            </Link>
          </li>
          <li>
            <Link to="./cart" onClick={toggle}>
              Korpa
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
