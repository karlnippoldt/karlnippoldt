---
image_modal: true
order: 1
title: Real Estate Market Analysis Product Redesign
date: 2020-02-01
date_string: September 2019–March 2020
role: UX Designer
tags:
    - UX/UI Design
    - User Research
    - Information Architecture
    - Brand Identity
description: I created a modern, usable design for a real estate market analysis product using Figma, both improving interfaces for existing features and adding useful new ones, as part of a user-centered design process.
resume_description:
    - Created a modern, usable design for real estate market analysis software using Figma
    - Conducted user research, including surveys, as part of a user-centered design process
thumbnail: /assets/projects/realestate/thumbnail.png
thumbnail_alt: Laptop with real estate market analysis software on screen
---
## Purpose

**My project was to redesign a real estate market analysis product** used by professionals in the real estate industry such as real estate agents, bankers, business analysts, and mortgage consultants. The original version was functional, but old, and did not provide the best-in-class experience customers expect. For this project, my team worked with a leading mortgage data and analytics company through our senior capstone project class at UC Irvine.

## Deliverables

**I created a new, modern design for this product using Figma.** I implemented improved interfaces for existing features, added new features, including account settings and a dashboard, and created a library of components to ensure consistency throughout the interface. The new design was informed by the results of my team's survey and previous interviews performed by the company. We also created a front-end implementation of our new design using Angular.

## Process

**My team followed as close to a user-centered design process as we could,** given the constraints of the project. We began by getting up to speed on the users—who they are and why they use the software—meeting with the product manager, the person at the company most familiar with them. We then evaluated our priorities in a redesign by conducting a survey and reviewing previous user interviews. From this information, I developed a clickable, high-fidelity mockup of a redesign of the system using Figma. Based on the mockup, we created a working prototype in Angular.{% comment %} We then tested the mockup with users, using our findings to inform our creation of a working prototype in Angular.{% endcomment %}

## My Role

**My primary role in this project was closest to that of a UX designer.** For this project, I was part of a team of six students. My team worked together on initial sketches; from there, I created both wireframes and the high-fidelity mockup.{% comment %} I also evaluated the front-end implementation of the interface and ensured its consistency with the mockup. {% endcomment %} I was also one of two primary contacts between my team and the sponsoring company for our project, scheduling meetings and ensuring consistent communication between the two teams.

{% assign images="/assets/projects/realestate/showcase_1.png,/assets/projects/realestate/showcase_2.png" | split: ',' %}
{% assign images_alt="Home screen,Search screen&comma; geography filter" | split: ',' %}
{% assign images_width="1280,1280" | split: ',' %}
{% include img_thumbs.html images=images images_alt=images_alt images_width=images_width modal=true border=true caption=true %}

<a class="btn btn-secondary btn-lg" href="#mockup" role="button">
    View Mockup <span class="iconify" data-icon="ic:round-arrow-downward"></span>
</a>
{: .text-center}

***
{: .section-tall}

# Process

![Timeline of project process](/assets/projects/realestate/timeline.png){: .img-fluid}
{: .d-none .d-md-block .section-tall .section-wide}
![Timeline of project process](/assets/projects/realestate/timeline_small.png){: .img-fluid}
{: .d-block .d-md-none .section-tall}

## Research

We began our project by undertaking to understand the users of this product. My team's prior exprience in the real estate industry was limited, so we devoted quite a bit of time to this task.

Our goal was to understand the user's journey, their goals when they open the software, and the steps they take to get there.
{: .lead}

We started by talking with those at the company who were already familiar with the product's users, such as the product manager. While the company wants to stay up to date with a more modern design for this product, users are resistant to change and a radical redesign would likely cause them to lose customers. However, users did desire some additional features not present in the original product. For example, the original system did not provide any way for them to manage their account. If the user forgot their password, they had to contact customer service to get it changed. This was both frustrating to users and a significant expense for the company.

We created a 15-question survey to learn about the users and which features they value most.
{: .lead}

We worked as a team to compile the questions, consulting with a UX designer at the company to ensure our questions were valuable and concise. From the final list of questions, I created the survey on Qualtrics.

<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#surveyModal">
<span class="iconify" data-icon="ic:round-picture-as-pdf"></span> View survey questions
</button>
{: .section .text-center}

While we were not able send the survey directly to users, a link to complete the survey was shown to users when they opened the product. We received nine responses to our survey, though ideally we would have had more.

We were able to learn some valuable information from the survey responses we received.
{: .lead}

Users were, for the most part, satisfied with the functionality the product offers, not expressing a significant desire for any one of the features proposed in the survey. Users preferred to interact with data outside the product instead of using its built-in visualization features, indicating a possible area for improvement. After the survey was completed, I created a document summarizing the data collected and how it would impact our project.

<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#surveyResultsModal">
<span class="iconify" data-icon="ic:round-picture-as-pdf"></span> View survey results summary
</button>
{: .section .text-center}

## Personas

From the information we learned about the users from our research, we created personas and storyboards.
{: .lead}

{% assign images="/assets/projects/realestate/persona_1.png,/assets/projects/realestate/persona_2.png,/assets/projects/realestate/persona_3.png" | split: ',' %}
{% assign images_alt="Persona for Mark San,Persona for Stacy Rose,Persona for Jacob Williams" | split: ',' %}
{% assign images_width="1646,1646,1646" | split: ',' %}
{% include img_thumbs.html images=images images_alt=images_alt images_width=images_width modal=true border=true caption=true%}

