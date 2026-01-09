---
layout: page
title: Understanding Handwritten Exam Answers from Scanned Documents
description: Segmenting and associating handwritten student answers with questions in scanned exam booklets using vision-language models and spatial reasoning.
img: assets/img/project1_cover.jpg
importance: 1
category: work
related_publications: true
---

## Overview

Handwritten document understanding remains a challenging problem, especially in educational settings where structure is weak and variability is high.  
In this project, I explored how to reliably **segment and label student answers** from scanned, multi-page handwritten exam booklets.

The core challenge was:

> Given a PDF containing multiple pages of handwritten answers—where students may answer questions in arbitrary order, continue answers across pages, and write without strict spatial structure—how can we accurately isolate each answer and associate it with the correct question?

---

## Problem Setting

I worked under a few realistic assumptions commonly seen in exam settings:

- Students write **question numbers** along the left margin
- Minimal spacing is left between consecutive answers
- **Student metadata** (name, roll number) appears on the first page
- Sub-questions (e.g., *1.a*, *1.b*) are common

In practice, however, handwriting quality varies significantly, answers may spill across pages, and marginal or off-boundary writing is frequent—making segmentation difficult.

Traditional OCR and layout-based approaches struggle due to:
- Noisy handwriting
- Inconsistent spacing
- Weak or missing visual boundaries

---

## Initial Attempts and Limitations

The first approach relied on a **layout detection model combined with OCR**. The pipeline attempted to:

- Detect question numbers, answer blocks, and student metadata as regions
- Use heuristics to map answers to questions

This approach failed in multiple ways:

- OCR struggled to reliably recognize handwritten question numbers
- Answers spanning multiple pages broke one-to-one mappings
- Irregular spacing caused layout models to fragment answers
- Sub-questions confused both detection and mapping logic

These failures highlighted a key limitation:  
**purely spatial reasoning is brittle for real handwritten data**.

---

## Incorporating Vision-Language Models

In the second iteration, I introduced a **vision-language model** to extract higher-level semantic information directly from page images.

This significantly improved:

- Student metadata extraction
- Question number ordering
- Detection of answer continuations across pages

However, segmentation still depended on layout detection, which remained unreliable—especially for sub-questions and loosely structured answers.

---

## Final Approach: Vision + Spatial Reasoning

The final system replaced traditional layout detection with an **image-understanding model capable of visual grounding**.

### Key idea:
1. Use a vision-language model to infer the **list and order of question numbers**
2. Prompt the image model to **localize those specific question numbers** on the page
3. Use the coordinates of successive question numbers to dynamically construct bounding boxes enclosing each answer

This semantic–spatial collaboration proved far more robust:

- Answers spanning multiple pages were handled naturally
- Sub-questions were grouped correctly
- Marginal and off-boundary writing was captured
- No rigid layout assumptions were required

The only persistent failure cases involved **extremely ambiguous handwriting** (e.g., ‘3’ written like ‘8’), which are documented as known limitations.

---

## Outcome and Takeaways

This project reinforced the importance of **combining semantic understanding with spatial reasoning** for document analysis.

Rather than forcing handwritten data into predefined layouts, the system adapts to the structure inferred directly from content—leading to significantly improved robustness in real-world exam data.

---

## Code and Experiments

The full implementation, experiments, and analysis are available here:

👉 **[GitHub Repository Link]**


