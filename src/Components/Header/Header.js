import React from "react";
import "./Header.css";

function Header({ data }) {
  if (data) {
    var project = data.main.project;
    var github = data.main.github;
    var name = data.main.name;
    var description = data.main.description;
  }
  return (
    <header id="home" className="background-image">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I'm {name}</h1>
          <h3>{description}.</h3>
          <hr />
          <ul className="social">
            <a href={project} className="button btn project-btn">
              <i className="fa fa-book"></i>Project
            </a>
            <a href={github} className="button btn github-btn">
              <i className="fa fa-github"></i>Github
            </a>
          </ul>
        </div>
      </div>
      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
}

export default Header;
