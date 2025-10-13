import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
  Hi! I'm <span className="blue">Vedant Mehta</span> from
  <span className="blue"> Atlanta, Georgia.</span>
  <br />
  I'm a high school researcher and innovator passionate about
  <span className="blue"> human-centered AI</span> and
  <span className="blue"> interdisciplinary science.</span>
  <br />
  I've worked on projects in <b>machine learning, biomedical imaging,</b> and
  <b>acoustic sensing</b>—building tools that make technology more accessible.
  <br />
  <br />
  Beyond research, here are a few things that keep me energized!
</p>
<ul>
  <li className="about-activity">
    <ImPointRight /> Playing Sports (Basketball, Pickleball)
  </li>
  <li className="about-activity">
    <ImPointRight /> Leading STEM Workshops through HYPE
  </li>
  <li className="about-activity">
    <ImPointRight /> Listening to Playlists while Building Projects
  </li>
</ul>

          <p style={{ color: "rgb(52 152 219)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Vedant</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
