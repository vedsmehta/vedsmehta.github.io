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
  const techs = [
    // Core Languages
    { icon: <DiPython />, name: "Python" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiJava />, name: "Java" },
    { icon: <CgCPlusPlus />, name: "C++" },

    // Data Science & Research
    { icon: <SiNumpy />, name: "NumPy" },
    { icon: <SiPandas />, name: "Pandas" },
    { icon: <SiPlotly />, name: "Matplotlib / Plotly" },
    { icon: <SiScikitlearn />, name: "Scikit-learn" },
    { icon: <SiPytorch />, name: "PyTorch" },
    { icon: <SiTensorflow />, name: "TensorFlow" },
    { icon: <SiScipy />, name: "SciPy / MATLAB" },
    { icon: <SiOpencv />, name: "OpenCV" },

    // Visualization / App Dev
    { icon: <SiStreamlit />, name: "Streamlit" },

    // Statistical / Scientific
    { icon: <SiR />, name: "R" },

    // Web / Infra
    { icon: <DiReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <DiGit />, name: "Git" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          {tech.icon}
          <p style={{ marginTop: "10px", fontSize: ".5em", fontWeight: 500 }}>
            {tech.name}
          </p>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;