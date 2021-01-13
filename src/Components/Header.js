import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [showNav, handleShowNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShowNav(true);
      } else {
        handleShowNav(false);
      }
    });
    return () => {
      window.addEventListener("scroll", () => {});
    };
  }, []);
  return (
    <div className={`header ${showNav && "header__nav__black"}`}>
      <nav>
        <input type="checkbox" id="check" />
        <label for="check" className="header__checkbtn">
          <i className="fa fa-bars"></i>
        </label>
        <ul className="header__menu">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#work_done">Work done</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
