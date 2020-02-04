---
image_modal: true
order: 1
title: Redesign of Real Estate Market Analysis Product
date: 2020-02-01
date_string: September 2019–March 2020
role: UX Designer
description: Created a modern revamp of real estate market analysis software for a leading mortgage data and analytics company
short_description: Created a modern revamp of real estate market analysis software for a leading mortgage data and analytics company
thumbnail: /assets/projects/realestate/thumbnail.png
thumbnail_alt: Laptop with real estate market analysis product on screen
---
# Overview

## Purpose

My team connected with our sponsor, a leading mortgage data and analytics company, through our senior capstone project class at UC Irvine. The project we were given was to create a new design for their real estate market analysis software. This product is a database used by professionals in the real estate industry such as real estate agents, bankers, business analysts, and mortgage consultants. It allows them to search public records for mortgage transactions, creating reports and filtering by lender, real estate agent, and more. Right now, it is functional, but old, and was not designed with user experience in mind. It does not provide the best-in-class experience its high price tag warrants.

## Objective

I created a high-fidelity interactive mockup for a new, modern design for this product. I implemented a new interface for existing features, added new features like account settings and a dashboard, and created a component library to ensure consistency across the interface. These changes were informed by the results of my team's survey and previous interviews performed by the company. My team also created a front-end implementation of our new design in Angular.

## Approach

After evaluating the skills of each of the members of the team, the company and my team decided we would produce two primary deliverables for this project, a clickable, high-fidelity mockup and a front-end prototype built with Angular. To create the mockup, we met with the product manager to learn general information about users—who they are and why they use the software. We then evaluated priorities in a redesign by conducting a survey and reviewing previous user interviews. From this information, we developed a clickable, high-fidelity mockup of a redesign of the system. We then tested the mockup with users, using our findings to inform our creation of a working prototype in Angular.

## My role

I was part of a team of six students. We did not have fixed position titles, but my primary role in this project was similar to a UX designer. My team worked together on initial sketches, but from there I created both wireframes and a high-fidelity mockup. I also evaluated the front-end implementation of the interface and ensured its consistency with the mockup.

I was also one of two primary contacts between my team and the sponsoring company for our project, scheduling meetings and ensuring consistent communication between us.

## Project duration

The project was completed over two quarters at UC Irvine, from September 2019 to March 2020.

{% assign images="/assets/projects/realestate/showcase_1.png,/assets/projects/realestate/showcase_2.png" | split: ',' %}
{% assign images_alt="Search screen&comma; geography filter,Account settings page" | split: ',' %}
{% assign images_width="1280,1280" | split: ',' %}
{% include img_thumbs.html images=images images_alt=images_alt images_width=images_width %}        

<a class="btn btn-primary btn-lg" href="#mockup" role="button">
    View Mockup <span class="iconify" data-icon="ic:sharp-arrow-downward"></span>
</a>
{: .text-center}

# Process

## Research

We began our project by trying to understand the users of this product. Nobody on my team had any experience with the real estate industry, so this initially seemed like a daunting task.

We wanted to understand the user journey, what their goal is they open the software, and the steps they take to get there. We started by talking with people at the company who were already familiar with the product's users, such as the product manager.

We learned from our meetings with the product manager that, while the company needs a more modern design for this product, product users are resistant to change and a radical redesign would likely cause them to lose customers. The current system does not provide the user any way to manage their account. If the user forgets their password, for example, they must contact customer service to get it changed. This is both frustrating to users and a significant expense for the company, so adding account management was a top priority for a new design.

We also created a 15-question survey to learn the features users value most and gauge' their level of tech-savviness and Excel proficiency. We worked as a team to compile the questions, consulting with a UX designer at the company to ensure our questions were valuable and concise. Once we had the questions, I created the survey with Qualtrics.

<button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#surveyModal">
    <span class="iconify" data-icon="ic:sharp-picture-as-pdf"></span> View survey questions
</button>

Unfortunately, the company did not keep any record of users' information, names or email addresses, so we were not able send the survey directly to them. Instead, a link to complete the survey was shown on the splash screen of the product when they opened it. We received nine responses to the survey. While we would have wanted a significantly larger number of responses, we were still able to learn valuable information.

Users were generally satisfied with the functionality the product offered, not expressing a significant desire for any of the features suggested in the survey. We learned that they use the product for both a high-level view of real estate trends and a detailed view of individual transactions, and prefer to interact with data outside the product even though the product provides some visualization features. Even though the product's data itself is out of the scope of our redesign and was not directly included in the survey, many users expressed their disappointment in the quality of the data provided in "Other" sections. After the survey was completed, I created a document summarizing the data collected and how it impacted our project.

<button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#surveyResultsModal">
    <span class="iconify" data-icon="ic:sharp-picture-as-pdf"></span> View survey results summary
</button>

## Ideation

