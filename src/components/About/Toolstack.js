import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiJupyter,
  SiOverleaf,
  SiNotion,
  SiGithub,
  SiMacos,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  const tools = [
    { icon: <SiMacos />, name: "macOS" },
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiJupyter />, name: "Jupyter Notebook" },
    { icon: <SiOverleaf />, name: "Overleaf" },
    { icon: <SiNotion />, name: "Notion" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiVercel />, name: "Vercel" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          {tool.icon}
          <p style={{ marginTop: "10px", fontSize: "1.1em", fontWeight: 500 }}>
            {tool.name}
          </p>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;