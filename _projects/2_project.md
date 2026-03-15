---
layout: page
title: LLM-as-a-Judge
description: Designing and building LLM-based evaluation tool for human-AI alignment
img: assets/img/evalassist1.png
redirect: # https://ibm.github.io/eval-assist/
importance: 2
---

Employing LLMs as evaluators, a paradigm known as “LLM-as-a-judge,” offers significant flexibility, allowing practitioners to customize evaluation criteria for more targeted and nuanced assessments. However, relying solely on LLM evaluators carries risks; evaluator models can hallucinate or provide incoherent explanations, underscoring the necessity of keeping humans in the loop. We developed and open-sourced [EvalAssist](https://ibm.github.io/eval-assist/), a system that incorporates a human-in-the-loop mechanism allowing users to evaluate sample outputs and iteratively refine their evaluation criteria before they scale up the evaluation. Through a series of experiments, we investigated practitioner usage patterns to drive system improvements. 