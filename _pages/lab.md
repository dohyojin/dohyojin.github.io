---
layout: page
title: Lab
permalink: /lab/
description: Human-centered AI and HCI research group
nav: true
nav_order: 4
---

## Research mission

My research investigates how people interact with AI systems in real-world settings and how AI shapes human behavior and cognition. Building on these insights, I design AI systems that are more reliable, trustworthy, and useful.

## Research themes and featured projects

{% assign theme_projects = "LLM-as-a-Judge|Explainability|AI Governance|Conversational Interface|AI Disclosure" | split: "|" %}

<div class="row row-cols-1 g-4">
  {% for project in site.projects %}
    {% if theme_projects contains project.title %}
      <div class="col">
        <a href="{% if project.redirect %}{{ project.redirect }}{% else %}{{ project.url | relative_url }}{% endif %}" class="text-decoration-none text-reset">
          <div class="card h-100 hoverable">
            <div class="row g-0 align-items-center">
              {% if project.img %}
                <div class="col-md-4">
                  {% include figure.liquid
                    loading="eager"
                    path=project.img
                    sizes="300px"
                    alt="{{ project.title }} thumbnail"
                    class="card-img-left img-fluid rounded-start"
                  %}
                </div>
              {% endif %}
              <div class="col-md-{% if project.img %}8{% else %}12{% endif %}">
                <div class="card-body">
                  <h3 class="card-title">{{ project.title }}</h3>
                  <p class="card-text mb-2"><strong>Theme:</strong> {{ project.description }}</p>
                  {% if project.url %}
                    <span class="text-primary">Explore project →</span>
                  {% endif %}
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    {% endif %}
  {% endfor %}
</div>

## Student opportunities

I welcome motivated students who are interested in research at the intersection of HCI and AI.

If you are interested in joining or collaborating on projects, please send a short [email](mailto:dohyojin@hanyang.ac.kr) describing:

- your background, relevant coursework, or experience
- what you are looking for (e.g., research assistantship, capstone project, independent study)
- the research area you are interested in, if any

## Coming soon

This page will continue to grow as the lab takes shape, with more details on group members, ongoing research, collaborations, and open positions over time.
