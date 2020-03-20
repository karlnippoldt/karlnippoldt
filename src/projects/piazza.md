---
eleventyNavigation:
  key: Piazza
  parent: Projects
tags: project
title: Piazza User Research and Design Improvements
date: 2019-06-11
date_string: April–June 2019
role: UX Researcher
skills:
    - User Research
    - Usability Testing
description: I resolved interface frustrations in Piazza, an academic question and answer website, conducting interviews, a survey using Qualtrics, and observational experiments.
resume_description:
    - Conducted interviews, a survey using Qualtrics, and observational experiments
    - Resolved interface frustrations discovered through user research
thumbnail: /assets/images/projects/piazza/thumbnail.png
thumbnail_alt: Screenshot of Piazza redesign mockup
---
{% section %}
## Purpose
**My project was to research design issues in Piazza,** a question and answer website used in a classroom setting. The current product is successfully used by students, but they often encounter difficulties achieving their goals because of the current design.
{% endsection %}

{% section %}
## Deliverables
**The final deliverable for this project is a set of mockups** that resolve user interface issues found through our research. Along the way, we collected survey results, wrote notes on our interviews and usability tests, drew interface sketches, and created a document with our heuristic evaluations.
{% endsection %}

{% section %}
## Process
**This project was focused on user research.** My team learned about users' needs, wants, and values through interviews and a survey, then conducted an observational experiment to learn about pain points in the interface. From this information, we created mockups of new designs to resolve the pain points we found.
{% endsection %}

{% section %}
## My Role
**I focused on creating the survey and conducting interviews and usability tests.** My team consisted of 5 people, all of us part of a 10-week project class. I regularly met both with users, to gather information for the project, and my team, to create protocols and supporting documents for our tests.
{% endsection %}

{% section tall=true %}
***
{% endsection %}

{% section tall=true %}
# Process

<div class="timeline-row">
    <div class="timeline-col">
        <a href="#research">
            <img src="/assets/images/projects/piazza/research.svg" alt="">
            <p>Research</p>
        </a>
    </div>
    <div class="timeline-col">
        <a href="#personas">
            <img src="/assets/images/projects/piazza/personas.svg" alt="">
            <p>Personas</p>
        </a>
    </div>
    <div class="timeline-col">
        <a href="#evaluation">
            <img src="/assets/images/projects/piazza/evaluation.svg" alt="">
            <p>Evaluation</p>
        </a>
    </div>
    <div class="timeline-col">
        <a href="#design">
            <img src="/assets/images/projects/piazza/design.svg" alt="">
            <p>Design</p>
        </a>
    </div>
</div>

{% section id="research" %}
## Research

{% section classStr="image-margins-x text-center" %}
{% Image src="/assets/images/projects/piazza/research.svg", alt="Illustration of two people sitting by table for interview", classStr="illustration" %}
{% endsection %}

