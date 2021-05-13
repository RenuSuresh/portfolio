import React from "react";
import "./About.css";

function About(props) {
  if (props.data) {
    var name = props.data.main.name;
    var profilepic = "images/" + props.data.main.image;
    var bio = props.data.main.bio;
    var street = props.data.main.address.street;
    var city = props.data.main.address.city;
    var state = props.data.main.address.state;
    var zip = props.data.main.address.zip;
    var email = props.data.main.email;
    var resumeDownload = props.data.main.resumedownload;
  }
  console.log(profilepic);
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Nordic Giant Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {street}
                  <br />
                  {city} {state}, {zip}
                </span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href={resumeDownload} className="button">
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
