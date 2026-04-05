---
layout: page
title: Conversational Interface
description: Designing conversational interfaces for a workflow automation system.
img: assets/img/publication_preview/Fig.3-XL-highlighted.png
redirect:
importance: 5
category: work
---
<div class="text-center mb-3">
  <a href="{{ '/projects/' | relative_url }}" class="btn btn-primary btn-sm">
    ← Back to Projects
  </a>
</div>

## Introduction
Natural language interfaces are increasingly deployed to help non-expert users navigate technical systems. I studied these natural language interfaces within the context of end-user programming tools, which allow users to create rules connecting business applications and data using naturalistic commands. 

For example, a user might type, “When there is a new incident on ServiceNow, send me a message on Slack and an email to my Gmail account,” and  automate the workflow between ServiceNow, Slack, and Gmail.
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/gofa-flow-2.png" caption="An example workflow automation" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## Problem
Goal-oriented natural language systems often struggle with **abstraction matching**, which refers to the difficulty users face in formulating utterances at an abstraction level the system can process (e.g., selecting correct vocabulary or sentence structure). Repeated failure to provide the “matching” input can lead to persistent system errors, making users to leave the system.

## Team
A team of user researchers, a UI designer, and software developers collaborated. My role was to conduct end-to-end user research, including planning experimental protocols, recruiting participants, designing surveys, running statistical analysis, and writing up results.

## Designs
Drawing on Clark and Brennan’s [communication grounding principle](https://en.wikipedia.org/wiki/Grounding_in_communication), I designed a **conversational grounding interface** where the agent and user collaborate to build the command. Instead of requiring a complete sentence upfront, the agent asks the user to compose provisional input; the user and agent then take turns presenting, referencing, and revising their inputs collaboratively until the user reaches their goal. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/Fig.1-XL.png" caption="Control Interface without grounding interaction" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/Fig.2-XL-highlighted.png" caption="Grounding Interface" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

I also designed variations of this grounding interface that allowed users to select from multiple options or use fill-in-the-blank style structured templates. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/Fig.3-XL-highlighted.png" caption="Grounding interface with multiple options (Multiple grounding)" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/Fig.4-XL-highlighted.png" caption="Grounding interface with structured input fields (Structured grounding)" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## User Study
We conducted a between-subjects experiment with 80 crowdworkers from Amazon Mechanical Turk. Each participant used one of the four interfaces: grounding, multiple grounding, structured grounding, and control interfaces.

Participants were given two tasks, with the goal to write a sentence describing a trigger-action program to automate a workflow. They responded to survey questions about their cognitive load, acceptance and perceptions of the system, and experiences with the system. We also measured task performance and communication costs. We ran statistical analysis (linear regression, linear mixed-effects regression) to compare the results. 

## Findings
The proposed grounding interfaces significantly reduced cognitive load and improved task performance. Furthermore, providing input structures enhanced the benefits of grounding by reducing conversational turns, improving task performance, and increasing technology acceptance, allowing users to feel in control without feeling constrained.

## Deliverables
### Product Impact
This research influenced the design of [IBM App Connect](https://www.ibm.com/products/app-connect), a natural language workflow automation system.

### Publication
The work was presented at the ACM conference on Computer-Supported Cooperative Work (CSCW) {% cite 10.1145/3686902 %}. 

<div class="text-center mb-3">
  <a href="{{ '/projects/' | relative_url }}" class="btn btn-primary btn-sm">
    ← Back to Projects
  </a>
</div>