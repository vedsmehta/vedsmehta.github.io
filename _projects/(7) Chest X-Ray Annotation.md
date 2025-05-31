---
name: Multilabel Classification for Lung Disease Detection
tools: [Python, PyTorch, NumPy, Matplotlib, GradCAM, RadGraph]
image: https://i.imgur.com/j2zaXGo.png
description: A project I completed as part of a summer research experience at Stanford University's Artificial Intelligence for Medical Imaging Center in 2024.
---
# NLP-Vision Based Multi-Label Classification for Lung Disease

**Abstract:**
> Classifying chest radiographs is a time-consuming and challenging task, even for experienced radiologists. This provides an area for improvement due to the difficulty in precisely distinguishing between conditions such as pleural effusion, pneumothorax, and pneumonia. We propose a novel transfer learning model for multi-label lung disease classification, utilizing the CheXpert dataset with over 12,617 images of frontal radiographs being analyzed. By integrating RadGraph parsing for efficient annotation extraction, we enhance the model’s ability to accurately classify multiple lung diseases from complex medical images. The proposed model achieved an F1 score of 0.69 and an AUROC of 0.86, demonstrating its potential for clinical applications. Also explored was the use of Natural Language Processing (NLP) to parse report metadata and address uncertainties in disease classification. By comparing uncertain reports with more certain cases, the NLP-enhanced model improves its ability to conclusively classify conditions. This research highlights the connection between deep learning and NLP, underscoring their potential to enhance radiological diagnostics and aid in the efficient analysis of chest radiographs.

We also explored model interpretability, through the use of Gradient Class Activation Maps, or GradCAM. GradCam makes “visual explanations" for decisions from a large class of CNN-based models, making them more transparent.

![grad](https://i.imgur.com/j2zaXGo.png)

**THIS PAGE IS IN THE PROCESS OF BEING UPDATED**