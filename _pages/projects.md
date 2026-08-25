---
layout: page
title: Research
permalink: /projects/
description: ""
nav: false
nav_order: 3
display_categories: #[work, fun]
horizontal: false
---

## Mission

We design, develop, and study AI systems that help people understand system behavior, interact with it effectively, and use it responsibly. Our research lab aims to create AI technologies that are both technically reliable and socially beneficial.


## Topics of Interest

- **LLM-based Evaluation:** Designing human-in-the-loop LLM-based evaluation methods and tools that help practitioners assess the quality of data.
- **AI Hallucination:** Studying how AI-generated information can be presented in ways that help users understand uncertainty and calibrate their trust.
- **Agent Governance:** Exploring mechanisms for governing AI agents, including oversight, accountability, transparency, and human control over agentic systems and their actions.
- **Conversational Interaction:** Designing conversational assistants and interfaces that improve communication, collaboration, and user understanding.
- **AI Transparency:** Investigating how the use, ownership, and accountability of AI should be communicated in human–AI co-created and AI-assisted work.
- **And More:** We are also open to related ideas and collaborations beyond the topics listed above.


## Featured projects
<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>




## Student opportunities

If you are interested in joining or collaborating on projects, please send a short [email](mailto:dohyojin@hanyang.ac.kr) describing:

- your background, relevant coursework, or experience
- what you are looking for (e.g., research assistantship, capstone project, independent study)
- the research area you are interested in, if any



## Coming soon

I don't have a research group webpage yet, but it will be launched soon as the lab takes shape. Stay tuned for more details on group members, ongoing research, and open positions!