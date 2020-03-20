---
eleventyNavigation:
  key: Real Estate Analysis
  parent: Projects
tags: project
title: Real Estate Market Analysis Product Redesign
date: 2020-02-01
date_string: September 2019–March 2020
role: UX Designer
skills:
    - UX/UI Design
    - User Research
    - Information Architecture
    - Brand Identity
description: I created a modern, usable design for a real estate market analysis product using Figma, both improving interfaces for existing features and adding useful new ones, as part of a user-centered design process.
resume_description:
    - Created a modern, usable design for real estate market analysis software using Figma
    - Conducted user research, including surveys, as part of a user-centered design process
thumbnail: /assets/images/projects/realestate/thumbnail.png
thumbnail_alt: Laptop with real estate market analysis software on screen
---
{% section %}
## Purpose

**My project was to redesign a real estate market analysis product** used by professionals in the real estate industry such as real estate agents, bankers, business analysts, and mortgage consultants. The original version was functional, but old, and did not provide the best-in-class experience customers expect. For this project, my team worked with a leading mortgage data and analytics company through our senior capstone project class at UC Irvine.
{% endsection %}

{% section %}
## Deliverables

**I created a new, modern design for this product using Figma.** I implemented improved interfaces for existing features, added new features, including account settings and a dashboard, and created a library of components to ensure consistency throughout the interface. The new design was informed by the results of my team's survey and previous interviews performed by the company. We also created a front-end implementation of our new design using Angular.
{% endsection %}

{% section %}
## Process

