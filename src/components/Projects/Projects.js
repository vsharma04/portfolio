import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import skychat from "../../Assets/Projects/skychat.png";
import foodie from "../../Assets/Projects/foodie.png";
import player from "../../Assets/Projects/player.png";
import game from "../../Assets/Projects/game.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={skychat}
              isBlog={false}
              title="SkyChat"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Nodejs. Have features which allows user for realtime messaging, emoji sharing."
              ghLink="https://github.com/vsharma04/realtime-chat-application"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodie}
              isBlog={false}
              title="Foodie"
              description="A simple restaurant website template created using react.js and Tailwind Css which takes the content from hardcoded data and renders it using react.js."
              ghLink="https://github.com/vsharma04/food-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={player}
              isBlog={false}
              title="Music Player"
              description="A simple music player having play, pause, next and previous button. It shows name and genre of the song and also have a rotating image of the banner of the song. The list of songs are taken from the file containing the json data."
              ghLink="https://github.com/vsharma04/Music_player"
              demoLink="https://vsharma04.github.io/Music_player/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game}
              isBlog={false}
              title="Snake Mania"
              description="A simple snake simulation game that reflects score in real time and also shows the high score till reload the page. The snake becomes longer and longer as the game proceeds by engulfing the cubes. The cubes are generating with the help of random function in javascript. All the design and ui is creating with the help of plain HTML and CSS."
              ghLink="https://github.com/vsharma04/Snake_game"
              demoLink="https://vsharma04.github.io/Snake_game/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
