---
layout: page
title: Language Modelling for Learning Robust Polymer Representations
description: A BERT based chemical language model to learn polymer representations(Master's Project)
img: assets/img/project2_cover.jpg
importance: 1
category: work
related_publications: false
---
## Abstract
Machine Learning frameworks have enabled substantial progress in the develop- ment of polymer property predictors. One of the vital stages in the Polymer Informat- ics pipeline is the conversion of the chemical molecules usually indexed as textual representations called "SMILES" into numerical features that can be easily interpreted by machine learning models. The accuracy of these models heavily depends on the quality of feature space representations. Scarcity of property data in the synthesized space of polymers makes data driven research in Polymer Informatics challenging and raises the need to focus on learning better representations. Our focus is on building systems that learn representations from millions of examples of SMILES opposed to handcrafting rules to generate it. We present a language modeling approach to learn more unique and robust representations, or embeddings to enable machine learning models to make better predictions. In this pipeline we generate machine- crafted embeddings from polymer SMILES treating it as a "chemical language" and our language model generating it as a "chemical linguist" which inherently learns from millions of polymer sequence data. We used encoder blocks from transformer coupled with masked language modelling to learn the SMILES language and extract features. SMILES is relatively a simple language but building special vocabulary improved the model performance compared to character level language model. The present approach outperforms all traditional hand crafted fingerprint schema in accuracy of property prediction and uniqueness in low dimensional projections making this a strong candidate for accelerating polymer research. Recent advances in language modeling and AI foundation models can be leveraged to improve model architectures.

{% include figure.liquid
   path="assets/img/projects/project2.png"
   title="High-level overview of the handwritten exam analysis pipeline"
   class="img-fluid rounded z-depth-1"
%}
## Report, Code and Experiments

The full deatils of implementation, experiments, and analysis are available here:

👉 **[Report](https://rahulkolayikkath.github.io/personal-website/CH19B022_Mtech_Thesis.pdf)**

👉 **[GitHub Repository Link](https://github.com/rahulkolayikkath/BERT-PolyLang)**

## References

[1] polyBERT: a chemical language model to enable fully machine-driven ultrafast polymer informatics, [Publication](https://www.nature.com/articles/s41467-023-39868-6)
