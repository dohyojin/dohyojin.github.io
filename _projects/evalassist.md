---
layout: page
title: LLM-as-a-Judge
description: Designing and building LLM-based evaluation tool for human-AI alignment
img: assets/img/evalassist1.png
redirect: false
importance: 2
related_publications: false
---

## Introduction
Manual evaluation to assess large language model (LLM) outputs is expensive, slow, and does not scale. Employing LLMs as evaluators, a paradigm known as “LLM-as-a-judge,” offers significant flexibility, allowing practitioners to customize evaluation criteria for more targeted and nuanced assessments. However, relying solely on LLM evaluators carries risks; evaluator models can hallucinate or provide incoherent explanations, underscoring the necessity of keeping humans in the loop. 

## Objective
We aim to develop an LLM-as-a-Judge framework that incorporates a human-in-the-loop mechanism.

## Team 
A large team of user researchers, ML researchers, UI/UX designers, and engineers, from multiple countries worked together to build and improve the framework. As a user researcher, my role was to identify user needs, work with designers and engineers to design and develop features in the system, plan research protocols, recruit participants, conduct user studies, analyze quantitative and qualitative data, and write up results.
- Hyo Jin (Gina) Do (User Researcher, IBM Research, US)
- Zahra Ashktorab (User Researcher, IBM Research, US)
- Werner Geyer (User Researcher, IBM Research, US)
- Michael Desmond (ML Researcher, IBM Research, US)
- Qian Pan (UI/UX Designer, IBM Research, US)
- Martín Santillán Cooper (ML Engineer, IBM Research, US)
- Jasmina Gajcin (ML Researcher, IBM Research, Ireland)
- Erik Miehling (ML Researcher, IBM Research, Ireland)
- Elizabeth M. Daly (ML Researcher, IBM Research, Ireland)

******
## EvalAssist
We iteratively designed and developed [EvalAssist](https://ibm.github.io/eval-assist/), an LLM-as-a-Judge framework that allows practitioners to define their evaluation criteria (e.g., bias), select an LLM judge, evaluate sample test data, and iteratively refine their evaluation criteria if the evaluation results do not align with their expectated results. If they are aligned, practitioners scale up the evaluation using the final criteria they defined. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/evalassist.jpg" title="Interface screenshot" caption="Overview of the EvalAssist interface" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Watch our demo video [video](https://www.youtube.com/watch?v=bTf0N1GGslE) to learn more about EvalAssist!
<div class="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/bTf0N1GGslE"
          width="800" height="450"
          title="Presentation"
          allowfullscreen>
  </iframe>
</div>


******
# Feature Development

## User Problem
Effective sampling of representative, diverse, and challenging test cases is critical to enhancing the criteria refinement
process, as users can identify gaps and correct underlying flaws in their criteria by probing them against these
examples. In practice, we discovered that users are often constrained by a lack of high-quality data, particularly around decision
boundaries, which negatively affects the quality of the derived samples. 

## Our Solution
Generating synthetic data is a promising way to augment limited and imbalanced user data, while enabling the targeted
creation of underrepresented test cases.

## Formative Study
Through a formative study with five practitioners, we derived the following design principles for the synthetic data generation tool to support interactive LLM-as-a-judge evaluations.

1. **Flexible Prompting and Control**: Participants emphasized the need for control over the prompts used
to generate test data, including factors such as data quantity, length, and class distributions.
2. **Coverage of Borderline Cases**: Beyond clear-cut, well-formed examples, participants mentioned that
generating ambiguous, partially matching, and out-of-domain examples is important to identify their blind spots
and increase authenticity.
3. **Personas and Style Diversity**: Many expressed an interest in configuring personas (e.g., “angry customer”,
“scientific developer”) when generating synthetic data. 
4. **Transparency and Interpretability**: Participants needed to understand how the test data was generated
and labeled to ensure transparency, interpretability, and quality assurance. 
5. **Small-batch Generation and Iteration**: Participants wanted the ability to generate a small number of
test cases for initial review and iteration, and then scale up to full-batch generation once the quality criteria were
confirmed. 

## Synthetic Data Generation Features
Based on the design principles, we designed and developed synthetic data generation features within EvalAssist empowering AI practitioners to create tailored and challenging test cases with configurable domains, personas, lengths, and desired outcomes, including borderline cases.  The feature also supports AI-assisted inline editing of existing test cases, and enhances interpretability by revealing prompts and explanations.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/synthetic_generation.png" title="Interface screenshot" caption="Synthetic Data Generation Configuration" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/ai_manipulation.png" title="Interface screenshot" caption="AI-assisted Inline Editing" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## User Study
We conducted a mixed-method user study to test the user experience and effectiveness of the tool.
We recruited 24 practitioners involved in evaluating textual data. Each participant evaluated two versions of EvalAssist: 
- **Synthetic condition**: participants were asked to generate at least one test case using the synthetic data generation tool. 
- **Control condition**: the synthetic data generation tool was hidden. Instead, we provided a hyperlink that contains 10 real-world data examples from public annotated datasets.

## Findings
We found that most participants preferred the tool with the synthetic data generation features over the Control condition that users can manually author or source the data. Using the synthetic data features, they were able to generate significantly more, longer, and syntactically diverse test cases without sacrificing data quality or incurring additional task load. The downstream impacts of the generated data on the evaluation criteria and their alignment with users' expectations were as effective as human-crafted or real-world data. We invite you to read {% cite do2025generateevaluateiteratesynthetic %} to learn more about the study results. 

******
## Deliverables

1. We open-sourced [EvalAssist](https://ibm.github.io/eval-assist/), where you can find links to the web-based interface and the codebase with tutorials.
2. We presented our findings at multiple top-tier conferences, including {% cite 10.1145/3746059.3747740 %} and {% cite santillan-cooper-etal-2025-synthetic %}. 

<div class="text-center mb-3">
  <a href="{{ '/projects/' | relative_url }}" class="btn btn-primary btn-sm">
    ← Back to Projects
  </a>
</div>