{#
Missing Competitive Analysis
#}

{% lead %}
To learn about current users of Piazza and their goals and experiences, my team conducted interviews.
{% endlead %}

Each of us interviewed some of the participants, following a semi-structured interview format about 30 minutes long. In the interview, I had a basic set of questions that were asked to all participants, but asked other questions when relevant.

To analyze these results, I read through my interview notes and collected affinity notes. My team then combined our notes into an affinity diagram. The affinity diagram gave us a much clearer understanding of the user’s needs, wants, and values, helping us create personas of users in our target population.

{% lead %}
To learn more about Piazza users than we could with just interviews, my team conducted a short survey.
{% endlead %}

The questions I used emphasized how users currently utilize Piazza and issues they encounter with it. The initial draft of the survey questions was worked on collaboratively. I edited the rough draft of questions and created the Qualtrics version that we distributed.

{% section classStr="text-center" %}
{% Button {
    text: "View survey questions",
    icon: "feather:external-link",
    href: "/assets/pdf/projects/piazza/survey_questions.pdf",
    buttonType: "primary",
    large: true,
    newWindow: true
}%}
{% endsection %}

We posted our survey on various UCI social media groups on Facebook, UCI’s subreddit, Canvas discussions, and other school-related social media pages. We also sent the survey to friends and acquaintances that use Piazza or have used Piazza in the past. We collected a total of 31 responses to the survey.

{% ImageThumbs {
    imagesSrc: ["/assets/images/projects/piazza/survey_results_1.png","/assets/images/projects/piazza/survey_results_2.png"],
    imagesAltText: ["Results for &quot;What year are you in school?&quot;","Results for &quot;How often do you do the following on the Piazza Q&A section?&quot;"],
    id: "lightbox:survey",
    border: true,
    caption: true
} %}

{#
Missing Survey Results
#}
{% endsection %}

{% section id="personas" %}
## Personas

{% section classStr="image-margins-x text-center" %}
{% Image src="/assets/images/projects/piazza/personas.svg", alt="Illustration of two people studying at desks", classStr="illustration" %}
{% endsection %}

After our interviews and the survey, we had a clearer picture of Piazza's users. Given that our research was done almost entirely with undergraduate college students, our results were somewhat biased. However, since college students are a primary target demographic for Piazza, our data is still useful.

{% lead %}
We created personas for three primary types of students that use Piazza.
{% endlead %}

{% ImageThumbs {
    imagesSrc: ["/assets/images/projects/piazza/persona_1.jpg","/assets/images/projects/piazza/persona_2.jpg","/assets/images/projects/piazza/persona_3.jpg"],
    imagesAltText: ["Persona for Sally Stark","Persona for David Hwang","Persona for Peter Smith"],
    imagesWidth: [800,800,800],
    id: "lightbox_personas",
    border: true,
    caption: true
} %}

* Sally Stark is an active user who both asks and answers questions frequently.
* David Hwang reads others' questions and answers, but doesn't post any of his own.
* Peter Smith checks Piazza frequently and posts questions, but doesn't answer others' questions.

{% section classStr="text-center" %}
{% Button {
    text: "View personas",
    icon: "feather:external-link",
    href: "/assets/pdf/projects/piazza/personas.pdf",
    buttonType: "primary",
    large: true,
    newWindow: true
}%}
{% endsection %}

{% endsection %}

{% section id="evaluation" %}
## Evaluation

{% section classStr="image-margins-x text-center" %}
{% Image src="/assets/images/projects/piazza/evaluation.svg", alt="Illustration of a design with feedback written on it", classStr="illustration" %}
{% endsection %}


Our interviews and survey gave us a clearer idea of Piazza's user base and what interactions are common when using Piazza, but at this point we had minimal information on what could be improved in its interface.

{% lead %}
To gather more information on interface pain points, my team conducted 30-minute-long usability tests with 5 users.
{% endlead %}

Together, we wrote a set of tasks for our participants, who had various levels of expertise with Piazza, to complete, encompassing both common and less-common interactions. I compiled them into a document which I printed and gave to each participant during the usability test. We used a think-aloud protocol for the tests, to giving us insight into what users were thinking as they carried out the tasks.

{% section classStr="text-center" %}
{% Button {
    text: "View usability tasks",
    icon: "feather:external-link",
    href: "/assets/pdf/projects/piazza/usability_tasks.pdf",
    buttonType: "primary",
    large: true,
    newWindow: true
}%}
{% endsection %}

{% lead %}
My team performed a cognitive walkthrough to identify further potential usability problems that may not have been uncovered previously.
{% endlead %}

Because we had already uncovered quite a few usability issues and had a limited timeframe to complete the project, we chose three common user flows to evaluate:

* Post a new note.
* Start a question, save it as a draft, then post the draft.
* Ask a question with a picture, then favorite.

Team members rotated between the roles of the facilitator, participant and scribe for each of the three tasks. The facilitator made sure that the cognitive walkthrough was on track, the participant used the software to complete tasks, and the scribe wrote notes at each step of the walkthrough.

{#
Missing Sketches
#}
{% endsection %}

{% section id="design" %}
## Design

{% section classStr="image-margins-x text-center" %}
{% Image src="/assets/images/projects/piazza/design.svg", alt="Illustration of a mobile design as a wireframe and mockup", classStr="illustration" %}
{% endsection %}

{% lead %}
After testing the usability of the current version of Piazza, my team compiled the issues we discovered and created mockups for possible solutions to these problems.
{% endlead %}

**Users were unable to find the History slider to view previous versions of a post.** Even expert users did not even know this feature existed. We increased discoverability of the history feature by adding a button which brings up the history view. This solution also decreases clutter on the page.

{% ImageThumbs {
    imagesSrc: ["/assets/images/projects/piazza/history_before.png","/assets/images/projects/piazza/history_after.png"],
    imagesAltText: ["Before: history slider","Mockup: history button in Actions"],
    imagesWidth: [700,700],
    id: "lightbox_history",
    border: true,
    caption: true
} %}

**The location of the Follow and Favorite features was difficult for users to find.** In addition, users were unsure of the difference between their functionalities. To resolve this issue, we combined Follow and Favorite into one Bookmarks feature. Bookmarking both sends notifications and saves the post in a list for viewing later.

{% ImageThumbs {
    imagesSrc: ["/assets/images/projects/piazza/bookmark_before.png","/assets/images/projects/piazza/bookmark_after.png"],
    imagesAltText: ["Before: Follow and Favorite features","Mockup: Bookmarks feature"],
    imagesWidth: [700,700],
    id: "lightbox_bookmark",
    border: true,
    caption: true
} %}

**Piazza provides a number of filtering options, but discovering and using them was difficult.** Most users were not aware of the option to filter posts, but had a strong desire for an efficient way to find existing questions. We organized the filtering options and placed them in a toolbar where they are more visible and discoverable.

{% ImageThumbs {
    imagesSrc: ["/assets/images/projects/piazza/filters_before.png","/assets/images/projects/piazza/filters_after.png"],
    imagesAltText: ["Before: different filters in different places","Mockup: organized filters in toolbar"],
    imagesWidth: [1000,1000],
    id: "lightbox_filters",
    border: true,
    caption: true
} %}

**When a user wrote a post and saved a draft, how to find it later was unclear.** Initially, the draft would appear in a Drafts section in the sidebar, but once the user would leave the draft, it disappeared. The only way to see the Drafts section again is to click New Post. To solve this problem, we added a Drafts button next to the New Question button. When users click this button, a list of drafts appears in the sidebar from which the user can select.

{% ImageThumbs {
    imagesSrc: ["/assets/images/projects/piazza/drafts_before.png","/assets/images/projects/piazza/drafts_after.png"],
    imagesAltText: ["Before: disappearing drafts only in the sidebar","Mockup: drafts button"],
    imagesWidth: [350,350],
    id: "lightbox_drafts",
    border: true,
    caption: true
} %}

**The Follow-Up Discussion section was used as a comments section,** with questions posted as follow-ups going unanswered. We changed Follow-Up Discussions to a standard Comments feature, representing how users actually use the feature.

{% ImageThumbs {
    imagesSrc: ["/assets/images/projects/piazza/post_before.png","/assets/images/projects/piazza/post_after.png"],
    imagesAltText: ["Before: original layout of the post page","Mockup: new layout of the post page"],
    imagesWidth: [700,700],
    id: "lightbox_post",
    border: true,
    caption: true
} %}

**Users felt inundated with constant, useless emails.** When users join a class, they were subscribed to emails by default. Users could change the email setting, but because the settings were specific to each class, when they would join a new one, it would be set to the default email settings. We added default email settings that apply to all classes, retaining class-specific settings under an Advanced Options section.

{% ImageThumbs {
    imagesSrc: ["/assets/images/projects/piazza/email_before.png","/assets/images/projects/piazza/email_after.png"],
    imagesAltText: ["Before: email settings per class","Mockup: global email settings"],
    imagesWidth: [700,700],
    id: "lightbox_email",
    border: true,
    caption: true
} %}

{% lead %}
After my team completed the mockups, we individually performed heuristic evaluations on each of the design targets.
{% endlead %}

We used Jakob Nielsen’s 10 general principles for interaction design as a reference. We then synthesized our individual evaluations into one document.

{#
Missing Heuristic Evaluation document
#}
{% endsection %}
{% endsection %}

{% section tall=true %}
# Conclusion

{% lead %}
Our new designs provided noticeable improvements to Piazza's interface.
{% endlead %}

There is still some room for improvement, however. Some of our new designs did not completely fix the issues we found in user testing, and our help and documentation is still lacking.

Altogether, my team both collected helpful information about Piazza users and solved the issues we found. We first learned about how students use Piazza and their common pain points through interviews, a survey, and usability tests. Then, we created new designs for pain points based on our findings, fixing the usability problems we found in our research.
{% endsection %}