---
layout: page
title: About
permalink: /about/
weight: 3
---

# **About Me**

Hi, I'm **{{ site.author.name }}**.
I'm at Stanford (Class of 2030), studying Math and Philosophy with a CS coterm, aimed at
technical AI safety research.

I co-founded **VIGIL Health**, where I built an ICU-grade EEG wearable headband end to
end — PCB, embedded firmware, BLE telemetry, on-device ML, and the dashboard clinicians
use — at $46 a unit against a $5,000 to $15,000 industry standard, now in clinical pilots
at Emory and Augusta University. I'm not running it day to day anymore, but it's real
track record: shipped hardware, real pilots, a real fundraise.

Before Stanford, I did independent research at the intersection of machine learning and
medicine: segmenting polyps during colonoscopy (published and presented at IEEE BIBE
2023), classifying chest radiographs for lung disease detection during a summer at
Stanford's AIMI Center, and using EEG data to help people with neurological disorders
manage their emotions.

These days most of my attention is on AI safety: coursework and research at Stanford, and
a public, dated record of judgment I keep on investing and safety-startup ideas — writing
down what I believe before I find out if I was right.

<div class="skills-row">
{% include about/skills.html title="Programming Skills" source=site.data.programming-skills %}
{% include about/skills.html title="Other Skills" source=site.data.other-skills %}
</div>

<h2 class="section-title">Timeline</h2>
{% include about/timeline.html %}