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
        <ul className="header__menu">
          <li className="header__home">
            <a href="#home">Home</a>
          </li>
          <li className="header__about">
            <a href="#about">About</a>
          </li>
          <li className="header__about">
            <a href="#work_done">Work done</a>
          </li>
          <li className="header__contact">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
