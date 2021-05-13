import React from "react";
import "./Resume.css";

function Resume(props) {
  if (props.data) {
    var education = props.data.resume.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
    var work = props.data.resume.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>
            {work.description.map((desc) => (
              <>
                <p style={{ fontWeight: 600 }}>{desc.client}</p>
                <ul>
                  {desc.description.map((role) => (
                    <li className="list-type">{role}</li>
                  ))}
                  <li className="techstack-list">
                    <p className="techstack">Tech Stack:</p>
                    {desc.techStack.map((tech) => (
                      <>
                        <span>{tech},&nbsp; </span>
                      </>
                    ))}
                  </li>
                </ul>
              </>
            ))}
          </p>
        </div>
      );
    });

    var skills = props.data.resume.skills.map((skills) => {
      var className = "bar-expand " + skills.name.toLowerCase();
      return (
        <li key={skills.name}>
          <span
            style={{ width: skills.level, backgroundColor: "#2356a3" }}
            className={className}
          ></span>
          <em>{skills.name}</em>
        </li>
      );
    });
  }
  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{work}</div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="bars">
            <ul className="skills">{skills}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
