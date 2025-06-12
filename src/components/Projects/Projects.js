import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={leaf}
              isBlog={false}
              title="Anomaly Detection in Makerspaces"
              description="Created a machine learning pipeline to detect unsafe behavior in engineering makerspaces using audio data from power tools. Tested models on real-world data to aid lab safety."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="PyTuner"
              description="Built an open-source hyperparameter optimization tool with a custom GUI. Used Bayesian optimization and grid search to benchmark model tuning workflows."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="SkimLit"
              description="Reimplemented a model that classifies sentences in medical abstracts to assist researchers in literature triage. Used NLP techniques and fine-tuned BioBERT."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Vision Transformer (ViT) for CIFAR"
              description="Explored the application of Vision Transformers on the CIFAR-10 dataset. Compared performance with CNN baselines and visualized attention maps."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="FBLA Chapter Management Platform"
              description="Designed and developed a full-stack web platform to help FBLA chapters track points, attendance, and activity engagement."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Colonoscopy Segmentation"
              description="Built a deep learning model using U-Net variants to segment polyps in colonoscopy videos. Evaluated performance using mIoU and DICE metrics."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Emotion Assist BCI"
              description="Created a brain-computer interface using EEG data to detect user emotional states. Implemented a neurofeedback loop to regulate stress and anxiety."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Chest X-Ray Annotation Pipeline"
              description="Built an annotation tool and ML model to support chest X-ray labeling workflows. Integrated active learning to improve label efficiency."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Low-Cost Neurological Diagnosis"
              description="Engineered a portable EEG device with machine learning to classify neurological conditions. Filed a patent and presented findings at MIT and IEEE conference."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="PINNs for Biomedical Modeling"
              description="Applied physics-informed neural networks to simulate tissue dynamics and optimize microneedle geometry. Used differential equations and PyTorch."
              ghLink=""
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
