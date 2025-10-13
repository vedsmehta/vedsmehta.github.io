import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
  LET ME <span className="blue">INTRODUCE</span> MYSELF
</h1>
<p className="home-about-body">
  I'm Vedant Mehta — a high school researcher, inventor, and entrepreneur.
  <br />
  <br />
  I work at the intersection of{" "}
  <b className="blue">AI</b>,{" "}
  <b className="blue">engineering</b>, and{" "}
  <b className="blue">human impact</b>. From building low-cost{" "}
  <b>EEG diagnostic systems</b> to creating{" "}
  <b>real-time acoustic sensing platforms</b>, I design technology that listens,
  learns, and helps people.
  <br />
  <br />
  I’m currently dual-enrolled at{" "}
  <b className="blue">Georgia Tech</b>, exploring{" "}
  <b className="blue">linear algebra, multivariable calculus, and combinatorics</b>{" "}
  to strengthen the math behind my research.
  <br />
  <br />
  You'll often find me{" "}
  <b>open-sourcing tools</b>,{" "}
  <b>teaching AI workshops through HYPE</b>, or{" "}
  <b>collaborating on projects that turn data into discovery</b>.
</p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="blue">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/vedsmehta"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/vedsmehta"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vedsmehta/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/vedsmehta"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
