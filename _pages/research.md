---
layout: page
title: Research
permalink: /research/
description: Human-centered AI research group
nav: true
nav_order: 4
---

## Research mission

We design, develop, and study AI systems that help people understand system behavior, interact with it effectively, and use it responsibly. Our research lab aims to create AI technologies that are both technically reliable and socially beneficial.

## Featured projects

{% assign project_urls = "/projects/evalassist/, /projects/explainability/, /projects/grounding/, /projects/disclosure/" | split: ", " %}

<div class="row row-cols-1 g-4">
  {% for project_url in project_urls %}
    {% assign project = site.projects | where: "url", project_url | first %}
    {% if project %}
      <div class="col">
        <a href="{{ project.url | relative_url }}" class="text-decoration-none text-reset">
          <div class="card h-100 hoverable">
            <div class="row g-0 align-items-center">
              {% if project.img %}
                <div class="col-md-4">
                  <div class="card-img-left img-fluid rounded-start">
                    {% include figure.liquid
                      loading="eager"
                      path=project.img
                      sizes="300px"
                      alt="{{ project.title }} thumbnail"
                    %}
                  </div>
                </div>
              {% endif %}
              <div class="col-md-{% if project.img %}8{% else %}12{% endif %}">
                <div class="card-body">
                  <h3 class="card-title">{{ project.title }}</h3>
                  <p class="card-text mb-2"><strong>Theme:</strong> {{ project.description }}</p>
                  <span class="text-primary">Explore project →</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    {% endif %}
  {% endfor %}
</div>

**We are also open to related ideas and collaborations beyond the projects highlighted above.**

## Student opportunities

I welcome motivated students who are interested in research at the intersection of HCI and AI.

If you are interested in joining or collaborating on projects, please send a short [email](mailto:dohyojin@hanyang.ac.kr) describing:

- your background, relevant coursework, or experience
- what you are looking for (e.g., research assistantship, capstone project, independent study)
- the research area you are interested in, if any

## Coming soon

This page will continue to grow as the lab takes shape, with more details on group members, ongoing research, collaborations, and open positions over time.