**My team followed as close to a user-centered design process as we could,** given the constraints of the project. We began by getting up to speed on the users—who they are and why they use the software—meeting with the product manager, the person at the company most familiar with them. We then evaluated our priorities in a redesign by conducting a survey and reviewing previous user interviews. From this information, I developed a clickable, high-fidelity mockup of a redesign of the system using Figma. Based on the mockup, we created a working prototype in Angular.{# We then tested the mockup with users, using our findings to inform our creation of a working prototype in Angular.#}
{% endsection %}

{% section %}
## My Role

**My primary role in this project was closest to that of a UX designer.** For this project, I was part of a team of six students. My team worked together on initial sketches; from there, I created both wireframes and the high-fidelity mockup.{# I also evaluated the front-end implementation of the interface and ensured its consistency with the mockup. #} I was also one of two primary contacts between my team and the sponsoring company for our project, scheduling meetings and ensuring consistent communication between the two teams.
{% endsection %}

{% ImageThumbs {
    imagesSrc: ["/assets/images/projects/realestate/showcase_1.png","/assets/images/projects/realestate/showcase_2.png"],
    imagesAltText: ["Home screen","Search screen, geography filter"],
    imagesWidth: [1280,1280],
    id: "lightbox_showcase",
    border: true,
    caption: true
} %}

{% section classStr="text-center" %}
{% Button {
    text: "Skip to Mockup",
    icon: "feather:arrow-down",
    href: "#mockup",
    large: true
}%}
{% endsection %}

{% section tall=true %}
***
{% endsection %}

{% section tall=true %}
# Process

<div class="timeline-row">
    <div class="timeline-col">
        <a href="#research">
            <img src="/assets/images/projects/realestate/research.svg" alt="">
            <p>Research</p>
        </a>
    </div>
    <div class="timeline-col">
        <a href="#personas">
            <img src="/assets/images/projects/realestate/personas.svg" alt="">
            <p>Personas</p>
        </a>
    </div>
    <div class="timeline-col">
        <a href="#sketches">
            <img src="/assets/images/projects/realestate/sketches.svg" alt="">
            <p>Sketches and Wireframes</p>
        </a>
    </div>
    <div class="timeline-col">
        <a href="#design">
            <img src="/assets/images/projects/realestate/design.svg" alt="">
            <p>Design</p>
        </a>
    </div>
    <div class="timeline-col">
        <a href="#prototype">
            <img src="/assets/images/projects/realestate/prototype.svg" alt="">
            <p>Prototype</p>
        </a>
    </div>
</div>

{% section id="research" %}
## Research

{% section classStr="image-margins-x text-center" %}
{% Image src="/assets/images/projects/realestate/research.svg", alt="Illustration of house with magnifying glass", classStr="illustration" %}
{% endsection %}

We began our project by undertaking to understand the users of this product. My team's prior exprience in the real estate industry was limited, so we devoted quite a bit of time to this task.

{% lead %}
Our goal was to understand the user's journey, their goals when they open the software, and the steps they take to get there.
{% endlead %}

We started by talking with those at the company who were already familiar with the product's users, such as the product manager. While the company wants to stay up to date with a more modern design for this product, users are resistant to change and a radical redesign would likely cause them to lose customers. However, users did desire some additional features not present in the original product. For example, the original system did not provide any way for them to manage their account. If the user forgot their password, they had to contact customer service to get it changed. This was both frustrating to users and a significant expense for the company.

{% lead %}
We created a 15-question survey to learn about the users and which features they value most.
{% endlead %}

We worked as a team to compile the questions, consulting with a UX designer at the company to ensure our questions were valuable and concise. From the final list of questions, I created the survey on Qualtrics.

{% section classStr="text-center" %}
{% Button {
    text: "View survey questions",
    icon: "feather:external-link",
    href: "/assets/pdf/projects/realestate/survey_questions.pdf",
    buttonType: "primary",
    large: true,
    newWindow: true
}%}
{% endsection %}

While we were not able send the survey directly to users, a link to complete the survey was shown to users when they opened the product. We received nine responses to our survey, though ideally we would have had more.

{% lead %}
We were able to learn some valuable information from the survey responses we received.
{% endlead %}

Users were, for the most part, satisfied with the functionality the product offers, not expressing a significant desire for any one of the features proposed in the survey. Users preferred to interact with data outside the product instead of using its built-in visualization features, indicating a possible area for improvement. After the survey was completed, I created a document summarizing the data collected and how it would impact our project.

{% section classStr="text-center" %}
{% Button {
    text: "View survey results summary",
    icon: "feather:external-link",
    href: "/assets/pdf/projects/realestate/survey_results.pdf",
    buttonType: "primary",
    large: true,
    newWindow: true
}%}
{% endsection %}
{% endsection %}

{% section id="personas" %}
## Personas

{% section classStr="image-margins-x text-center" %}
{% Image src="/assets/images/projects/realestate/personas.svg", alt="Illustration of a woman and a man next to each other", classStr="illustration" %}
{% endsection %}

{% lead %}
From the information we learned about the users from our research, we created personas and storyboards.
{% endlead %}

{% ImageThumbs {
    imagesSrc: ["/assets/images/projects/realestate/persona_1.png","/assets/images/projects/realestate/persona_2.png","/assets/images/projects/realestate/persona_3.png"],
    imagesAltText: ["Persona for Mark San","Persona for Stacy Rose","Persona for Jacob Williams"],
    imagesWidth: [1646,1646,1646],
    id: "lightbox_personas",
    border: true,
    caption: true
} %}
{% ImageThumbs {
    imagesSrc: ["/assets/images/projects/realestate/storyboard_1.png","/assets/images/projects/realestate/storyboard_2.png"],
    imagesAltText: ["Storyboard: Stacy retrieves a saved search","Storyboard: Mark creates a new custom search"],
    imagesWidth: [1999,1999],
    id: "lightbox_personas",
    border: true,
    caption: true
} %}
{% endsection %}

{% section id="sketches" %}
## Sketches and Wireframes

{% section classStr="image-margins-x text-center" %}
{% Image src="/assets/images/projects/realestate/sketches.svg", alt="Illustration of a woman sketching user interface elements", classStr="illustration" %}
{% endsection %}

{% lead %}
My team began designing a new interface together, beginning with sketching designs on a whiteboard.
{% endlead %}

A particularly challenging design problem was creating a screen to refine the geography of a search. The user should be able to choose between different data types (State, County, etc.), and select options within each of them. For problems like this, each member of the team sketched different solutions to this problem. For our final design, we put together the best ideas from each of the sketches. As we encountered further design problems later in development, one other team member and I collaborated using a similar process.

{% ImageThumbs {
    imagesSrc: ["/assets/images/projects/realestate/sketch_sidebar.jpg","/assets/images/projects/realestate/sketch_account.jpg"],
    imagesAltText: ["Sketch: navigation sidebar","Sketch: account settings screen"],
    imagesWidth: [2016,1512],
    id: "lightbox_sketches",
    caption: true
} %}

{% lead %}
With a clearer idea of what our screens should look like, I created wireframes using Balsamiq.
{% endlead %}

{% ImageThumbs {
    imagesSrc: ["/assets/images/projects/realestate/wireframe_1.png","/assets/images/projects/realestate/wireframe_2.png","/assets/images/projects/realestate/wireframe_3.png"],
    imagesAltText: ["Wireframe: search, geography filter","Wireframe: search, time period filter","Wireframe: search, loan options filter"],
    imagesWidth: [1024,1024,1024],
    id: "lightbox_wireframes",
    caption: true
} %}

A major challenge my team encountered was not being able to use the system we were redesigning until two months into the project. By the time the company gave us access to the system, we needed to have completed a significant amount of work towards a new design. To move forward with the project, we used video recordings and screenshots of product demos as our primary source of information. While we were able to make significant progress despite not being able to use the product, we later encountered delays as we realized shortcomings in some of our designs and had to go back to the drawing board.
{% endsection %}

{% section id="design" %}
## Design

{% section classStr="image-margins-x text-center" %}
{% Image src="/assets/images/projects/realestate/design.svg", alt="Illustration of a canvas with sketches next to a tablet computer", classStr="illustration" %}
{% endsection %}

{% lead %}
Using the company styles available to me, I created high-fidelity designs in Figma.
{% endlead %}

First, I created the styles and components (such as buttons and cards) to use on the mockup, ensuring consistency across different screens. The company does have a comprehensive library style guide for UI design, but as a non-employee, I did not have access to it, so I based fonts and colors of the components on a print version of the company's style guide.

With these styles and components, I created an initial set of designs for the various screens in the product.

{% ImageThumbs {
    imagesSrc: ["/assets/images/projects/realestate/search_before.png","/assets/images/projects/realestate/settings_before.png"],
    imagesAltText: ["Initial design: search screen, geography filter","Initial design: settings screen"],
    imagesWidth: [1280,1280],
    id: "lightbox_design",
    border: true,
    caption: true
} %}

The expert opinion of designers both on and outside the team was our primary source of feedback. After a few screens had been created, I showed the designs to the product manager, who generally liked them, but provided a few suggestions for improvements, primarily to rename some elements to conform to industry standard. Throughout the project, I also consulted with a UX designer at the company, who provided valuable feedback, particularly on information architecture and visual design conventions.

{% lead %}
Based on the feedback we received, I updated the design of the mockup to better fit user needs.
{% endlead %}

I toned down the colors in the initial design for a more conservative, businesslike look, leaving the red accent color for buttons and headings to match the company's branding. I also updated the design of components and buttons with drop shadows and icons for a more modern look.

{% ImageThumbs {
    imagesSrc: ["/assets/images/projects/realestate/search_after.png","/assets/images/projects/realestate/settings_after.png"],
    imagesAltText: ["Final design: search screen, geography filter","Final design: settings screen"],
    imagesWidth: [1280,1280],
    id: "lightbox_design",
    border: true,
    caption: true
} %}
{% endsection %}

{% section id="prototype" %}
## Prototype

{% section classStr="image-margins-x text-center" %}
{% Image src="/assets/images/projects/realestate/prototype.svg", alt="Illustration of pages on a website", classStr="illustration" %}
{% endsection %}

{% lead %}
From the mockups, I created an interactive prototype to validate our final design.
{% endlead %}

<div id="mockup" class="section section-wide">
    <div class="rounded embed-responsive embed-responsive-16by11">
        <iframe class="embed-responsive-item" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FHZ4a73YKOOzJQxJoTLZOvd%2FRealtrack-Mockups%3Fnode-id%3D14%253A29%26scaling%3Dcontain" allowfullscreen></iframe>
    </div>
</div>
{% endsection %}
{% endsection %}

{% section tall=true %}
# Conclusion

{% lead %}
While the project is still in progress, we've already come a long way towards achieving a significantly more usable design for the product and adding useful features.
{% endlead %}

In this project, I've designed for an industry I'm unfamiliar with, which has taught me the importance of interacting with users in creating a useful design. We have, so far, not been able to talk to any users directly, making understanding how they use the product much more difficult. Without direct interaction with the users, a survey with well-planned questions was a remarkably helpful tool in gaining insight into their desires and goals.
{% endsection %}

<div class="section-tall">
    <div class="card bg-secondary border-0 text-center text-dark">
        <div class="card-body">
            <span class="h1 iconify" data-icon="feather:info"></span>
            <p class="lead">I'm still completing this project. Check back later for more details.</p>
        </div>
    </div>
</div>