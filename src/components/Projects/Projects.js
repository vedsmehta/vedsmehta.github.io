import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Modal, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  // Project data
  const projects = [
    {
      imgPath: leaf,
      title: "Anomaly Detection in Makerspaces",
      description:
        "Created a machine learning pipeline to detect unsafe behavior in engineering makerspaces using audio data from power tools. Tested models on real-world data to aid lab safety.",
      links: [
        { label: "Paper", url: "#" },
        { label: "Demo", url: "#" }
      ],
      moreInfo: "Audio-based ML for safety in makerspaces."
    },
    {
      imgPath: editor,
      title: "PyTuner",
      description:
        "Built an open-source hyperparameter optimization tool with a custom GUI. Used Bayesian optimization and grid search to benchmark model tuning workflows.",
      links: [
        { label: "Docs", url: "#" }
      ],
      moreInfo: "GUI for ML hyperparameter tuning."
    },
    {
      imgPath: chatify,
      title: "SkimLit",
      description:
        "Reimplemented a model that classifies sentences in medical abstracts to assist researchers in literature triage. Used NLP techniques and fine-tuned BioBERT.",
      links: [
        { label: "BioBERT", url: "#" }
      ],
      moreInfo: "NLP for medical abstracts."
    },
    {
      imgPath: emotion,
      title: "Vision Transformer (ViT) for CIFAR",
      description:
        "Explored the application of Vision Transformers on the CIFAR-10 dataset. Compared performance with CNN baselines and visualized attention maps.",
      links: [
        { label: "ViT Paper", url: "#" }
      ],
      moreInfo: "Vision Transformers for image classification."
    },
    {
      imgPath: suicide,
      title: "FBLA Chapter Management Platform",
      description:
        "Designed and developed a full-stack web platform to help FBLA chapters track points, attendance, and activity engagement.",
      links: [
        { label: "Platform", url: "#" }
      ],
      moreInfo: "Web platform for student organizations."
    },
    {
      imgPath: bitsOfCode,
      title: "Colonoscopy Segmentation",
      description:
        "Built a deep learning model using U-Net variants to segment polyps in colonoscopy videos. Evaluated performance using mIoU and DICE metrics.",
      links: [
        { label: "U-Net", url: "#" }
      ],
      moreInfo: "Medical image segmentation."
    },
    {
      imgPath: leaf,
      title: "Emotion Assist BCI",
      description:
        "Created a brain-computer interface using EEG data to detect user emotional states. Implemented a neurofeedback loop to regulate stress and anxiety.",
      links: [
        { label: "EEG Info", url: "#" }
      ],
      moreInfo: "EEG-based emotion detection."
    },
    {
      imgPath: editor,
      title: "Chest X-Ray Annotation Pipeline",
      description:
        "Built an annotation tool and ML model to support chest X-ray labeling workflows. Integrated active learning to improve label efficiency.",
      links: [
        { label: "Tool", url: "#" }
      ],
      moreInfo: "Annotation for medical images."
    },
    {
      imgPath: chatify,
      title: "Low-Cost Neurological Diagnosis",
      description:
        "Engineered a portable EEG device with machine learning to classify neurological conditions. Filed a patent and presented findings at MIT and IEEE conference.",
      links: [
        { label: "Patent", url: "#" }
      ],
      moreInfo: "Portable EEG for diagnosis."
    },
    {
      imgPath: suicide,
      title: "PINNs for Biomedical Modeling",
      description:
        "Applied physics-informed neural networks to simulate tissue dynamics and optimize microneedle geometry. Used differential equations and PyTorch.",
      links: [
        { label: "PyTorch", url: "#" }
      ],
      moreInfo: "Physics-informed neural networks."
    }
  ];

  const [showModal, setShowModal] = useState(false);
  const [modalProject, setModalProject] = useState(null);

  const handleCardClick = (project) => {
    setModalProject(project);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setModalProject(null);
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, idx) => (
            <Col md={4} className="project-card" key={idx}>
              <ProjectCard
                imgPath={project.imgPath}
                title={project.title}
                description={project.description}
                onClick={() => handleCardClick(project)}
              />
            </Col>
          ))}
        </Row>
        <Modal show={showModal} onHide={handleClose} centered>
          {modalProject && (
            <>
              <Modal.Header closeButton>
                <Modal.Title>{modalProject.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img src={modalProject.imgPath} alt={modalProject.title} style={{ width: "100%", marginBottom: "1rem" }} />
                <p>{modalProject.description}</p>
                <p><strong>More Info:</strong> {modalProject.moreInfo}</p>
                <div>
                  {modalProject.links.map((link, i) => (
                    <Button key={i} variant="primary" href={link.url} target="_blank" style={{ marginRight: "10px", marginBottom: "10px" }}>
                      {link.label}
                    </Button>
                  ))}
                </div>
              </Modal.Body>
            </>
          )}
        </Modal>
      </Container>
    </Container>
  );
}

export default Projects;
