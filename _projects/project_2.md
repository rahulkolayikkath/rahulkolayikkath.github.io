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

## Conclusion and Future Works

Language model-based embeddings have emerged as a promising approach for learning better representations from SMILES (Simplified Molecular-Input Line-Entry System) data in the field of language modeling. Our research has demonstrated that the quality of embeddings improves with access to larger and more diverse training datasets. Language model representations have outperformed traditional hand-crafted methods, highlighting the effectiveness of data-driven techniques. The tokenization approach is a fundamental aspect of any language model, and significant performance differences have been observed between character-level and chunk-level models. Naive attention mechanisms have proven to be suitable for simple vocabularies, while more advanced techniques like flash, sparse, or dilated attention typically work well for larger contexts in natural language processing tasks.
We have found that pre-training with minimal design and better vocabulary selection is optimal for simple languages. Developing code from scratch using Python and PyTorch has enabled full customization. By far we have built code base for language model pre- training based on masked language modeling. This code base can be trained on any number of sequences with multi-GPU setups. To further advance the field, we have collected 200 million sequences for training, and with sufficient GPU computing resources, they aim to train the largest chemical language model with state-of-the-art performance.
Future work in this area may involve extending the encoder-only model to an encoder- decoder model, similar to the BART (Bidirectional and Auto-Regressive Transformers) model, unlocking the potential for property-guided molecular generation. Additionally, we are exploring the development of models that can learn an informative and clustered latent space, as clustered spaces lead to controllable generation, which is a desirable outcome in molecular design and optimization.

{% include figure.liquid
   path="assets/img/projects/project2_2.png"
   title="High-level overview of the handwritten exam analysis pipeline"
   class="img-fluid rounded z-depth-1"
%}

## References

[1] polyBERT: a chemical language model to enable fully machine-driven ultrafast polymer informatics, [Publication](https://www.nature.com/articles/s41467-023-39868-6)
