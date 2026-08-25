---
name: Optimizing Microneedle Geometry with Physics-Informed Machine Learning
tools: [Python, PyTorch, MATLAB, Matplotlib, Lightning]
image: https://i.imgur.com/GJTM8cZ.png
description: Under the mentorship of Postdoctoral Researcher Dr. Pankaj Rohilla, I carried out a project involving Physics-Informed Neural Networks
featured: true
order: 6
slug: pinn
---
# Physics-Informed Neural Networks

Under the mentorship of Postdoctoral Researcher Dr. Pankaj Rohilla, I worked on optimizing
microneedle geometry using physics-informed machine learning. Microneedles are used for
minimally-invasive drug delivery and diagnostics, and their performance depends heavily on
precise geometric parameters that are expensive to explore with traditional finite-element
simulation alone.

Physics-informed neural networks (PINNs) fold the governing physical equations directly
into the network's loss function, so the model is constrained to learn solutions that are
physically consistent rather than purely fitting simulation or experimental data. This
lets the network generalize across geometries with far fewer simulation runs than a
standard finite-element sweep would require, making it practical to search a much larger
design space for microneedle shape.

<!-- PLACEHOLDER: this section was expanded from the project's front-matter description
since the original body was empty — add your own detail on the specific loss formulation,
dataset/simulation setup, and results if you have them. -->

