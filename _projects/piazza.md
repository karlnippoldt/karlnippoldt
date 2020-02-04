---
order: 3
title: Piazza User Research and Design Improvements
date: 2019-06-11
date_string: April–June 2019
role: UX Researcher
description: Piazza is a question and answer website used in a classroom setting. As part of a 10-week project class, my team of 5 learned about how students use Piazza and their common pain points through interviews, a survey, and usability tests, then created a redesign based on our findings, fixing the usability problems we found in our research. My role focused on conducting the survey and conducting interviews and usability tests.
short_description: Resolved interface frustrations discovered through interviews, a survey, and observational experiments
thumbnail: /assets/projects/piazza/thumbnail.jpg
thumbnail_alt: Screenshot of Piazza redesign mockup
---

# Getting to know the users

## Interviews

To learn about current users of Piazza and their goals and experiences with Piazza, my team conducted interviews. Each of us interviewed some of the participants, following a semi-structured interview format about 30 minutes long. We had a basic set of questions that were asked to all participants, but we asked other questions if it would help in getting a more complete picture of how Piazza is used.

To analyze these results, each of us read through our interview notes and collected affinity notes, which we then combined into an affinity diagram. The affinity diagram gave us a much clearer understanding of the user’s needs, wants, and values, helping us create personas of users in our target population.

## Survey

To learn more about Piazza users than we could with just interviews, my team conducted a short survey. Initial drafts of the questions were worked on collaboratively, but I contributed a significant portion of the editing for the questions as well as creating the Qualtrics version that we distributed. The questions I used emphasized how users currently utilize Piazza and issues they encounter with it.

We posted our survey on various UCI social media groups on Facebook, UCI’s subreddit, Canvas discussions, and other school-related social media pages. We also sent the survey to friends and acquaintances that use Piazza or have used Piazza in the past. We collected a total of 31 responses to the survey.

<button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#surveyModal">
    <span class="iconify" data-icon="ic:sharp-picture-as-pdf"></span> View survey questions
</button>

{% assign images="/assets/projects/piazza/survey_results_1.png,/assets/projects/piazza/survey_results_2.png" | split: ',' %}
{% assign images_alt="Results for &quot;What year are you in school?&quot;,Results for &quot;How often do you do the following on the Piazza Q&A section?&quot;" | split: ',' %}
{% include img_thumbs.html images=images images_alt=images_alt border=true caption=true %}

## Personas

After we conducted our interviews and gathered results from our survey, we had a clearer picture of what kind of people use Piazza. Of course, our results were not unbiased, given that our research was done almost entirely with undergraduate college students. However, since college students are a target demographic for Piazza, our information is still useful. We created personas with three primary types of students that use Piazza.

* Sally Stark, an active Piazza user who both asks and answers questions frequently.
* David Hwang, an occasional user who reads others' questions and answers, but doesn't post any of his own.
* Peter Smith, another occasional user who checks Piazza frequently and posts questions, but doesn't answer others' questions.

<button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#personaModal">
    <span class="iconify" data-icon="ic:sharp-picture-as-pdf"></span> View personas
</button>

{% assign images="/assets/projects/piazza/persona_1.jpg,/assets/projects/piazza/persona_2.jpg,/assets/projects/piazza/persona_3.jpg" | split: ',' %}
{% assign images_alt="Persona for Sally Stark,Persona for David Hwang,Persona for Peter Smith" | split: ',' %}
{% assign images_width="800,800,800" | split: ',' %}
{% include img_thumbs.html images=images images_alt=images_alt images_width=images_width border=true%}        

# Evaluating the interface

## Usability Tests

Our interviews and survey gave us a clearer idea of Piazza's user base and what interactions are common when using Piazza, but at this point we had minimal information on pain points in its interface.

To gather more information, we conducted 30-minute-long usability tests with 5 users at varying levels of expertise. Together, our team wrote a set of tasks for our participants to complete, encompassing both common and less-common interactions. I compiled them into a document which we printed out and gave to each participant as they completed the tasks. We used a think-aloud protocol to give us insight into what users were thinking as they carried out the tasks.

<button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#usabilityModal">
    <span class="iconify" data-icon="ic:sharp-picture-as-pdf"></span> View usability tasks
</button>

## Cognitive Walkthrough
My team performed a cognitive walkthrough to identify further potential usability problems that may not have been uncovered previouly. We did not have specific roles for the cognitive walkthrough, but our members did rotate between the roles of the facilitator, participant and scribe for each of the three tasks. The facilitator made sure that the cognitive walkthrough was on track, the participant used the software to complete tasks, and the scribe wrote notes at each step of the walkthrough.

Because we had already uncovered quite a few usability issues and had a limited timeframe to complete the project, we chose three common user flows to evaluate:

* Post a new note.
* Start a question, save it as a draft, then post the draft.
* Ask a question with a picture, then favorite.

# Redesign

After testing the usability of the current version of Piazza, my team compiled the issues we discovered and created mockups for possible solutions to these problems.
{: .lead }

