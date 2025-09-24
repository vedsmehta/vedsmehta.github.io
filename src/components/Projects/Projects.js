import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Modal, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import aimiStanford from "../../Assets/Projects/aimi_stanford.png";
import colonoscopyNet from "../../Assets/Projects/colonoscopy_net.png";
// import colonoscopyPreds from "../../Assets/Projects/colonoscopy_preds.png";
import emotionMse from "../../Assets/Projects/emotion_mse.png";
import fbla from "../../Assets/Projects/fbla.png";
import pinns from "../../Assets/Projects/pinns.png";
import pytuner from "../../Assets/Projects/pytuner.png";
import skimlitPubmet from "../../Assets/Projects/skimlit_pubmet.png";
import vit from "../../Assets/Projects/vit.png";

function Projects() {
  // Project 
  const projects = [
  {
    imgPath: pytuner,
    title: "PyTuner",
    description:
      "Built an open-source hyperparameter optimization tool with a custom GUI. Supports Bayesian optimization and grid search, with real-time visualization of results for faster ML experimentation.",
    links: [
      { label: "Docs", url: "#" }
    ],
    moreInfo: "GUI tool for automated ML hyperparameter tuning."
  },
  {
    imgPath: skimlitPubmet,
    title: "SkimLit",
    description:
      "Reimplemented an NLP model that classifies sentences in biomedical abstracts by role (background, methods, results, etc.). Fine-tuned BioBERT to help researchers quickly triage literature for relevance.",
    links: [
      { label: "BioBERT", url: "#" }
    ],
    moreInfo: "NLP model for classifying academic abstract sentences."
  },
  {
    imgPath: vit,
    title: "Vision Transformer (ViT) for CIFAR",
    description:
      "Explored Vision Transformers on the CIFAR-10 dataset. Compared against CNN baselines and visualized attention maps to study interpretability and model decision-making.",
    links: [
      { label: "ViT Paper", url: "#" }
    ],
    moreInfo: "Using transformers for image classification on CIFAR-10."
  },
  {
    imgPath: fbla,
    title: "FBLA Chapter Management Platform",
    description:
      "Designed a full-stack web platform to help FBLA chapters track points, attendance, and event participation. Automated record-keeping saved officers hours each month and boosted member engagement.",
    links: [
      { label: "Platform", url: "#" }
    ],
    moreInfo: "Web app for managing student club activities and points."
  },
  {
    imgPath: colonoscopyNet,
    title: "Colonoscopy Segmentation",
    description:
      "Built a deep learning model using an EfficientNet-based U-Net to segment polyps in colonoscopy videos. Achieved strong accuracy using DICE and mIoU metrics, with real-time feasibility. Published as a paper at IEEE BIBE 2023.",
    links: [
      { label: "Paper", url: "https://doi.org/10.1109/BIBE60311.2023.00079" }
    ],
    moreInfo: "Deep learning for real-time polyp detection in endoscopy."
  },
  {
    imgPath: emotionMse,
    title: "Emotion Assist BCI",
    description:
      "Created an EEG-based brain–computer interface to detect emotional states and provide real-time neurofeedback for stress reduction. Pilot tests showed ~25% improvement in self-reported anxiety.",
    links: [
      { label: "Abstract", url: "https://neurologycongress.com/program/scientific-program/2025/facilitating-emotional-regulation-through-brain-computer-interfaces" }
    ],
    moreInfo: "EEG-based neurofeedback system for stress reduction."
  },
  {
    imgPath: aimiStanford,
    title: "Chest X-Ray Annotation Pipeline",
    description:
      "Developed an annotation and ML pipeline for chest X-ray labeling workflows. Integrated NLP for report parsing and active learning to reduce manual effort while improving model accuracy.",
    links: [
      { label: "Paper", url: "https://ssrn.com/abstract=5051550" }
    ],
    moreInfo: "Hybrid AI pipeline (NLP+Vision) for medical image labeling."
  },
  {
    imgPath: fbla,
    title: "Low-Cost Neurological Diagnosis",
    description:
      "Engineered a portable EEG device with on-board ML to classify neurological conditions. Patent pending. Presented findings at MIT and IEEE, highlighting accessibility in neurological diagnostics.",
    links: [
      { label: "Patent", url: "#" }
    ],
    moreInfo: "Portable EEG device with AI for detecting neurological disorders."
  },
  {
    imgPath: pinns,
    title: "PINNs for Biomedical Modeling",
    description:
      "Applied Physics-Informed Neural Networks to simulate tissue dynamics and optimize microneedle geometry. Incorporated PDE constraints into the loss function to guide biomedical device design.",
    links: [
      { label: "PyTorch", url: "#" }
    ],
    moreInfo: "Physics-informed neural nets for biomedical simulations."
  },
  {
    imgPath: aimiStanford,
    title: "SilicoSensor (Genes in Space Finalist)",
    description:
      "National finalist in Genes in Space 2024. Designed a DNA-based fluorescent biosensor to detect silicone contaminants aboard spacecraft. Presented at the ISS Research & Development Conference in Boston.",
    links: [
      { label: "Announcement", url: "https://www.genesinspace.org/news/press/announcing-the-2024-genes-in-space-finalists/" }
    ],
    moreInfo: "One of five national finalist teams out of 675+ submissions."
  },
  {
    imgPath: aimiStanford,
    title: "Transgenic Biopesticide (BioTreks Publication)",
    description:
      "Published in BioTreks 2023. Proposed engineering broccoli plants to express Bt toxin genes as a built-in biopesticide, aiming to reduce crop losses from diamondback moth infestations.",
    links: [
      { label: "Paper", url: "https://biotreks.org/wp-content/uploads/2023/10/e202317.pdf" }
    ],
    moreInfo: "Synthetic biology solution for pest-resistant agriculture."
  },
  {
    imgPath: aimiStanford,
    title: "Genes in Space 2024 National Finalist",
    description:
      "Selected as one of five national finalists out of 675+ teams for a synthetic biology experiment proposal. Research could be conducted aboard the ISS.",
    links: [
      { label: "Announcement", url: "https://www.genesinspace.org/news/blog/genes-in-space-selects-winning-student-designed-experiment-bound-for-the-international-space-station/" }
    ],
    moreInfo: "Presented research at ISS Research & Development Conference in Boston."
  },
  {
    imgPath: aimiStanford,
    title: "National Student Leadership Council (SADD)",
    description:
      "Served on the National Student Leadership Council for Students Against Destructive Decisions. Advocated for youth health, safety, and decision-making at a national scale.",
    links: [
      { label: "Profile", url: "https://www.sadd.org/studentleaders/vedant-mehta" }
    ],
    moreInfo: "National youth leadership role promoting safe, healthy lifestyles."
  },
  {
    imgPath: aimiStanford,
    title: "International Conference Speaker (Neurology & Brain Disorders 2025)",
    description:
      "Invited speaker at the 12th International Neurology and Brain Disorders Conference. Presented work on EEG-based BCIs for emotional regulation to an international audience.",
    links: [
      { label: "Speaker Bio", url: "https://neurologycongress.com/speaker/vedant-mehta" }
    ],
    moreInfo: "Delivered a live technical talk in Orlando to global experts."
  },
  {
    imgPath: aimiStanford,
    title: "Patent-Pending Biomedical Invention",
    description:
      "Inventor of a biomedical device for neurological applications, currently under patent review. Integrates affordable hardware and AI for accessible diagnostics.",
    links: [
      { label: "Patent", url: "#" }
    ],
    moreInfo: "Patent filed based on EEG research and device design."
  },
  {
    imgPath: aimiStanford,
    title: "Media Recognition & Public Outreach",
    description:
      "Featured in Forsyth County News and other outlets for achievements in synthetic biology and research competitions. Recognized as a young scientist making national impact.",
    links: [
      { label: "Article", url: "https://www.forsythnews.com/news/education/reaching-stars-these-lambert-high-school-students-could-see-their-research-conducted-outer-space/" }
    ],
    moreInfo: "Highlighted for Genes in Space finalist recognition."
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
