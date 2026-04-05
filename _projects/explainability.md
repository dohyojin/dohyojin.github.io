---
layout: page
title: Explainability
description: Exploring methods for explaining factuality and source attribution of language model outputs
img: assets/img/publication_preview/highlighting.png
redirect: false
importance: 3
category: work
related_publications: false
---

<div class="text-center mb-3">
  <a href="{{ '/projects/' | relative_url }}" class="btn btn-primary btn-sm">
    ← Back to Projects
  </a>
</div>

## Introduction
Large language models (LLMs) can generate factually incorrect information that appears plausible, a phenomenon known as "hallucination". Hallucinations pose risks not only for companies that leverage LLMs, but also for end users. For example, Google’s stock value dropped after its AI-powered product generated factual errors during a public demonstration; Air Canada was sued due to false information given by its AI-powered chatbot; and a lawyer was reprimanded by judges for referencing hallucinated case law. 

Technical advancements have been made in algorithms that detect hallucinated content by assessing the factuality of the model’s responses and attributing sections of those responses to specific source documents. Presenting an AI-generated response with factuality estimates and source attribution allows users to easily recognize incorrect information, and helping them to cross-check verified sources and make better decisions. 

However, there is limited research on how to effectively communicate this information to
users in ways that will help them appropriately calibrate their trust
toward LLMs. 

## Objective
Our goal was to identify the most effective strategy for presenting the factuality estimates and source attribution of an LLM’s response to users in a way that helps them comprehend the accuracy of the model's response and calibrate their trust while aligning with their preferences.

## Team 
A team of user researchers, LLM researchers, and a cognitive scientist from IBM Research (US) collaborated. I was the lead user research and my role was to conduct end-to-end user research, including planning research protocols, designing surveys, recruiting participants, running statistical analysis, and writing up results.

## Method
I conducted two survey-based studies (**Study 1** & **Study 2**) and statistical analysis to systematically compare the impact of various design strategies for communicating factuality and source attribution. 

*****
## Study 1

In this study, we conducted two survey-based experiments with a total of 208 participants to systematically compare the effects of various design strategies for communicating factuality scores by assessing participants' ratings of trust, ease in validating response accuracy, and preference. Each participant saw and rated all design options in a randomized order.

- **Experiment 1 (Evaluative Study)**: We conducted a controlled scenario-based study to evaluate six design strategies for representing factuality scores and two design strategies for representing source attributions.
- **Experiment 2 (Replication Study)**: We conducted a conceptual replication study to investigate whether the Experiment 1 findings generalize to different scenarios (Medical, HR).

### Designs
**Baseline Design**
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/attribution0.jpg" caption="A User Prompt, an AI-Generated Response, and a Source" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

**AI-Generated Response Factuality Score Designs**

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/highlight_factuality.jpg" caption="The set of designs presented to each participant for displaying factuality scores on the model’s response, grouped by granularity (phrase, term)." class="img-fluid rounded z-depth-1" %}
    </div>
</div>

**Source Attribution Designs**
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/attribution1.jpg" caption="Reference Numbers" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/attribution2.jpg" caption="Highlighting" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

### Findings

I found consistent results showing that **highlighting every phrase** in the model’s response based on its factuality estimates was the most preferred strategy and led to high trust in the model. Participants also perceived the design as making it easier to validate the accuracy of the response compared to the baseline with no markup. 

Additionally, participants increased their trust ratings when relevant sections of the source material were **highlighted** or **responses were annotated with reference numbers** corresponding to those sources, compared to the baseline. To learn more, I invite you to read {% cite do2024facilitatinghumanllmcollaborationfactuality %} and {% cite do2025highlightphrasesenhancingllm %} .


******
## Study 2

Grice explains that cooperative human-human communication relies on adherence to the Maxim of Quality: speakers should not say what they believe to be false, and violations of this maxim can undermine trust. Inspired by this, I challenged the assumption that the original AI-generated answer, which contains content estimated to be less factual (i.e., low factuality content), must always be disclosed to the user. I conducted another survey-based experiment (N=148) in which participants answered questions after reading an AI-generated response that adopted one of the proposed designs.

### Designs

Therefore, I proposed and compared five designs for either presenting or hiding AI-generated content using factuality: 
1) Baseline: the original AI response is shown without any factuality assessments 
2) Transparent: low factuality content within the response is highlighted 
3) Attention: high factuality content within the response is highlighted 
4) Opaque: low factuality content is simply removed 
5) Ambiguity: low factuality content is replaced by vague statements 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/hide.jpg" caption="Five strategies for presenting or hiding AI-generated content according to the factuality estimates and a baseline." class="img-fluid rounded z-depth-1" %}
    </div>
</div>

### Findings
Findings showed that hiding content estimated to be less factual, either by simply removing it (**Opaque strategy**) or replacing it with vague statements (**Ambiguity strategy**) enhanced user trust and promoted appropriate reliance. Surprisingly, these strategies maintained perceived answer quality and transparency, comparable to the highlighting approaches or the no-markup baseline. To learn more, I invite you to read {% cite do2025hidehighlightunderstandingimpact %}.

******
## Deliverables

### Product Impact
Our findings influenced the design of IBM's [Watsonx.Governance](https://www.ibm.com/products/watsonx-governance).

### Publications
We presented our work at [the Trust and Reliance in Evolving Human-AI Workflows (TREW) Workshop](https://chi-trew.github.io/#/) at CHI 2024 {% cite do2024facilitatinghumanllmcollaborationfactuality %}, and [the AAAI/ACM Conference on AI, Ethics, and Society (AIES)](https://www.aies-conference.com/2025/) {% cite do2025highlightphrasesenhancingllm %}, {% cite do2025hidehighlightunderstandingimpact %}.

<div class="text-center mb-3">
  <a href="{{ '/projects/' | relative_url }}" class="btn btn-primary btn-sm">
    ← Back to Projects
  </a>
</div>
