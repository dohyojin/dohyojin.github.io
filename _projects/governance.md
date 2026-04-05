---
layout: page
title: AI Governance
description: Understanding Industry Practitioners' Experiences in Generative AI Governance
img: assets/img/publication_preview/governance.png
importance: 1
category: work
related_publications: false
---


## Introduction
Generative AI offers impressive capabilities but also poses unique challenges, such as hallucinations. Researchers and regulators have proposed various tools, policies, and frameworks to address these issues. However, there is still a gap in understanding the real-world needs and challenges of AI practitioners when it comes to operationalizing governance.

## Objective
We aim to engage AI practitioners in the conversations to inform the development of effective and practical governance guidelines and tools.

## Team 
A team of user researchers and UI/UX designers from multiple countries (India, US, Germany) collaborated. My role was to conduct end-to-end user research, including planning research protocols, recruiting participants, conducting interviews, analyzing qualitative data, and writing up results.
- Hyo Jin (Gina) Do (User Researcher, IBM Research, US)
- Swati Babbar (User Researcher, IBM India Software Labs, India)
- Wenjing Li (UI/UX Designer, IBM, US)
- Laura Walks (UI/UX Designer, IBM, US)
- Shayenna Misko (User Researcher, IBM Software, Germany)

******
## Method
We conducted semi-structured interviews with 10 industry practitioners involved in AI governance, recruited via User Interviews and Respondent.

The interview consisted of two phases:
1. Experiences with generative AI governance (e.g., goals, challenges, needs)
2. User experience of our governance tool design probe (e.g., feedback, questions)

## Design Probe
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/governance_design.jpg" title="Tool screenshot" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
Link to the interactive prototype is [here](https://www.figma.com/proto/UrbRdph7SLUHYOtpMIBV5m/User-Research-Tasks-for-Faithfulness-Scores?node-id=61-15131&starting-point-node-id=61%3A15131&t=rfCw18DOrXuL4xSv-1).

******
## Findings

### Goals
- Improve AI models’ quality by evaluating/monitoring outputs through various performance metrics
- Assessing ethical and societal impact of the AI outputs
- Ensuring data privacy and security
- Managing compliance

### Challenges
- Evaluating and improving AI models to achieve their target performance
- Interpreting regulations in specific contexts 
- Data protection in open servers and validation for security
- Technical challenges (e.g., integration, automation)

### Needs
Participants requested the following informational needs:
- Evaluation metrics
- User data and use cases
- AI models and their inner workings (e.g., parameters, weights, and architecture)

However, their needs are not fully addressed by current AI governance solutions:
- Limited evaluations and metrics, particularly when customized or rare metrics are used
- Lacking explainability features

### Design Probe Feedback
Overall, participants appreciated the way information was displayed and organized, particularly on dashboards and visualizations. Key suggestions for improvement included:
- Recommendations for resolving violations
- Support in understanding various metrics and terminologies
- Detailed explanations of AI models, data, context, and evaluation methods

******
## Deliverables

### Question Bank and Product Impact
We proposed the following question bank to inform the design of explainability features for AI governance tools, including IBM's [Watsonx.Governance](https://www.ibm.com/products/watsonx-governance).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/governance_question_bank.jpg" title="Question Bank" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

### Publication
We presented our findings at the CHI Conference on Human Factors in Computing {% cite 2025-understanding-do %}. 

Watch our presentation [video](https://www.youtube.com/watch?v=CVXqcXbwNcw}) to learn more!
<div class="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/CVXqcXbwNcw"
          width="800" height="450"
          title="Presentation"
          allowfullscreen>
  </iframe>
</div>


<div class="text-center mb-3">
  <a href="{{ '/projects/' | relative_url }}" class="btn btn-primary btn-sm">
    ← Back to Projects
  </a>
</div>