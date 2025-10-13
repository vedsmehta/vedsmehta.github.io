import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiPython,
  DiJavascript1,
  DiJava,
  DiReact,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiTensorflow,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiPlotly,
  SiScipy,
  SiR,
  SiStreamlit,
  SiOpencv,
  SiNextdotjs,
  SiFirebase,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Core Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>

      {/* Data Science & Research */}
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPlotly /> {/* Represents Matplotlib */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScipy /> {/* Represents MATLAB */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpencv />
      </Col>

      {/* Visualization / App Dev */}
      <Col xs={4} md={2} className="tech-icons">
        <SiStreamlit />
      </Col>

      {/* Statistical / Scientific */}
      <Col xs={4} md={2} className="tech-icons">
        <SiR />
      </Col>

      {/* Web / Infra */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;