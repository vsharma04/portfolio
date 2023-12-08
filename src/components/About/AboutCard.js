import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vishal Sharma </span>
            from <span className="purple"> Aligarh, UP</span>
            <br />
            <br />

            I am a recent computer science graduate and my education details are as follows --👇
            <br /><br />
            - <span className="purple">Bachelor of Technology (B.Tech) </span> in Computer Science and Engineering <br />
              SSLD Varshney Engineering College, Aligarh, UP<br />
              Graduated: June 2023 with CGPA 8.24<br />
              <br />

            - Higher Secondary <span className="purple">(Class 12th) </span><br />
              Three Dots Sewamarg Public School, Aligarh, UP<br />
              Completed: April 2018 with 90.2%<br />
              <br />

            - Secondary<span className="purple">(Class 10th) </span> <br />
              Three Dots Sewamarg Public School, Aligarh, UP<br />
              Completed: April 2016 with CGPA 10.0<br />
        
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Making CAD drawings
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Good things happens to those who hustle!"{" "}
          </p>
          <footer className="blockquote-footer">Vishal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