{% assign images="/assets/projects/realestate/storyboard_1.png,/assets/projects/realestate/storyboard_2.png" | split: ',' %}
{% assign images_alt="Storyboard: Stacy retrieves a saved search,Storyboard: Mark creates a new custom search" | split: ',' %}
{% assign images_width="1999,1999" | split: ',' %}
{% include img_thumbs.html images=images images_alt=images_alt images_width=images_width modal=true border=true caption=true %}

## Sketches and Wireframes

My team began designing a new interface together, beginning with sketching designs on a whiteboard.
{: .lead}

A particularly challenging design problem was creating a screen to refine the geography of a search. The user should be able to choose between different data types (State, County, etc.), and select options within each of them. For problems like this, each member of the team sketched different solutions to this problem. For our final design, we put together the best ideas from each of the sketches. As we encountered further design problems later in development, one other team member and I collaborated using a similar process.

{% assign images="/assets/projects/realestate/sketch_sidebar.jpg,/assets/projects/realestate/sketch_account.jpg" | split: ',' %}
{% assign images_alt="Sketch: navigation sidebar,Sketch: account settings screen" | split: ',' %}
{% assign images_width="2016,1512" | split: ',' %}
{% include img_thumbs.html images=images images_alt=images_alt images_width=images_width modal=true caption=true %}

With a clearer idea of what our screens should look like, I created wireframes using Balsamiq.
{: .lead}

{% assign images="/assets/projects/realestate/wireframe_1.png,/assets/projects/realestate/wireframe_2.png,/assets/projects/realestate/wireframe_3.png" | split: ',' %}
{% assign images_alt="Wireframe: search&comma; geography filter,Wireframe: search&comma; time period filter,Wireframe: search&comma; loan options filter" | split: ',' %}
{% assign images_width="1024,1024,1024" | split: ',' %}
{% include img_thumbs.html images=images images_alt=images_alt images_width=images_width modal=true caption=true%}        

A major challenge my team encountered was not being able to use the system we were redesigning until two months into the project. By the time the company gave us access to the system, we needed to have completed a significant amount of work towards a new design. To move forward with the project, we used video recordings and screenshots of product demos as our primary source of information. While we were able to make significant progress despite not being able to use the product, we later encountered delays as we realized shortcomings in some of our designs and had to go back to the drawing board.

## Design
Using the company styles available to me, I created high-fidelity designs in Figma.
{: .lead}

First, I created the styles and components (such as buttons and cards) to use on the mockup, ensuring consistency across different screens. The company does have a comprehensive library style guide for UI design, but as a non-employee, I did not have access to it, so I based fonts and colors of the components on a print version of the company's style guide.

With these styles and components, I created an initial set of designs for the various screens in the product.

{% assign images="/assets/projects/realestate/search_before.png,/assets/projects/realestate/settings_before.png" | split: ',' %}
{% assign images_alt="Initial design: search screen&comma; geography filter,Initial design: settings screen" | split: ',' %}
{% assign images_width="1280,1280" | split: ',' %}
{% include img_thumbs.html images=images images_alt=images_alt images_width=images_width modal=true border=true caption=true %}

The expert opinion of designers both on and outside the team was our primary source of feedback. After a few screens had been created, I showed the designs to the product manager, who generally liked them, but provided a few suggestions for improvements, primarily to rename some elements to conform to industry standard. Throughout the project, I also consulted with a UX designer at the company, who provided valuable feedback, particularly on information architecture and visual design conventions.

Based on the feedback we received, I updated the design of the mockup to better fit user needs.
{: .lead}

I toned down the colors in the initial design for a more conservative, businesslike look, leaving the red accent color for buttons and headings to match the company's branding. I also updated the design of components and buttons with drop shadows and icons for a more modern look.

{% assign images="/assets/projects/realestate/search_after.png,/assets/projects/realestate/settings_after.png" | split: ',' %}
{% assign images_alt="Final design: search screen&comma; geography filter,Final design: settings screen" | split: ',' %}
{% assign images_width="1280,1280" | split: ',' %}
{% include img_thumbs.html images=images images_alt=images_alt images_width=images_width modal=true border=true caption=true %}

## Prototype
From the mockups, I created an interactive prototype to validate our final design.
{: .lead}

<div id="mockup" class="section section-wide">
    <div class="embed-responsive embed-responsive-16by11">
        <iframe class="embed-responsive-item" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FIVvee09cUX1MMCdSDHkyiB%2FRealtrack-Mockups%3Fscaling%3Dcontain%26node-id%3D14%253A29" allowfullscreen></iframe>
    </div>
</div>

# Conclusion

While the project is still in progress, we've already come a long way towards achieving a significantly more usable design for the product and adding useful features.
{: .lead}

In this project, I've designed for an industry I'm unfamiliar with, which has taught me the importance of interacting with users in creating a useful design. We have, so far, not been able to talk to any users directly, making understanding how they use the product much more difficult. Without direct interaction with the users, a survey with well-planned questions was a remarkably helpful tool in gaining insight into their desires and goals.

<div class="section-tall">
    <div class="card bg-secondary border-0 text-center text-dark">
        <div class="card-body">
            <span class="h1 iconify" data-icon="ic:round-info"></span>
            <p class="lead">I'm still completing this project. Check back later for more details.</p>
        </div>
    </div>
</div>

{% include pdf_modal.html id="surveyModal" title="User Survey Questions" src="/assets/projects/realestate/survey_questions.pdf" %}
{% include pdf_modal.html id="surveyResultsModal" title="User Survey Results" src="/assets/projects/realestate/survey_results.pdf" %}