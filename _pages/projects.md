---
layout: page
title: Research
permalink: /research/
description:
nav: true
nav_order: 3
display_categories: #[work, fun]
horizontal: false
---

## Research mission

We design, develop, and study AI systems that help people understand system behavior, interact with it effectively, and use it responsibly. Our research lab aims to create AI technologies that are both technically reliable and socially beneficial.


## Student opportunities

I welcome motivated students who are interested in research at the intersection of HCI and AI.

If you are interested in joining or collaborating on projects, please send a short [email](mailto:dohyojin@hanyang.ac.kr) describing:

- your background, relevant coursework, or experience
- what you are looking for (e.g., research assistantship, capstone project, independent study)
- the research area you are interested in, if any

## Coming soon

This page will continue to grow as the lab takes shape, with more details on group members, ongoing research, collaborations, and open positions over time.


## Featured projects


**We are also open to related ideas and collaborations beyond the projects highlighted below.**

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
