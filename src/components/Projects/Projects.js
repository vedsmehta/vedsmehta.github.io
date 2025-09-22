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
  // Project 
  const projects = [
  {
    imgPath: leaf,
    title: "Anomaly Detection in Makerspaces",
    description:
      "Developed a machine learning pipeline to automatically detect unsafe behaviors in engineering makerspaces using audio signals from power tools. The system was trained on recorded workshop sessions and identifies anomalous sound patterns that could indicate accidents or improper tool use, enabling real-time safety alerts [oai_citation:0‡neurologycongress.com](https://neurologycongress.com/speaker/vedant-mehta#:~:text=Vedant%20Mehta%20is%20a%20student,and%20has%20collaborated%20with%20institutions). This approach helps lab supervisors intervene promptly and improve overall lab safety.",
    links: [
      { label: "Paper", url: "#" },
      { label: "Demo", url: "#" }
    ],
    moreInfo: "AI-based audio monitoring for lab safety."
  },
  {
    imgPath: editor,
    title: "PyTuner",
    description:
      "Built an open-source hyperparameter optimization tool with a custom GUI to simplify model tuning. PyTuner supports both Bayesian optimization and grid search, allowing users to compare approaches side-by-side. It integrates with popular ML frameworks (e.g., scikit-learn, TensorFlow) and visualizes tuning results in real-time. This tool streamlines model experimentation by automating the search for optimal hyperparameters, making ML workflows more efficient.",
    links: [
      { label: "Docs", url: "#" }
    ],
    moreInfo: "GUI tool for automated ML hyperparameter tuning."
  },
  {
    imgPath: chatify,
    title: "SkimLit",
    description:
      "Reimplemented a natural language processing model that classifies sentences in medical research abstracts by their role (e.g., background, objective, methods, results, conclusion). Using techniques like sequence modeling and fine-tuning BioBERT, the model helps researchers quickly skim literature by identifying the purpose of each sentence [oai_citation:1‡ijrar.org](https://www.ijrar.org/papers/IJRAR1DUP049.pdf#:~:text=model%2C%20which%20leverages%20Bidirectional%20Long,essential%20components%20of%20scientific%20abstracts) [oai_citation:2‡ijrar.org](https://www.ijrar.org/papers/IJRAR1DUP049.pdf#:~:text=background%2C%20objective%2C%20method%2C%20result%2C%20and,This%20automated%20classification%20system%20aims). This aids in literature triage, allowing faster understanding of scientific papers and was inspired by the Neural Networks for Joint Sentence Classification approach in biomedical NLP.",
    links: [
      { label: "BioBERT", url: "#" }
    ],
    moreInfo: "NLP model for classifying academic abstract sentences."
  },
  {
    imgPath: emotion,
    title: "Vision Transformer (ViT) for CIFAR",
    description:
      "Explored the application of Vision Transformers on the CIFAR-10 image dataset. Implemented a ViT model and compared its performance against CNN baselines (like ResNet). With transfer learning, the ViT achieved over 90% accuracy on CIFAR-10, rivaling conventional CNNs [oai_citation:3‡github.com](https://github.com/kentaroy47/vision-transformers-cifar10#:~:text=kentaroy47%2Fvision,Log%20%3B%20resnet18%2C%2093). Additionally, attention maps from the ViT were visualized to show which parts of an image the model focuses on, providing insights into the model’s decision-making and interpretability.",
    links: [
      { label: "ViT Paper", url: "#" }
    ],
    moreInfo: "Using transformers for image classification on CIFAR-10."
  },
  {
    imgPath: suicide,
    title: "FBLA Chapter Management Platform",
    description:
      "Designed and developed a full-stack web platform to help FBLA (Future Business Leaders of America) chapters track member points, meeting attendance, and event participation. The platform provides a user-friendly dashboard for officers to manage records and automatically calculates points based on members’ involvement. It features role-based logins (officers and members), real-time updates of leaderboards, and downloadable reports. This project modernized the chapter’s record-keeping, saving hours of manual work each month and improving engagement through transparency of member contributions.",
    links: [
      { label: "Platform", url: "#" }
    ],
    moreInfo: "Web app for managing student club activities and points."
  },
  {
    imgPath: bitsOfCode,
    title: "Colonoscopy Segmentation",
    description:
      "Built a deep learning model using an EfficientNet-based U-Net to segment polyps in colonoscopy images and videos in real time. We trained the model on medical imaging datasets (e.g., Kvasir-SEG) and evaluated performance using mean Intersection-over-Union (mIoU) and DICE score metrics, achieving high accuracy in delineating polyp regions. The optimized U-Net variant balances speed and precision, making it feasible for assisting doctors during procedures. This work was published as a conference paper titled *“Towards Real-Time Polyp Segmentation During Colonoscopy Using an EfficientNet-Based U-Net Architecture”* at IEEE BIBE 2023 [oai_citation:4‡researchr.org](https://researchr.org/publication/bibe-2023#:~:text=%2A%20Towards%20Real,Ivanovic%2C%20%20450%20Boban%20S).",
    links: [
      { label: "Paper", url: "https://doi.org/10.1109/BIBE60311.2023.00079" },
      { label: "U-Net", url: "#" }
    ],
    moreInfo: "Deep learning for real-time polyp detection in endoscopy."
  },
  {
    imgPath: leaf,
    title: "Emotion Assist BCI",
    description:
      "Created an affordable EEG-based brain–computer interface to detect user emotional states and provide real-time neurofeedback for stress and anxiety regulation. The prototype headset measures brainwave signals and uses the real-time alpha-to-theta ratio as a trigger for calming feedback. It guides users through breathing exercises or auditory cues when stress is detected [oai_citation:5‡drstoxen.com](https://drstoxen.com/dr-james-stoxen-dc-fssemm-hon-has-been-invited-to-speak-at-the-neurology-brain-disorders-congress-in-london-united-kingdom-on-september-18/#:~:text=,teams%20on%20biosignal%20acquisition%20basics). In pilot tests, this closed-loop system reduced self-reported anxiety by ~25% in a group of teenagers [oai_citation:6‡drstoxen.com](https://drstoxen.com/dr-james-stoxen-dc-fssemm-hon-has-been-invited-to-speak-at-the-neurology-brain-disorders-congress-in-london-united-kingdom-on-september-18/#:~:text=2.%20His%20prototype%20uses%20real,in%20a%20school%20cohort). The project was presented at an international neurology conference, demonstrating the potential of accessible BCI technology for mental health support.",
    links: [
      { label: "Abstract", url: "https://neurologycongress.com/program/scientific-program/2025/facilitating-emotional-regulation-through-brain-computer-interfaces" },
      { label: "EEG Info", url: "#" }
    ],
    moreInfo: "EEG-based neurofeedback system for stress reduction."
  },
  {
    imgPath: editor,
    title: "Chest X-Ray Annotation Pipeline",
    description:
      "Developed an annotation tool and machine learning pipeline to assist in labeling and classifying chest X-ray images for multiple diseases. We integrated an NLP module (RadGraph) to parse radiology reports and automatically extract labels, which improved labeling efficiency for training data. Using a deep convolutional network, our system performs multi-label classification of conditions (e.g., pneumonia, pleural effusion, pneumothorax) on the CheXpert dataset. The model achieved an AUROC of 0.86 with an F1 score of 0.69 on test data [oai_citation:7‡papers.ssrn.com](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5051550#:~:text=model%20for%20multi,model%20improves%20its%20ability%20to). By combining automated text-based annotation with active learning, this pipeline accelerates the process of building accurate medical imaging models.",
    links: [
      { label: "Paper", url: "https://ssrn.com/abstract=5051550" },
      { label: "Tool", url: "#" }
    ],
    moreInfo: "Hybrid AI pipeline (NLP+Vision) for labeling and classifying X-rays."
  },
  {
    imgPath: chatify,
    title: "Low-Cost Neurological Diagnosis",
    description:
      "Engineered a portable EEG device equipped with machine learning to classify neurological conditions in real-world settings. The headset device uses dry electrodes to capture brain signals and a lightweight on-board classifier to detect patterns associated with conditions like epilepsy or attention disorders. Emphasis was placed on affordability and ease-of-use, making it viable for telemedicine or remote clinics. This project led to a patent-pending biomedical invention [oai_citation:8‡neurologycongress.com](https://neurologycongress.com/speaker/vedant-mehta#:~:text=classification,passionate%20about%20developing%20accessible%20technologies), and the findings were presented at MIT and an IEEE conference to showcase how accessible EEG technology can aid in early neurological disorder detection. The device highlights how low-cost hardware and AI can combine to improve healthcare accessibility.",
    links: [
      { label: "Patent", url: "#" }
    ],
    moreInfo: "Portable EEG device with AI for detecting neurological disorders."
  },
  {
    imgPath: suicide,
    title: "PINNs for Biomedical Modeling",
    description:
      "Applied Physics-Informed Neural Networks (PINNs) to simulate biological tissue dynamics and optimize the design of microneedles for drug delivery. By incorporating the governing differential equations of tissue response and fluid flow into a neural network’s loss function, the model can predict outcomes of various microneedle geometries under realistic physiological conditions. This approach provides a way to virtually test and refine microneedle designs much faster than physical experiments. Using PyTorch, we trained PINN models that accurately solved these biophysical equations, and our simulations guided the selection of an optimal needle geometry for efficient drug diffusion [oai_citation:9‡researchr.org](https://researchr.org/publication/bibe-2023#:~:text=%2A%20Optimization%20of%20Physics,461%20%20%5Bdoi). This project demonstrates the power of combining physics and ML to inform biomedical engineering designs.",
    links: [
      { label: "PyTorch", url: "#" }
    ],
    moreInfo: "Physics-informed neural nets for simulating and optimizing biomedical devices."
  },
  {
    imgPath: leaf,
    title: "SilicoSensor (Genes in Space Finalist)",
    description:
      "Co-developed a DNA-based experiment to detect airborne silicone contaminants aboard spacecraft using a fluorescent biosensor system. Our proposal, **SilicoSensor**, involves engineering a biological sensor that emits fluorescence in response to silicone particles in the cabin air, allowing real-time monitoring of air quality on the ISS. The presence of silicone would quench the fluorescence, providing a quantifiable readout of contamination. This project was selected as one of five national finalists in the 2024 Genes in Space competition [oai_citation:10‡minipcr.com](https://www.minipcr.com/genes-in-space-competition-selects-2024-finalist-student-teams/#:~:text=Sean%20Lee%20,High%20School%20in%20Suwanee%2C%20GA). As finalists, we presented the idea at the ISS Research & Development Conference in Boston, demonstrating how synthetic biology can address a real space exploration challenge.",
    links: [
      { label: "Press Release", url: "https://www.genesinspace.org/news/press/announcing-the-2024-genes-in-space-finalists/" },
      { label: "Video", url: "https://www.youtube.com/watch?v=PXUl7mrx2G4" }
    ],
    moreInfo: "Fluorescent biosensor experiment (Genes in Space 2024 Finalist)."
  },
  {
    imgPath: leaf,
    title: "Transgenic Biopesticide (BioTreks Publication)",
    description:
      "Researched and proposed a genetic engineering solution to protect crops by creating transgenic broccoli (Brassica) plants that express multiple insecticidal genes. In this project, our high school iGEM team designed broccoli plants to carry *Bt* crystalline toxin genes (e.g., **cry1Ac**) so that the plants themselves produce biopesticides to ward off pests like the diamondback moth. The goal was to reduce crop losses by integrating these poisonous genes into the plant genome, providing continuous protection without external pesticides [oai_citation:11‡biotreks.org](https://biotreks.org/category/articles/page/5/#:~:text=Producing%20a%20biopesticide%20consisting%20of,commercial%20crops%20to%20diamondback%20moths). We published our design in the peer-reviewed BioTreks 2023 synthetic biology journal [oai_citation:12‡biotreks.org](https://biotreks.org/2023/10/page/2/#:~:text=Producing%20a%20biopesticide%20consisting%20of,commercial%20crops%20to%20diamondback%20moths), showcasing a novel approach to improving agricultural yield through biotechnology.",
    links: [
      { label: "Paper", url: "https://biotreks.org/wp-content/uploads/2023/10/e202317.pdf" }
    ],
    moreInfo: "High school iGEM project: genetically engineered pest-resistant broccoli."
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
