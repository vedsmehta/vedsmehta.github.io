---
layout: page
title: About
permalink: /about/
weight: 3
---

# **About Me**

Hi, I'm **{{ site.author.name }}**.
I'm at Stanford (Class of 2030), studying Math and Philosophy and planning a CS coterm,
aimed at technical AI safety research.

I co-founded **VIGIL Health**, a low-cost vital-signs headband for hospital general wards
that tracks heart rate, temperature, motion and breathing, at about $46 a unit against a
$5,000 to $15,000 bedside monitor. I was the technical co-founder: I built the working
prototype, its firmware and BLE link, and the dashboard, and drafted the schematic for the
custom board. We raised $500K after a June 2026 demo. I'm not running it day to day anymore.

Before Stanford, I did independent research at the intersection of machine learning and
medicine: segmenting polyps during colonoscopy (published and presented at IEEE BIBE
2023), classifying chest radiographs for lung disease detection during a summer at
Stanford's AIMI Center, and using EEG data to help people with neurological disorders
manage their emotions.

These days most of my attention is on AI safety: coursework and research at Stanford.

<div class="skills-row">
{% include about/skills.html title="Programming Skills" source=site.data.programming-skills %}
{% include about/skills.html title="Other Skills" source=site.data.other-skills %}
</div>

<h2 class="section-title">Timeline</h2>
{% include about/timeline.html %}