When my team asked users how they would view previous versions of a post, they were often unable to find the History slider, even though it is always visible. Even expert users did not even know this feature existed. We increased discoverability of the history feature by adding a button which brings up the history view. This solution also decreases clutter on the page.
    
{% assign images="/assets/projects/piazza/history_before.png,/assets/projects/piazza/history_after.png" | split: ',' %}
{% assign images_alt="Before: history slider,Mockup: history button in Actions" | split: ',' %}
{% assign images_width="700,700" | split: ',' %}
{% include img_thumbs.html images=images images_alt=images_alt images_width=images_width border=true caption=true %}

The current location of the Follow and Favorite features is difficult for users to find. In addition, users were unsure of the difference between their functionalities. To resolve this issue, we combined Follow and Favorite into one Bookmarks feature. Bookmarking both sends notifications and saves the post in a list for viewing later.
    
{% assign images="/assets/projects/piazza/bookmark_before.png,/assets/projects/piazza/bookmark_after.png" | split: ',' %}
{% assign images_alt="Before: Follow and Favorite features,Mockup: Bookmarks feature" | split: ',' %}
{% assign images_width="700,700" | split: ',' %}
{% include img_thumbs.html images=images images_alt=images_alt images_width=images_width border=true caption=true %}

Piazza provides a number of filtering options, but their interface is unconventional, making discovering and using them more difficult. Most users were not aware of the option to filter posts, but had a strong desire for an efficient way to find existing questions. We organized the filtering options and placed them in a toolbar where they are more visible and discoverable.
    
{% assign images="/assets/projects/piazza/filters_before.png,/assets/projects/piazza/filters_after.png" | split: ',' %}
{% assign images_alt="Before: different filters in different places,Mockup: organized filters in toolbar" | split: ',' %}
{% assign images_width="1000,1000" | split: ',' %}
{% include img_thumbs.html images=images images_alt=images_alt images_width=images_width border=true caption=true %}

When a user writes a post and saves a draft for later, finding it later is difficult. Initially, the draft appears in a Drafts section in the sidebar, but once the user leaves the draft, it disappears. The only way to see the Drafts section again is to click New Post. To solve this problem, we added a Drafts button next to the New Question button. When users click this button, a list of drafts appears in the sidebar from which the user can select.
    
{% assign images="/assets/projects/piazza/drafts_before.png,/assets/projects/piazza/drafts_after.png" | split: ',' %}
{% assign images_alt="Before: disappearing drafts only in the sidebar,Mockup: drafts button" | split: ',' %}
{% assign images_width="350,350" | split: ',' %}
{% include img_thumbs.html images=images images_alt=images_alt images_width=images_width border=true caption=true %}

On an existing post, users did not like the layout of the Follow-Up Discussion section, since in practice it is used like comments, with questions posted as follow-ups going unanswered. In our new design, we changed Follow-Up Discussions to a standard Comments feature, representing how users actually use the feature.
    
{% assign images="/assets/projects/piazza/post_before.png,/assets/projects/piazza/post_after.png" | split: ',' %}
{% assign images_alt="Before: original layout of the post page,Mockup: new layout of the post page" | split: ',' %}
{% assign images_width="700,700" | split: ',' %}
{% include img_thumbs.html images=images images_alt=images_alt images_width=images_width border=true caption=true %}

When users join a class in Piazza, they are subscribed to emails by default. Users felt they were inundated with constant, useless emails. Users can change the email setting, but because the settings are specific to each class, when they join a new one, it is set to the default email settings. We solved this problem by allowing the user to select default email settings that apply to all classes, while retaining class-specific settings under an Advanced Options section.
    
{% assign images="/assets/projects/piazza/email_before.png,/assets/projects/piazza/email_after.png" | split: ',' %}
{% assign images_alt="Before: email settings per class,Mockup: global email settings" | split: ',' %}
{% assign images_width="700,700" | split: ',' %}
{% include img_thumbs.html images=images images_alt=images_alt images_width=images_width border=true caption=true %}


# Heuristic Evaluation
After my team completed the mockups, we individually performed heuristic evaluations on each of the design targets using Jakob Nielsen’s 10 general principles for interaction design as a reference. We then synthesized our individual evaluations into one document.

Because we were at the end of our timeframe for completing the project, we were unfortunately unable to complete additional user testing on our new designs.

However, in our heuristic evaluation, we found that our new designs did improve on Piazza's existing interface, though there is still quite a bit of room for improvement. Some of our new designs did not completely fix the issues we found in user testing, and our help and documentation is still lacking.

{% include pdf_modal.html id="surveyModal" title="Survey Questions" src="/assets/projects/piazza/survey_questions.pdf" %}
{% include pdf_modal.html id="personaModal" title="Personas" src="/assets/projects/piazza/personas.pdf" %}
{% include pdf_modal.html id="usabilityModal" title="Usability Tasks" src="/assets/projects/piazza/usability_tasks.pdf" %}