From the information we gleaned from our research, we created user personas and storyboards for the product.

{% assign images="/assets/projects/realestate/persona_1.png,/assets/projects/realestate/persona_2.png,/assets/projects/realestate/persona_3.png" | split: ',' %}
{% assign images_alt="Persona for Mark San,Persona for Stacy Rose,Persona for Jacob Williams" | split: ',' %}
{% assign images_width="1646,1646,1646" | split: ',' %}
{% include img_thumbs.html images=images images_alt=images_alt images_width=images_width modal=true caption=true%}        

{% assign images="/assets/projects/realestate/storyboard_1.png,/assets/projects/realestate/storyboard_2.png" | split: ',' %}
{% assign images_alt="Storyboard: Stacy uses a saved search,Storyboard: Mark creates a new custom search" | split: ',' %}
{% assign images_width="1999,1999" | split: ',' %}
{% include img_thumbs.html images=images images_alt=images_alt images_width=images_width modal=true border=true caption=true %}

## Wireframe

We began designing a new interface together, beginning with drawing out our designs on a whiteboard. A particularly challenging issue was the screen to refine the geography of a search. The user can choose between different data types (State, County, etc.), and select options from each of them. We each came up with different solutions to this problem, then combined the best ideas from each of them. We followed a similar process for other screens in the app.

{% assign images="/assets/projects/realestate/sketch_sidebar.jpg,/assets/projects/realestate/sketch_account.jpg" | split: ',' %}
{% assign images_alt="Sketch: navigation sidebar,Sketch: account settings page" | split: ',' %}
{% assign images_width="2016,1512" | split: ',' %}
{% include img_thumbs.html images=images images_alt=images_alt images_width=images_width modal=true caption=true %}

Once we had a clearer idea of what we wanted some of these pages to look like, I created wireframes for many of the main screens using Balsamiq.

{% assign images="/assets/projects/realestate/wireframe_1.png,/assets/projects/realestate/wireframe_2.png,/assets/projects/realestate/wireframe_3.png" | split: ',' %}
{% assign images_alt="Wireframe: search&comma; geography filter,Wireframe: search&comma; time period filter,Wireframe: search&comma; loan options filter" | split: ',' %}
{% assign images_width="1024,1024,1024" | split: ',' %}
{% include img_thumbs.html images=images images_alt=images_alt images_width=images_width modal=true caption=true%}        

A major challenge my team encountered was that we were not able to use the system we were redesigning until two months into the project—almost halfway—at which point we had already completed a significant amount of work towards a new design. We used video recordings and screenshots of our meetings, where the product manager demoed the software to us, as our primary source of information. This didn't cover all of the pages of the product, though, so we had to wait until we had access to the system to learn about the features those pages contained. Fortunately, even with this lack of basic information, we did not make any major assumptions that would have required scrapping our designs once we had access to the system.

## Design

From these wireframes, I began to create a high-fidelity mockup with Figma. First, I created the styles and components (such as buttons and cards) to use on the mockup, ensuring consistency across different screens. The company does have a more comprehensive library for software designs, but as a non-employee, I did not have access to it, so I based the fonts and colors of the components on a print version of the company's style guide.

Unfortunately, due to the constraints on our project because we are not employed by the company, we do not have access to users to directly test the prototype with.

The expert opinion of designers both on and outside the team was our primary source of feedback. After a few screens had been created, I showed the designs to the product manager, who generally liked them, but provided a few suggestions for improvements, primarily to rename some elements to conform to industry standard. I also received feedback from a UX designer at the company.

<div id="mockup" class="section section-wide">
    <div class="embed-responsive embed-responsive-4by3">
        <iframe class="embed-responsive-item" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FvNLhx9IDeQbZ3Oes91zNhq%2FReal-Estate-Mockups-Copy%3Fnode-id%3D233%253A1806%26scaling%3Dscale-down-width" allowfullscreen></iframe>
    </div>    
</div>

# Conclusion

The project is still in progress, but we've already come a long way towards achieving a significantly more usable design for the product and adding features that will be useful for our target audience.

In this project, I've learned a lot about designing for a product used in an industry I'm unfamiliar in. We have, so far, not been able to talk to any users directly, which has made understanding how they use the product much more difficult. Without the ability to have direct interaction with the users, a survey with well-planned questions was a remarkably helpful tool in gaining insight into their desires and goals.

<div class="section-tall text-center">
    <div class="card">
        <div class="card-body">
            <span class="h1 iconify" data-icon="ic:sharp-info"></span>
            <p class="lead">I'm still completing this project. Check back later for more details.</p>
        </div>
    </div>
</div>

{% include pdf_modal.html id="surveyModal" title="User Survey Questions" src="/assets/projects/realestate/survey_questions.pdf" %}
{% include pdf_modal.html id="surveyResultsModal" title="User Survey Results" src="/assets/projects/realestate/survey_results.pdf" %}