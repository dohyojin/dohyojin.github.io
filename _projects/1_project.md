---
layout: page
title: LLM Explainability
description: Exploring methods for explaining factuality and attributions of LLM outputs
img: assets/img/publication_preview/AIES1.png
importance: 1
category: work
related_publications: true
---

LLMs can generate factually incorrect information that appears plausible, a phenomenon known as "hallucination". Hallucinations pose risks not only for companies that leverage LLMs, but also for end users. For example, Google’s stock value dropped after its AI-powered product generated factual errors during a public demonstration; Air Canada was sued due to false information given by its AI-powered chatbot; and a lawyer was reprimanded by judges for referencing hallucinated case law.

There have been technical advancements in calculating factuality estimates, i.e., the assessment of how factual an AI-generated response is. Presenting an AI-generated response with factuality estimates allows users to recognize incorrect information, thus helping them to cross-check verified sources and make better decisions. We conducted a series of survey-based experiments aimed at identifying the most effective strategy for communicating the factuality estimates of an LLM’s response to users in a way that helps them comprehend the accuracy of the model's response and calibrate their trust while aligning with their preferences. 

In {% cite do2025highlightphrasesenhancingllm %}, we found that highlighting every phrase in a response using a color scale for its factuality estimate was the most preferred and trusted design.

In a follow-up study {% cite do2025hidehighlightunderstandingimpact %}, we found a promising alternative: hiding content estimated to be less factual, either by removing it or replacing it with ambiguous statements, can enhance user trust while maintaining perceived quality and transparency.
